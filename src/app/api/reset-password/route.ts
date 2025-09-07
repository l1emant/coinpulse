import { NextResponse } from 'next/server';
import { findUserByEmail, createResetToken, sendResetEmail } from '@/features/auth/services/auth.service';
import { generateResetToken, generateExpiration } from '@/features/auth/utils/auth.utils';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    // Find user by email
    const user = await findUserByEmail(email);
    
    // For security reasons, we don't reveal whether the email exists in our database
    // We always send a success response, even if the email doesn't exist
    if (!user) {
      // In a real application, you might still want to log this for security monitoring
      console.log(`Password reset requested for non-existent email: ${email}`);
      return NextResponse.json({ message: 'If the email exists, a reset link has been sent' });
    }
    
    // Generate reset token
    const { token, hashedToken } = generateResetToken();
    const expiresAt = generateExpiration();
    
    // Store the hashed token in the database
    await createResetToken(user.id, hashedToken, expiresAt);
    
    // Send reset email
    // In a real application, you would construct a proper URL with your domain
    const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password/confirm?token=${token}`;
    await sendResetEmail(email, resetUrl);
    
    return NextResponse.json({ message: 'If the email exists, a reset link has been sent' });
  } catch (error) {
    console.error('Password reset request error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}