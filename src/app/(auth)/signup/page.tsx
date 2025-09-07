"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, Eye, EyeOff, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthHeader from "@/components/ui/auth-header";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setTimeout(() => router.push("/"), 2000);
    } catch (err) {
      setError("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrength = (password: string) => {
    const checks = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /[0-9]/.test(password),
    ];
    return checks.filter(Boolean).length;
  };

  const passwordStrength = getPasswordStrength(formData.password);

  if (isSuccess) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4">
        {/* Background matching landing page */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative text-center py-8 px-6"
        >
          {/* Animated glow effect behind success card */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-primary/20 to-green-500/20 rounded-xl blur-xl opacity-75"
            animate={{
              background: [
                "linear-gradient(90deg, rgba(34,197,94,0.2) 0%, rgba(59,130,246,0.2) 50%, rgba(34,197,94,0.2) 100%)",
                "linear-gradient(90deg, rgba(59,130,246,0.2) 0%, rgba(34,197,94,0.2) 50%, rgba(59,130,246,0.2) 100%)",
                "linear-gradient(90deg, rgba(34,197,94,0.2) 0%, rgba(59,130,246,0.2) 50%, rgba(34,197,94,0.2) 100%)"
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-8 shadow-2xl max-w-sm w-full">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-12 h-12 bg-green-100/30 backdrop-blur-sm border border-green-200/40 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </motion.div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Welcome to CoinPulse!</h3>
            <p className="text-sm text-muted-foreground">Your account has been created successfully.</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced background with floating elements */}
      <div className="absolute inset-0">
        {/* Gradient layers for visual depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent" />
        
        {/* Animated grid pattern overlay */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-primary/20 rounded-full blur-xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-1/6 w-20 h-20 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Subtle geometric shapes */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-500/30 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>
      
      <AuthHeader />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-16 px-4">
        <div className="w-full max-w-sm">
          {/* Minimal header */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-foreground mb-2"
            >
              Create account
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-muted-foreground"
            >
              Join thousands of crypto enthusiasts
            </motion.p>
          </div>

          {/* Enhanced form card with better visibility */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Animated glow effect behind form */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-xl blur-xl opacity-75"
              animate={{
                background: [
                  "linear-gradient(90deg, rgba(59,130,246,0.2) 0%, rgba(147,51,234,0.2) 50%, rgba(59,130,246,0.2) 100%)",
                  "linear-gradient(90deg, rgba(147,51,234,0.2) 0%, rgba(59,130,246,0.2) 50%, rgba(147,51,234,0.2) 100%)",
                  "linear-gradient(90deg, rgba(59,130,246,0.2) 0%, rgba(147,51,234,0.2) 50%, rgba(59,130,246,0.2) 100%)"
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-6 shadow-2xl">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-lg pointer-events-none" />
            {/* Error message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative mb-4 p-3 bg-red-50/90 backdrop-blur-sm border border-red-200/60 rounded-md"
              >
                <p className="text-red-700 text-sm">{error}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Full name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-white/60 backdrop-blur-sm border border-white/40 rounded-md focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white/70 outline-none transition-all duration-300 text-sm text-foreground placeholder:text-muted-foreground shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-white/60 backdrop-blur-sm border border-white/40 rounded-md focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white/70 outline-none transition-all duration-300 text-sm text-foreground placeholder:text-muted-foreground shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Password field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="w-full pl-9 pr-10 py-2.5 bg-white/60 backdrop-blur-sm border border-white/40 rounded-md focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white/70 outline-none transition-all duration-300 text-sm text-foreground placeholder:text-muted-foreground shadow-sm"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                
                {/* Clean password strength indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((level) => (
                          <div
                            key={level}
                            className={`h-1 w-6 rounded-full transition-colors ${
                              passwordStrength >= level
                                ? passwordStrength <= 2
                                  ? "bg-red-400"
                                  : passwordStrength === 3
                                  ? "bg-yellow-400"
                                  : "bg-green-400"
                                : "bg-white/20"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {passwordStrength <= 2 ? "Weak" : passwordStrength === 3 ? "Good" : "Strong"}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm password field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-1">
                  Confirm password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-white/60 backdrop-blur-sm border border-white/40 rounded-md focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white/70 outline-none transition-all duration-300 text-sm text-foreground placeholder:text-muted-foreground shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="flex justify-end">
                <div className="text-xs text-muted-foreground">
                  By creating an account, you agree to our{" "}
                  <button type="button" className="text-primary hover:text-primary/80 underline">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button type="button" className="text-primary hover:text-primary/80 underline">
                    Privacy Policy
                  </button>
                  .
                </div>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating account...
                  </div>
                ) : (
                  <>
                    Create account
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
            
            {/* Divider with improved design */}
            <div className="mt-6 mb-4">
              <div className="relative flex justify-center">
                <span className="text-xs text-muted-foreground bg-transparent px-3 py-1">
                  Already have an account?
                </span>
              </div>
            </div>

            {/* Sign in link */}
            <Link href="/login">
              <Button
                variant="outline"
                className="w-full border-white/40 bg-white/30 backdrop-blur-sm text-foreground hover:bg-white/40 hover:border-white/60 font-medium py-2.5 rounded-md transition-all duration-300 shadow-sm"
              >
                Sign in instead
              </Button>
            </Link>
            </div>
          </motion.div>

          
        </div>
      </div>
    </div>
  );
}