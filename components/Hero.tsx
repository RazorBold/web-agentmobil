"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative w-full min-h-screen pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            className="text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block mb-6"
            >
              <div className="px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50 text-red-300 text-sm font-semibold">
                ✨ PROMO TERBATAS HANYA BULAN INI!
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-orange-500 bg-clip-text text-transparent">
                Mobil Impian
              </span>
              <br />
              <span className="text-white">Harga Terjangkau</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Dapatkan mobil favorit Anda dengan cicilan mulai dari <span className="text-red-500 font-bold">6.5 Juta</span>. Proses cepat, mudah, dan terpercaya!
            </motion.p>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="space-y-3 mb-10"
            >
              {[
                "✓ Tenor hingga 5 tahun",
                "✓ Data dibantu sampai clear",
                "✓ Proses approval cepat",
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 text-lg"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-red-500">•</span>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg text-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(239, 68, 68, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Konsultasi Gratis
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg text-lg"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                Lihat Katalog
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Featured Car */}
          <motion.div
            className="relative h-96 lg:h-full flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Car Image Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-orange-500/20 rounded-3xl"
              animate={{ boxShadow: ["0 0 60px rgba(239, 68, 68, 0.3)", "0 0 100px rgba(239, 68, 68, 0.6)", "0 0 60px rgba(239, 68, 68, 0.3)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Car Icon */}
            <motion.div
              className="text-9xl"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🚗
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              className="absolute bottom-10 left-0 bg-white rounded-lg p-4 shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <p className="text-sm text-gray-600">Harga Mulai Dari</p>
              <p className="text-2xl font-bold text-red-600">6.5 Juta</p>
            </motion.div>

            <motion.div
              className="absolute top-10 right-0 bg-white rounded-lg p-4 shadow-2xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <p className="text-sm text-gray-600">Cicilan Per Bulan</p>
              <p className="text-2xl font-bold text-blue-600">Rp 3.8 Juta</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
