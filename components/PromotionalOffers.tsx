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
              className={`bg-gradient-to-br ${offer.color} rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer border border-white/20 backdrop-blur-xl shadow-2xl`}
              whileHover={{
                y: -20,
                boxShadow: "0 30px 80px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Premium shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-white/10 via-transparent to-white/10"
                transition={{ duration: 0.3 }}
              />

              {/* Background decoration */}
              <div className="absolute top-0 right-0 text-9xl opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                {offer.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-6 inline-block"
                  animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  whileHover={{ scale: 1.3 }}
                >
                  {offer.icon}
                </motion.div>

                {/* Divider */}
                <div className="w-10 h-1 bg-gradient-to-r from-white to-white/30 rounded-full mb-6" />

                {/* Title */}
                <h3 className="text-2xl font-black mb-3 leading-tight">{offer.title}</h3>

                {/* Description */}
                <p className="text-white/90 text-base font-semibold leading-relaxed flex-1">
                  {offer.description}
                </p>

                {/* Arrow */}
                <motion.div
                  className="mt-6 text-xl font-bold"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ▶
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-orange-500 via-red-600 to-orange-600 rounded-3xl p-12 lg:p-16 text-white text-center relative overflow-hidden border border-white/20 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, boxShadow: "0 40px 100px rgba(0, 0, 0, 0.3)" }}
        >
          {/* Background animation */}
          <motion.div
            className="absolute inset-0 opacity-20 bg-gradient-to-r from-white to-transparent"
            animate={{ x: [-100, 100] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.h3
              className="text-4xl lg:text-5xl font-black mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              🎯 PROMO TERBATAS HARI INI!
            </motion.h3>
            <p className="text-lg text-white/90 mb-8 font-semibold">
              Dapatkan bonus ekstra + cashback untuk pembelian sekarang juga
            </p>
            <motion.button
              className="px-12 py-4 bg-white text-orange-600 font-black rounded-xl text-base tracking-wider shadow-lg border-2 border-white"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 20px 60px rgba(255, 255, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              📞 HUBUNGI SEKARANG
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
