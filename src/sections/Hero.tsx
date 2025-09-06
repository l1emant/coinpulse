"use client";

import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/ui/animated-text"
import FloatingElements from "@/components/ui/floating-elements"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, ChevronDown, ChevronUp, BarChart3, Shield, Zap, X } from "lucide-react"
import { useState } from "react"
import { ShimmerButton } from "@/components/magicui/shimmer-button"

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <section id="home" className="pt-0 pb-20 md:pb-32 relative overflow-hidden min-h-screen flex items-center">
      <FloatingElements />
      
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        {/* Additional gradient layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent" />
        
        {/* Animated grid overlay */}
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
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced title section */}
          <AnimatedText>
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-muted-foreground mb-6"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Live Market Data</span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
                Crypto Made{" "}
                <span className="text-primary relative">
                  Simple
                  {/* Subtle glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 blur-xl -z-10"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </h1>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Track prices, manage your portfolio, and discover opportunities in the cryptocurrency market with ease.
            </p>
          </AnimatedText>
          
          {/* Enhanced CTA section */}
          <AnimatedText delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Enhanced shimmer effect */}
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
                  className="relative bg-white/20 backdrop-blur-sm border border-white/40 text-foreground hover:bg-white/30 hover:border-white/50 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 h-12 px-8 rounded-xl min-w-[160px]"
                >
                  <TrendingUp className="w-6 h-6" />
                  Start Tracking
                </Button>
              </motion.div>
              
              {/* Magic UI Shimmer Button - Fixed Size */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ShimmerButton
                  onClick={openModal}
                  shimmerColor="rgba(255, 255, 255, 0.3)"
                  background="rgba(255, 255, 255, 0.1)"
                  borderRadius="12px"
                  shimmerDuration="2.5s"
                  className="backdrop-blur-sm border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-8 text-lg font-semibold min-w-[160px] flex items-center justify-center"
                >
                  <span className="text-foreground">
                    Learn More
                  </span>
                </ShimmerButton>
              </motion.div>
            </div>
          </AnimatedText>
          
          {/* Simple Info Popup */}
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={closeModal}
              >
                {/* Backdrop */}
                <motion.div
                  className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                
                {/* Fixed Modal Card */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative max-w-md w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Subtle Flowing Border Animation */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-[2px] animate-subtle-border">
                    <div className="w-full h-full bg-white/95 backdrop-blur-xl rounded-2xl" />
                  </div>
                  
                  {/* Card Content */}
                  <div className="relative p-8 z-10">
                    {/* Close Button */}
                    <button
                      onClick={closeModal}
                      className="absolute top-4 right-4 p-2 bg-gray-100/80 backdrop-blur-sm border border-gray-200/50 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-gray-200/80 transition-all duration-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        About CoinPulse
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        CoinPulse is your gateway to the cryptocurrency world. Track prices, analyze trends, and manage your portfolio with our intuitive platform designed for both beginners and experts.
                      </p>
                      
                      <div className="space-y-3 text-left">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-sm text-gray-700">Real-time price tracking</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-sm text-gray-700">Portfolio management</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-sm text-gray-700">Market analysis tools</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          

          
        </div>
      </div>
    </section>
  )
}