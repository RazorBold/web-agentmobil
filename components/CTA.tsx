"use client";

import { motion } from "framer-motion";

const contactMethods = [
  {
    icon: "📞",
    title: "Hubungi",
    value: "0858-2207-6561",
    link: "tel:0858220765",
    color: "from-red-500 to-red-600",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    value: "+62-858-2207-6561",
    link: "https://wa.me/62858220765",
    color: "from-green-500 to-green-600",
  },
  {
    icon: "📧",
    title: "Email",
    value: "info@jualbeli.com",
    link: "mailto:info@jualbeli.com",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: "📍",
    title: "Alamat",
    value: "Jakarta Utara",
    link: "#",
    color: "from-purple-500 to-purple-600",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function CTA() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-slate-900 to-black px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
            Siap Memiliki Mobil Impian?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Hubungi kami sekarang dan dapatkan penawaran eksklusif!
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.link}
              variants={itemVariants}
              className={`bg-gradient-to-br ${method.color} rounded-2xl p-8 text-white text-center group cursor-pointer`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-5xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {method.icon}
              </motion.div>
              <h3 className="text-lg font-bold mb-2">{method.title}</h3>
              <p className="font-semibold">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Large CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-12 py-6 bg-gradient-to-r from-red-500 to-red-600 text-white font-black rounded-xl text-xl"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 50px rgba(239, 68, 68, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            💬 CHAT DENGAN KAMI SEKARANG
          </motion.button>
          <p className="text-gray-400 mt-6">
            Respons cepat dalam 5 menit | Gratis konsultasi
          </p>
        </motion.div>
      </div>
    </section>
  );
}
