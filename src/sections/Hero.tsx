"use client";

import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/ui/animated-text"
import FloatingElements from "@/components/ui/floating-elements"
import { motion } from "framer-motion"
import { TrendingUp, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="pt-0 pb-20 md:pb-32 relative overflow-hidden min-h-screen flex items-center">
      <FloatingElements />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedText>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Crypto Made{" "}
              <span className="text-primary">Simple</span>
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Track prices, manage your portfolio, and discover opportunities in the cryptocurrency market with ease.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <div className="flex justify-center">
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Subtle shimmer effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      "linear-gradient(90deg, rgba(59,130,246,0.2) 0%, rgba(147,51,234,0.2) 50%, rgba(59,130,246,0.2) 100%)",
                      "linear-gradient(90deg, rgba(147,51,234,0.2) 0%, rgba(59,130,246,0.2) 50%, rgba(147,51,234,0.2) 100%)",
                      "linear-gradient(90deg, rgba(59,130,246,0.2) 0%, rgba(147,51,234,0.2) 50%, rgba(59,130,246,0.2) 100%)"
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <Button 
                  size="lg" 
                  className="relative bg-white/20 backdrop-blur-sm border border-white/40 text-foreground hover:bg-white/30 hover:border-white/50 text-lg px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <TrendingUp className="w-5 h-5" />
                  Start Tracking
                </Button>
              </motion.div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}