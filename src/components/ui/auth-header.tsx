"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp } from "lucide-react";

export default function AuthHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transparent-header transition-all duration-300">
      <div className="container mx-auto px-4 py-4 relative z-10">
        <nav className="flex items-center justify-center">
          {/* Clean transparent logo as home button */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <TrendingUp className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary whitespace-nowrap">
              CoinPulse
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}