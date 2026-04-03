"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface CarDetails {
  name: string;
  price: string;
  installment: string;
  image: string;
  color: string;
  specs: string[];
}

interface CarModalProps {
  car: CarDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: { duration: 0.3 },
  },
};

export default function CarModal({ car, isOpen, onClose }: CarModalProps) {
  return (
    <AnimatePresence>
      {isOpen && car && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className={`relative bg-gradient-to-br ${car.color} rounded-3xl p-8 max-w-2xl w-full text-white overflow-hidden shadow-2xl`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 text-4xl opacity-80 hover:opacity-100"
              onClick={onClose}
              whileHover={{ rotate: 90, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left - Car Image */}
              <motion.div
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="text-9xl mb-6"
                  animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {car.image}
                </motion.div>
              </motion.div>

              {/* Right - Details */}
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Title */}
                <h2 className="text-4xl font-black mb-6">{car.name}</h2>

                {/* Price Section */}
                <motion.div
                  className="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/30"
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                >
                  <p className="text-sm text-white/80 mb-2">Down Payment</p>
                  <p className="text-3xl font-black mb-4">{car.price}</p>
                  <p className="text-sm text-white/80 mb-2">Cicilan Per Bulan</p>
                  <p className="text-2xl font-bold">{car.installment}</p>
                </motion.div>

                {/* Specifications */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-4">Keuntungan:</h3>
                  <div className="space-y-3">
                    {car.specs.map((spec, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <span className="text-2xl">✓</span>
                        <span>{spec}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <motion.button
                    className="w-full px-6 py-4 bg-white text-slate-900 font-bold rounded-xl text-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    💬 Chat Sekarang
                  </motion.button>
                  <motion.button
                    className="w-full px-6 py-4 bg-white/20 text-white font-bold rounded-xl text-lg border-2 border-white/50"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    📞 Hubungi Kami
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
