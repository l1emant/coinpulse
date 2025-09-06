"use client";

import { motion } from "framer-motion";

// Cryptocurrency icon components optimized for light theme
const BitcoinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <circle cx="12" cy="12" r="12" fill="#F7931A" opacity="0.4" />
    <circle cx="12" cy="12" r="10" fill="rgba(247, 147, 26, 0.1)" />
    <path d="M17.21 14.28c.18 1.27-.78 1.95-2.11 2.4l.43 1.73-1.05.26-.42-1.69c-.28.07-.56.13-.85.19l.42 1.7-1.05.26-.43-1.73c-.23.05-.45.1-.67.15v.01l-1.44.36-.28-1.12s.78-.18.76-.19c.43-.11.5-.4.49-.63l-.49-1.97c.03-.01.07-.02.12-.03l-.12.03-.69-2.78c-.05-.13-.19-.33-.5-.25.01-.02-.76.19-.76.19l-.51-1.2 1.53-.38c.28-.07.56-.14.84-.21l-.43-1.72 1.05-.26.43 1.71c.29-.08.58-.15.86-.22l-.43-1.69 1.05-.26.43 1.72c1.77-.33 3.1-.2 3.66 1.4.45 1.29-.02 2.03-.96 2.51.68.16 1.19.61 1.33 1.54zm-2.38-3.39c-.32-1.29-2.46-.59-3.15-.42l.56 2.24c.69-.17 2.91-.51 2.59-1.82zm.32 3.43c-.36-1.43-2.91-.67-3.72-.5l.63 2.5c.81-.2 3.47-.58 3.09-2z" fill="#F7931A" opacity="0.8" />
  </svg>
);

const EthereumIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <circle cx="12" cy="12" r="12" fill="#627EEA" opacity="0.4" />
    <circle cx="12" cy="12" r="10" fill="rgba(98, 126, 234, 0.1)" />
    <path d="M12.373 3v6.652L18.649 12 12.373 3z" fill="#627EEA" fillOpacity="0.7" />
    <path d="M5.651 12l6.274-2.348L12.373 3 5.651 12z" fill="#627EEA" fillOpacity="0.9" />
    <path d="M12.373 16.174V21l6.278-8.65-6.278 3.824z" fill="#627EEA" fillOpacity="0.7" />
    <path d="M12.373 21v-4.826L5.651 12.35 12.373 21z" fill="#627EEA" fillOpacity="0.9" />
    <path d="M12.373 15.211l6.276-3.861-6.276-2.396v6.257z" fill="#627EEA" fillOpacity="0.3" />
    <path d="M5.651 11.35l6.274 3.861V8.954L5.651 11.35z" fill="#627EEA" fillOpacity="0.6" />
  </svg>
);

const BNBIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <circle cx="12" cy="12" r="12" fill="#F3BA2F" opacity="0.4" />
    <circle cx="12" cy="12" r="10" fill="rgba(243, 186, 47, 0.1)" />
    <path d="M7.8 12l2.8-2.8L12 10.6l1.4-1.4L16.2 12l-2.8 2.8L12 13.4l-1.4 1.4L7.8 12z" fill="#F3BA2F" opacity="0.8" />
    <path d="M12 7.8l1.4 1.4-1.4 1.4L10.6 9.2 12 7.8z" fill="#F3BA2F" opacity="0.8" />
    <path d="M16.2 10.6L17.6 12l-1.4 1.4-1.4-1.4 1.4-1.4z" fill="#F3BA2F" opacity="0.8" />
    <path d="M12 16.2l-1.4-1.4 1.4-1.4 1.4 1.4L12 16.2z" fill="#F3BA2F" opacity="0.8" />
    <path d="M7.8 10.6L6.4 12l1.4 1.4 1.4-1.4-1.4-1.4z" fill="#F3BA2F" opacity="0.8" />
  </svg>
);

const XRPIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <circle cx="12" cy="12" r="12" fill="#23292F" opacity="0.4" />
    <circle cx="12" cy="12" r="10" fill="rgba(35, 41, 47, 0.1)" />
    <path d="M7.5 7.5c2.5 2.5 4.5 4.5 4.5 4.5s2-2 4.5-4.5c1-1 2.5-1 3.5 0 1 1 1 2.5 0 3.5-2.5 2.5-4.5 4.5-4.5 4.5s-2-2-4.5-4.5c-1-1-1-2.5 0-3.5 1-1 2.5-1 3.5 0z" fill="#23292F" opacity="0.8" />
    <circle cx="8" cy="8" r="1.5" fill="#23292F" opacity="0.6" />
    <circle cx="16" cy="8" r="1.5" fill="#23292F" opacity="0.6" />
    <circle cx="8" cy="16" r="1.5" fill="#23292F" opacity="0.6" />
    <circle cx="16" cy="16" r="1.5" fill="#23292F" opacity="0.6" />
  </svg>
);

const CardanoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <circle cx="12" cy="12" r="12" fill="#0033AD" opacity="0.4" />
    <circle cx="12" cy="12" r="10" fill="rgba(0, 51, 173, 0.1)" />
    <circle cx="12" cy="8.5" r="1.5" fill="#0033AD" opacity="0.8" />
    <circle cx="8" cy="12" r="1.2" fill="#0033AD" opacity="0.8" />
    <circle cx="16" cy="12" r="1.2" fill="#0033AD" opacity="0.8" />
    <circle cx="12" cy="15.5" r="1.5" fill="#0033AD" opacity="0.8" />
    <circle cx="6" cy="9" r="0.8" fill="#0033AD" opacity="0.6" />
    <circle cx="18" cy="9" r="0.8" fill="#0033AD" opacity="0.6" />
    <circle cx="6" cy="15" r="0.8" fill="#0033AD" opacity="0.6" />
    <circle cx="18" cy="15" r="0.8" fill="#0033AD" opacity="0.6" />
  </svg>
);

const SolanaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <defs>
      <linearGradient id="solGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9945FF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#14F195" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="12" fill="url(#solGradient)" opacity="0.4" />
    <circle cx="12" cy="12" r="10" fill="rgba(153, 69, 255, 0.1)" />
    <path d="M16 8H8c-.5 0-.9.4-.9.9v.2c0 .3.2.5.5.5h8.8c.3 0 .5-.2.5-.5v-.2c0-.5-.4-.9-.9-.9z" fill="#9945FF" opacity="0.8" />
    <path d="M8 16h8c.5 0 .9-.4.9-.9v-.2c0-.3-.2-.5-.5-.5H7.6c-.3 0-.5.2-.5.5v.2c0 .5.4.9.9.9z" fill="#14F195" opacity="0.8" />
    <path d="M8 12h8c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H8c-.3 0-.5.2-.5.5s.2.5.5.5z" fill="#7C3AED" opacity="0.8" />
  </svg>
);

const PolygonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <circle cx="12" cy="12" r="12" fill="#8247E5" opacity="0.4" />
    <circle cx="12" cy="12" r="10" fill="rgba(130, 71, 229, 0.1)" />
    <path d="M16.5 8.5l-3-1.7c-.3-.2-.7-.2-1 0l-3 1.7c-.3.2-.5.5-.5.9v3.4c0 .4.2.7.5.9l3 1.7c.3.2.7.2 1 0l3-1.7c.3-.2.5-.5.5-.9V9.4c0-.4-.2-.7-.5-.9z" fill="#8247E5" opacity="0.8" />
    <path d="M7 10v4l2.5 1.4V13l-1.5-.9V10z" fill="#8247E5" opacity="0.6" />
    <path d="M17 10v2.1l-1.5.9v2.4L17 14v-4z" fill="#8247E5" opacity="0.6" />
  </svg>
);

const DogecoinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <circle cx="12" cy="12" r="12" fill="#C2A633" opacity="0.4" />
    <circle cx="12" cy="12" r="10" fill="rgba(194, 166, 51, 0.1)" />
    <path d="M9 7h3.5c2.5 0 4.5 2 4.5 4.5S15 16 12.5 16H11v1H9v-1H8v-2h1V9H8V7h1zm2 2v6h1.5c1.4 0 2.5-1.1 2.5-2.5S13.9 9 12.5 9H11z" fill="#C2A633" opacity="0.8" />
    <circle cx="9" cy="9.5" r="0.5" fill="#C2A633" opacity="0.6" />
    <circle cx="15" cy="9.5" r="0.5" fill="#C2A633" opacity="0.6" />
  </svg>
);

const ChainlinkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <circle cx="12" cy="12" r="12" fill="#375BD2" opacity="0.4" />
    <circle cx="12" cy="12" r="10" fill="rgba(55, 91, 210, 0.1)" />
    <path d="M12 6l3.5 2v4l-3.5 2-3.5-2V8L12 6z" fill="#375BD2" opacity="0.8" />
    <path d="M12 8l2 1.2v2.6L12 13l-2-1.2V9.2L12 8z" fill="#375BD2" opacity="0.6" />
    <circle cx="7" cy="9" r="1" fill="#375BD2" opacity="0.5" />
    <circle cx="17" cy="9" r="1" fill="#375BD2" opacity="0.5" />
    <circle cx="7" cy="15" r="1" fill="#375BD2" opacity="0.5" />
    <circle cx="17" cy="15" r="1" fill="#375BD2" opacity="0.5" />
  </svg>
);

const LitecoinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <circle cx="12" cy="12" r="12" fill="#BFBBBB" opacity="0.4" />
    <circle cx="12" cy="12" r="10" fill="rgba(191, 187, 187, 0.1)" />
    <path d="M9 7v4l-1.5.5.5 1.5L9 12.5V16h6v-2h-4v-1.5l1.5-.5-.5-1.5L9 11.5V7H9z" fill="#BFBBBB" opacity="0.8" />
    <circle cx="12" cy="12" r="6" stroke="#BFBBBB" strokeWidth="1" fill="none" opacity="0.6" />
  </svg>
);

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced gradient background for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/15" />
      
      {/* Bitcoin icon with floating animation */}
      <motion.div
        className="absolute top-20 left-10 w-14 h-14 opacity-50"
        animate={{
          y: [-30, 30, -30],
          x: [-20, 20, -20],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.3, opacity: 0.7 }}
      >
        <BitcoinIcon />
      </motion.div>
      
      {/* Crypto Icon Blobs - Ethereum - enhanced */}
      <motion.div
        className="absolute top-1/3 right-16 w-12 h-12 opacity-45"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{ scale: 1.4, opacity: 0.7 }}
      >
        <EthereumIcon />
      </motion.div>
      
      {/* Crypto Icon Blobs - BNB */}
      <motion.div
        className="absolute bottom-32 left-1/3 w-11 h-11 opacity-40"
        animate={{
          y: [0, -40, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.4, 1],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <BNBIcon />
      </motion.div>
      
      {/* Crypto Icon Blobs - Solana - enhanced */}
      <motion.div
        className="absolute top-10 right-10 w-16 h-16 opacity-45"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.4, opacity: 0.8 }}
      >
        <SolanaIcon />
      </motion.div>
      
      {/* Crypto Icon Blobs - XRP */}
      <motion.div
        className="absolute bottom-10 right-20 w-10 h-10 opacity-40"
        animate={{
          x: [-25, 25, -25],
          y: [-15, 15, -15],
          scale: [1, 1.5, 1],
          rotate: [0, 270, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <XRPIcon />
      </motion.div>
      
      {/* Crypto Icon Blobs - Cardano */}
      <motion.div
        className="absolute top-2/3 left-16 w-9 h-9 opacity-35"
        animate={{
          y: [-20, 20, -20],
          x: [0, 15, 0],
          scale: [1, 1.6, 1],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <CardanoIcon />
      </motion.div>
      
      {/* Crypto Icon Blobs - Polygon */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-13 h-13 opacity-50"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
          y: [-25, 25, -25],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <PolygonIcon />
      </motion.div>
      
      {/* Crypto Icon Blobs - Dogecoin */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-8 h-8 opacity-45"
        animate={{
          x: [-30, 30, -30],
          scale: [1, 1.8, 1],
          rotate: [0, -270, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <DogecoinIcon />
      </motion.div>
      
      {/* Crypto Icon Blobs - Chainlink */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-7 h-7 opacity-40"
        animate={{
          y: [-35, 35, -35],
          rotate: [0, 360, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChainlinkIcon />
      </motion.div>
      
      {/* Crypto Icon Blobs - Litecoin */}
      <motion.div
        className="absolute bottom-20 right-1/3 w-6 h-6 opacity-35"
        animate={{
          x: [0, -20, 0],
          y: [-10, 10, -10],
          scale: [1, 2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <LitecoinIcon />
      </motion.div>
      
      {/* Floating particles - enhanced subtly */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full shadow-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-35, 35, -35],
            x: [-15, 15, -15],
            scale: [0.3, 1.2, 0.3],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Animated grid overlay - enhanced subtly */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Subtle glow effects */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-gradient-to-l from-accent/4 to-transparent rounded-full blur-2xl"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />
      
      {/* Additional subtle crypto icons floating */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-6 h-6 opacity-30"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <BitcoinIcon />
      </motion.div>
      
      <motion.div
        className="absolute top-2/3 right-1/3 w-5 h-5 opacity-25"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.1, 0.4, 0.1],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <EthereumIcon />
      </motion.div>
      
      <motion.div
        className="absolute top-1/4 left-1/2 w-4 h-4 opacity-20"
        animate={{
          x: [-30, 30, -30],
          y: [-20, 20, -20],
          scale: [1, 2, 1],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <BNBIcon />
      </motion.div>
      
      <motion.div
        className="absolute top-3/4 left-2/3 w-3 h-3 opacity-25"
        animate={{
          scale: [1, 2.5, 1],
          rotate: [0, -360, 0],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <XRPIcon />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-7 h-7 opacity-30"
        animate={{
          y: [-25, 25, -25],
          scale: [1, 1.3, 1],
          rotate: [0, 270, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <DogecoinIcon />
      </motion.div>
    </div>
  );
}