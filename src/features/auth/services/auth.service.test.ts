// Mock test file for auth.service.ts
// In a real application, you would use Jest or another testing framework

import { 
  findUserByEmail, 
  createResetToken, 
  findValidResetToken, 
  markTokenAsUsed,
  updateUserPassword
} from './auth.service';
import { generateResetToken, generateExpiration } from '../utils/auth.utils';

// Test data
const testUser = {
  id: 'test-user-id',
  email: 'test@example.com',
  password: 'old-hashed-password'
};

const testEmail = 'test@example.com';
const invalidEmail = 'nonexistent@example.com';

async function runTests() {
  console.log('Running auth.service tests...\n');

  // Test 1: Find user by email
  console.log('Test 1: Find user by email');
  const user = await findUserByEmail(testEmail);
  console.log('Found user:', user);
  console.log('Expected: User object with email test@example.com\n');

  // Test 2: Find non-existent user
  console.log('Test 2: Find non-existent user');
  const noUser = await findUserByEmail(invalidEmail);
  console.log('Found user:', noUser);
  console.log('Expected: null\n');

  // Test 3: Create reset token
  console.log('Test 3: Create reset token');
  const { hashedToken } = generateResetToken();
  const expiresAt = generateExpiration();
  const resetToken = await createResetToken(testUser.id, hashedToken, expiresAt);
  console.log('Created reset token:', resetToken);
  console.log('Expected: ResetToken object with userId, hashedToken, and expiresAt\n');

  // Test 4: Find valid reset token
  console.log('Test 4: Find valid reset token');
  const foundToken = await findValidResetToken(hashedToken);
  console.log('Found reset token:', foundToken);
  console.log('Expected: ResetToken object matching the created one\n');

  // Test 5: Mark token as used
  console.log('Test 5: Mark token as used');
  await markTokenAsUsed(resetToken.id);
  const usedToken = await findValidResetToken(hashedToken);
  console.log('Found reset token after marking as used:', usedToken);
  console.log('Expected: null (token should no longer be valid)\n');

  // Test 6: Update user password
  console.log('Test 6: Update user password');
  const newPassword = 'new-hashed-password';
  await updateUserPassword(testUser.id, newPassword);
  console.log('Updated password for user:', testUser.id);
  console.log('Expected: User password should be updated\n');

  console.log('All tests completed!');
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests().catch(console.error);
}

export { runTests };