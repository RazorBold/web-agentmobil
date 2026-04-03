"use client";

import { motion } from "framer-motion";

const offers = [
  {
    title: "MEGA SALE",
    description: "Diskon hingga 50%",
    icon: "🔥",
    color: "from-red-600 to-red-700",
  },
  {
    title: "DP RINGAN",
    description: "Mulai dari 6.5 Juta",
    icon: "💰",
    color: "from-green-600 to-green-700",
  },
  {
    title: "CICILAN MUDAH",
    description: "Tenor hingga 5 Tahun",
    icon: "📅",
    color: "from-blue-600 to-blue-700",
  },
  {
    title: "DATA BANTU",
    description: "Proses Sampai Clear",
    icon: "✅",
    color: "from-purple-600 to-purple-700",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export default function PromotionalOffers() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-slate-800 to-slate-900 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-white">
            Penawaran <span className="text-red-500">Istimewa</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Keuntungan maksimal menanti Anda
          </p>
        </motion.div>

        {/* Offers Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`bg-gradient-to-br ${offer.color} rounded-2xl p-8 text-white relative overflow-hidden group`}
              whileHover={{
                y: -15,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white rounded-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Background decoration */}
              <div className="absolute top-0 right-0 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">
                {offer.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ rotate: [0, 8, -8, 0], y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {offer.icon}
                </motion.div>
                <h3 className="text-2xl font-black mb-2">{offer.title}</h3>
                <p className="text-white/90 text-lg font-semibold">
                  {offer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 lg:p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-3xl lg:text-4xl font-black mb-4">
            🎯 PROMO TERBATAS - BURUAN SEBELUM KEHABISAN!
          </h3>
          <p className="text-lg text-white/90 mb-6">
            Dapatkan bonus ekstra untuk pembelian hari ini
          </p>
          <motion.button
            className="px-10 py-4 bg-white text-red-600 font-bold rounded-lg text-lg"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Hubungi Sekarang
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
