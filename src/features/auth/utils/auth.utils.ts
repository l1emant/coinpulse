import { randomBytes, createHash } from 'crypto';

/**
 * Generate a secure random token
 * @returns A random token string
 */
export function generateToken(): string {
  return randomBytes(32).toString('hex');
}

/**
 * Hash a token for secure storage
 * @param token The token to hash
 * @returns The hashed token
 */
export function hashToken(token: string): string {
  return createHash('sha256').update(token).digest('hex');
}

/**
 * Generate a reset token and its hashed version
 * @returns Object containing both the token and its hash
 */
export function generateResetToken(): { token: string; hashedToken: string } {
  const token = generateToken();
  const hashedToken = hashToken(token);
  return { token, hashedToken };
}

/**
 * Validate a token against its hash
 * @param token The token to validate
 * @param hashedToken The hashed token to compare against
 * @returns Whether the token is valid
 */
export function validateToken(token: string, hashedToken: string): boolean {
  const tokenHash = hashToken(token);
  return tokenHash === hashedToken;
}

/**
 * Generate an expiration time (24 hours from now)
 * @returns Expiration timestamp
 */
export function generateExpiration(): Date {
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 24);
  return expiration;
}

/**
 * Check if a token has expired
 * @param expiration The expiration date
 * @returns Whether the token has expired
 */
export function isTokenExpired(expiration: Date): boolean {
  return new Date() > expiration;
}