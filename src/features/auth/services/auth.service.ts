// Mock database service for authentication functionality
// In a real application, this would interact with your actual database

interface ResetToken {
  id: string;
  userId: string;
  hashedToken: string;
  expiresAt: Date;
  used: boolean;
}

interface User {
  id: string;
  email: string;
  password: string;
}

// Mock database collections
let resetTokens: ResetToken[] = [];
const users: Record<string, { email: string; password: string; resetToken?: string; resetTokenExpiry?: number }> = {
  '1': { email: 'user@example.com', password: 'hashedPassword123' }
};

/**
 * Find a user by email
 * @param email The email to search for
 * @returns The user object or null if not found
 */
export async function findUserByEmail(email: string): Promise<User | null> {
  const userEntries = Object.entries(users);
  for (const [id, userData] of userEntries) {
    if (userData.email === email) {
      return { id, ...userData };
    }
  }
  return null;
}

/**
 * Create a reset token for a user
 * @param userId The user ID
 * @param hashedToken The hashed token
 * @param expiresAt The expiration date
 * @returns The created reset token object
 */
export async function createResetToken(userId: string, hashedToken: string, expiresAt: Date): Promise<ResetToken> {
  const resetToken: ResetToken = {
    id: Math.random().toString(36).substring(2, 15),
    userId,
    hashedToken,
    expiresAt,
    used: false
  };
  
  resetTokens.push(resetToken);
  return resetToken;
}

/**
 * Find a valid reset token by hashed token
 * @param hashedToken The hashed token to search for
 * @returns The reset token object or null if not found or invalid
 */
export async function findValidResetToken(hashedToken: string): Promise<ResetToken | null> {
  const resetToken = resetTokens.find(token => token.hashedToken === hashedToken);
  
  if (!resetToken) {
    return null;
  }
  
  // Check if token has expired or been used
  if (resetToken.used || resetToken.expiresAt < new Date()) {
    return null;
  }
  
  return resetToken;
}

/**
 * Mark a reset token as used
 * @param tokenId The token ID to mark as used
 */
export async function markTokenAsUsed(tokenId: string): Promise<void> {
  const token = resetTokens.find(t => t.id === tokenId);
  if (token) {
    token.used = true;
  }
}

/**
 * Update a user's password
 * @param userId The user ID
 * @param newPassword The new hashed password
 */
export async function updateUserPassword(userId: string, newPassword: string): Promise<void> {
  if (users[userId]) {
    users[userId].password = newPassword;
  }
}

/**
 * Clean up expired tokens (optional maintenance function)
 */
export async function cleanupExpiredTokens(): Promise<void> {
  const now = new Date();
  resetTokens = resetTokens.filter(token => token.expiresAt > now);
}

/**
 * Mock email sending function
 * @param email The recipient email
 * @param resetToken The reset token to include in the email
 */
export async function sendResetEmail(email: string, resetToken: string): Promise<void> {
  // In a real application, you would integrate with an email service like SendGrid, Nodemailer, etc.
  console.log(`Sending reset email to ${email} with token ${resetToken}`);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
}