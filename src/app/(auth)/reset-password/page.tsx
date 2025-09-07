"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthHeader from "@/features/auth/components/AuthHeader";
import ResetPasswordForm from "@/features/auth/components/ResetPasswordForm";

export default function ResetPasswordPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const handleResetSuccess = (email: string) => {
    setEmail(email);
    setIsSuccess(true);
  };

  // Show success message
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
              <Mail className="w-6 h-6 text-green-600" />
            </motion.div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Check your email</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We&apos;ve sent a password reset link to <span className="font-medium">{email}</span>
            </p>
            <p className="text-xs text-muted-foreground">
              Didn&apos;t receive the email? Check your spam folder or{" "}
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-primary hover:text-primary/80 underline"
              >
                try again
              </button>
            </p>
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
              Reset your password
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-muted-foreground"
            >
              Enter your email and we&apos;ll send you a link to reset your password
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
              <ResetPasswordForm onResetSuccess={handleResetSuccess} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}