# Authentication Feature Module

This directory contains all authentication-related functionality for the CoinPulse application.

## Structure

```
auth/
├── components/     # Reusable authentication UI components
├── services/       # Business logic and data access layers
├── utils/          # Utility functions for authentication
└── README.md       # This file
```

## Services

- `auth.service.ts` - Main authentication service handling user operations, password resets, and token management
- `auth.service.test.ts` - Tests for the authentication service

## Utilities

- `auth.utils.ts` - Helper functions for token generation, hashing, and validation

## Components

- `AuthHeader.tsx` - Header component for authentication pages
- `LoginForm.tsx` - Login form with email and password fields
- `SignupForm.tsx` - User registration form with validation
- `ResetPasswordForm.tsx` - Password reset request form
- `ConfirmPasswordForm.tsx` - Password reset confirmation form

This structure follows clean architecture principles and separates concerns properly:
- Services handle business logic
- Utils contain pure functions
- Components manage UI