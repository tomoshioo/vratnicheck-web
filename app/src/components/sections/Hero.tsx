import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DoorOpen, Smartphone, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A8E6CF]/30 via-white to-[#9B7EDE]/20" />
      
      {/* Floating Decorations */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-10 w-20 h-20 bg-[#FFE66D]/40 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 left-1/4 w-32 h-32 bg-[#FF6B9D]/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          y: [0, -15, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#3ECFA0]/20 rounded-full blur-xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#3ECFA0]/10 text-[#3ECFA0] font-medium text-sm">
                <span className="w-2 h-2 bg-[#3ECFA0] rounded-full mr-2 animate-pulse" />
                Osvědčený systém pro 100+ škol
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a4e] leading-tight mb-6"
            >
              Bezpečná škola{' '}
              <span className="text-gradient">začíná u vchodu</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl"
            >
              Kompletní řešení pro řízení přístupu, úschovu mobilů a bezpečnost škol. 
              Vyvíjíme a vyrábíme v ČR již 30 let.
            </motion.p>

            {/* Product Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link to="/produkty/importer">
                <Button 
                  className="bg-[#3ECFA0] hover:bg-[#2ab88a] text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105 flex items-center"
                >
                  <DoorOpen className="w-5 h-5 mr-2" />
                  Přístupový systém
                </Button>
              </Link>
              <Link to="/produkty/imalocker">
                <Button 
                  className="bg-[#FF6B9D] hover:bg-[#ff5285] text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105 flex items-center"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Skříňky na mobily
                </Button>
              </Link>
              <Link to="/produkty/imapouch">
                <Button 
                  variant="outline"
                  className="border-2 border-[#9B7EDE] text-[#9B7EDE] hover:bg-[#9B7EDE] hover:text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105 flex items-center"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Pouche
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-6 text-sm text-gray-500"
            >
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#3ECFA0] rounded-full mr-2" />
                Český výrobek
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#3ECFA0] rounded-full mr-2" />
                ISO 9001
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#3ECFA0] rounded-full mr-2" />
                NBÚ certifikace
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Mascot SVG */}
              <svg viewBox="0 0 200 280" className="w-72 h-96 md:w-80 md:h-[28rem] drop-shadow-2xl">
                {/* Body */}
                <path
                  d="M100 80 
                         C 70 80, 50 100, 50 140
                         L 50 220
                         C 50 245, 70 265, 100 265
                         C 130 265, 150 245, 150 220
                         L 150 140
                         C 150 100, 130 80, 100 80 Z"
                  fill="#3ECFA0"
                  stroke="#1a1a4e"
                  strokeWidth="3"
                />
                {/* Head */}
                <circle
                  cx="100"
                  cy="60"
                  r="50"
                  fill="#3ECFA0"
                  stroke="#1a1a4e"
                  strokeWidth="3"
                />
                {/* Checkmark circle */}
                <circle
                  cx="100"
                  cy="45"
                  r="22"
                  fill="#1a1a4e"
                />
                {/* Checkmark */}
                <path
                  d="M 90 45 L 97 52 L 112 36"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Collar */}
                <path
                  d="M 70 115 L 100 135 L 130 115"
                  fill="white"
                  stroke="#1a1a4e"
                  strokeWidth="2"
                />
                {/* Tie */}
                <path
                  d="M 100 135 L 94 155 L 100 165 L 106 155 Z"
                  fill="#1a1a4e"
                />
                {/* Buttons */}
                <circle cx="100" cy="180" r="4" fill="white" stroke="#1a1a4e" strokeWidth="1" />
                <circle cx="100" cy="198" r="4" fill="white" stroke="#1a1a4e" strokeWidth="1" />
                <circle cx="100" cy="216" r="4" fill="white" stroke="#1a1a4e" strokeWidth="1" />
                {/* Pocket */}
                <rect
                  x="118"
                  y="160"
                  width="22"
                  height="28"
                  rx="4"
                  fill="white"
                  stroke="#1a1a4e"
                  strokeWidth="2"
                />
                {/* Pocket circle */}
                <circle cx="129" cy="174" r="7" fill="#1a1a4e" />
                <circle cx="129" cy="174" r="3.5" fill="white" />
              </svg>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-4 top-20 bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="text-3xl font-bold text-[#3ECFA0]">100+</div>
                <div className="text-sm text-gray-600">škol v ČR</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -left-4 bottom-32 bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="text-3xl font-bold text-[#FF6B9D]">99.9%</div>
                <div className="text-sm text-gray-600">dostupnost</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
