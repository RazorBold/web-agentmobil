"use client";

import { motion } from "framer-motion";

export default function Footer() {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-black bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4">
              🚗 MOBIL PRO
            </h3>
            <p className="text-gray-400">
              Platform jual beli mobil terpercaya dengan harga terbaik dan proses cepat.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">Menu</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition">Beranda</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Katalog</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Promo</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Tentang</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 0858-2207-6561</li>
              <li>💬 WhatsApp</li>
              <li>📍 Jakarta Utara</li>
              <li>⏰ 24/7 Siap Melayani</li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              {["f", "📷", "🐦"].map((icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="text-2xl hover:text-red-500 transition"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center text-gray-500">
            <p>© 2026 MOBIL PRO. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ untuk kemudahan Anda</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
