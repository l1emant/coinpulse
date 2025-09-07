import { NextResponse } from 'next/server';
import { 
  findValidResetToken, 
  markTokenAsUsed, 
  updateUserPassword 
} from '@/features/auth/services/auth.service';
import { hashToken, isTokenExpired } from '@/features/auth/utils/auth.utils';

export async function POST(request: Request) {
  try {
    const { token, password } = await request.json();
    
    // Validate input
    if (!token || typeof token !== 'string') {
      return NextResponse.json(
        { error: 'Reset token is required' },
        { status: 400 }
      );
    }
    
    if (!password || typeof password !== 'string') {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }
    
    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters long' },
        { status: 400 }
      );
    }
    
    // Hash the token to compare with database
    const hashedToken = hashToken(token);
    
    // Find valid reset token
    const resetToken = await findValidResetToken(hashedToken);
    
    if (!resetToken) {
      return NextResponse.json(
        { error: 'Invalid or expired reset token' },
        { status: 400 }
      );
    }
    
    // Additional security check: Ensure token hasn't expired
    if (isTokenExpired(resetToken.expiresAt)) {
      return NextResponse.json(
        { error: 'Reset token has expired. Please request a new one.' },
        { status: 400 }
      );
    }
    
    // Hash the new password
    // In a real application, you would use bcrypt or similar
    const hashedPassword = hashToken(password); // Using our simple hash for demo
    
    // Update user's password
    await updateUserPassword(resetToken.userId, hashedPassword);
    
    // Mark token as used to prevent reuse
    await markTokenAsUsed(resetToken.id);
    
    return NextResponse.json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error('Password reset confirmation error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}