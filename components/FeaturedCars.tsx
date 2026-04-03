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
                className={`bg-gradient-to-br ${car.color} rounded-3xl p-8 text-white overflow-hidden group cursor-pointer relative border border-white/20 backdrop-blur-xl shadow-2xl`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -20,
                  boxShadow: "0 30px 80px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
                onClick={() => openModal(car)}
              >
                {/* Premium shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-white/10 via-transparent to-white/10"
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Badge */}
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-xs font-bold mb-6 w-fit backdrop-blur-md"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                  >
                    <span className="text-lg">⭐</span>
                    <span>POPULER</span>
                  </motion.div>

                  {/* Price Section */}
                  <div className="mb-8">
                    <p className="text-xs text-white/70 font-semibold tracking-wider mb-2">DOWN PAYMENT</p>
                    <p className="text-4xl font-black">{car.price}</p>
                  </div>

                  {/* Divider */}
                  <div className="w-12 h-1 bg-gradient-to-r from-white to-white/30 rounded-full mb-8" />

                  {/* Car Image with glow */}
                  <div className="flex-1 flex items-center justify-center mb-8">
                    <motion.div
                      className="text-7xl drop-shadow-2xl"
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {car.image}
                    </motion.div>
                  </div>

                  {/* Car Name */}
                  <h3 className="text-2xl font-black mb-6 leading-tight">{car.name}</h3>

                  {/* Installment Card */}
                  <motion.div
                    className="mb-6 p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md group-hover:bg-white/15 transition-colors"
                    whileHover={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
                  >
                    <p className="text-xs text-white/70 font-semibold tracking-wider mb-1">CICILAN/BULAN</p>
                    <p className="text-2xl font-black">{car.installment}</p>
                  </motion.div>

                  {/* Button */}
                  <motion.button
                    className="w-full py-3 px-4 bg-white text-slate-900 font-bold rounded-xl text-sm tracking-wide mt-auto border-2 border-white shadow-lg hover:shadow-xl transition-all"
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    ▶ Lihat Detail
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
