"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CarModal from "./CarModal";

interface Car {
  name: string;
  price: string;
  image: string;
  color: string;
  installment: string;
  specs: string[];
}

const cars: Car[] = [
  {
    name: "Toyota Calya",
    price: "6.5 JT",
    image: "🚗",
    color: "from-blue-500 to-blue-600",
    installment: "3.8 JT",
    specs: ["Tenor hingga 5 tahun", "Data dibantu sampai clear", "Gratis asuransi 1 tahun", "Mobil original siap pakai"],
  },
  {
    name: "Toyota Avanza",
    price: "10 JT",
    image: "🚙",
    color: "from-red-500 to-red-600",
    installment: "4.2 JT",
    specs: ["Tenor hingga 5 tahun", "Data dibantu sampai clear", "Gratis perawatan 1 tahun", "Mobil original siap pakai"],
  },
  {
    name: "Toyota Agya",
    price: "7 JT",
    image: "🚗",
    color: "from-green-500 to-green-600",
    installment: "3.9 JT",
    specs: ["Tenor hingga 5 tahun", "Data dibantu sampai clear", "Bonus audio system", "Mobil original siap pakai"],
  },
  {
    name: "Toyota Raize",
    price: "12 JT",
    image: "🚙",
    color: "from-purple-500 to-purple-600",
    installment: "5.2 JT",
    specs: ["Tenor hingga 5 tahun", "Data dibantu sampai clear", "Bonus velg racing", "Mobil original siap pakai"],
  },
];

export default function FeaturedCars() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCar(null), 300);
  };

  return (
    <>
      <section className="w-full py-20 bg-gradient-to-b from-slate-900 to-slate-800 px-4">
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
              Pilihan Mobil <span className="text-red-500">Terpopuler</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Ratusan pilihan mobil berkualitas dengan harga terbaik
            </p>
          </motion.div>

          {/* Cars Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {cars.map((car, i) => (
              <motion.div
                key={i}
                className={`bg-gradient-to-br ${car.color} rounded-2xl p-6 text-white overflow-hidden group cursor-pointer relative`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4)",
                }}
                onClick={() => openModal(car)}
              >
                {/* Animated background gradient overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                />

                <div className="relative z-10">
                  {/* Badge */}
                  <motion.div
                    className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-bold mb-4 backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    ⭐ POPULER
                  </motion.div>

                  {/* Price */}
                  <div className="mb-6">
                    <p className="text-sm text-white/80">DP Mulai Dari</p>
                    <p className="text-3xl font-black">{car.price}</p>
                  </div>

                  {/* Car Image */}
                  <motion.div
                    className="text-8xl my-8 text-center"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {car.image}
                  </motion.div>

                  {/* Car Name */}
                  <h3 className="text-2xl font-bold mb-4">{car.name}</h3>

                  {/* Installment */}
                  <div className="mb-6 p-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm">
                    <p className="text-sm text-white/80">Cicilan/Bulan</p>
                    <p className="text-xl font-bold">{car.installment}</p>
                  </div>

                  {/* Button */}
                  <motion.button
                    className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg text-sm group-hover:bg-slate-900 group-hover:text-white transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Lihat Detail
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <CarModal car={selectedCar} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
