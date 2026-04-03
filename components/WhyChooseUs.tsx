"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Proses Cepat",
    description: "Approval dalam 24 jam",
  },
  {
    icon: "🛡️",
    title: "Terpercaya",
    description: "Ribuan pelanggan puas",
  },
  {
    icon: "💳",
    title: "Mudah Cicilan",
    description: "Tenor hingga 5 tahun",
  },
  {
    icon: "🚗",
    title: "Mobil Original",
    description: "Garansi resmi dealer",
  },
];

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Jakarta",
    text: "Proses sangat mudah dan cepat, mobil sudah bisa dibawa pulang dalam 1 hari!",
    rating: 5,
  },
  {
    name: "Siti Nurhaliza",
    role: "Surabaya",
    text: "Cicilan ringan, staff ramah, dan mobil berkualitas. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ahmad Wijaya",
    role: "Bandung",
    text: "Pelayanan terbaik! Data dibantu sampai clear seperti yang dijanjikan.",
    rating: 5,
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

export default function WhyChooseUs() {
  return (
    <section className="w-full py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Features Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-slate-900">
              Kenapa Pilih Kami?
            </h2>
            <p className="text-gray-600 text-lg">
              Layanan terbaik untuk kepuasan pelanggan
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 text-center group hover:shadow-2xl transition-all"
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="bg-gradient-to-b from-slate-100 to-white rounded-3xl p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl lg:text-4xl font-black text-center mb-12 text-slate-900">
            Testimoni Pelanggan ⭐
          </h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
                whileHover={{ y: -10 }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-2xl">⭐</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
