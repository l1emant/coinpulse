"use client";

import { Button } from "@/components/ui/button"
import { TrendingUp, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transparent-header transition-all duration-300">
      <div className="container mx-auto px-4 py-4 relative z-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">
              CoinPulse
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground/70 hover:text-primary transition-colors duration-300 font-semibold">
              Home
            </a>
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors duration-300 font-semibold">
              About
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors duration-300 font-semibold">
              Contact
            </a>
            {/* Login Button with shimmer */}
            <motion.div className="relative group">
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary/15 via-purple-500/15 to-primary/15 rounded-md blur-sm opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    "linear-gradient(90deg, rgba(59,130,246,0.15) 0%, rgba(147,51,234,0.15) 50%, rgba(59,130,246,0.15) 100%)",
                    "linear-gradient(90deg, rgba(147,51,234,0.15) 0%, rgba(59,130,246,0.15) 50%, rgba(147,51,234,0.15) 100%)",
                    "linear-gradient(90deg, rgba(59,130,246,0.15) 0%, rgba(147,51,234,0.15) 50%, rgba(59,130,246,0.15) 100%)"
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <Button 
                variant="outline" 
                size="sm" 
                className="relative bg-white/20 backdrop-blur-sm border border-white/40 text-foreground hover:bg-white/30 hover:border-white/50 transition-all duration-300"
              >
                Login
              </Button>
            </motion.div>
            
            {/* Sign Up Button with shimmer */}
            <motion.div className="relative group">
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary/15 via-purple-500/15 to-primary/15 rounded-md blur-sm opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    "linear-gradient(90deg, rgba(59,130,246,0.15) 0%, rgba(147,51,234,0.15) 50%, rgba(59,130,246,0.15) 100%)",
                    "linear-gradient(90deg, rgba(147,51,234,0.15) 0%, rgba(59,130,246,0.15) 50%, rgba(147,51,234,0.15) 100%)",
                    "linear-gradient(90deg, rgba(59,130,246,0.15) 0%, rgba(147,51,234,0.15) 50%, rgba(59,130,246,0.15) 100%)"
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <Button 
                size="sm" 
                className="relative bg-white/20 backdrop-blur-sm border border-white/40 text-foreground hover:bg-white/30 hover:border-white/50 transition-all duration-300"
              >
                Sign Up
              </Button>
            </motion.div>
          </div>
          {/* Mobile menu button */}
          <Button variant="outline" size="icon" className="md:hidden border-primary/20 hover:border-primary/40 bg-white/20 hover:bg-white/30">
            <BarChart3 className="h-4 w-4" />
          </Button>
        </nav>
      </div>
    </header>
  )
}