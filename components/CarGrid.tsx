"use client";

import { Car } from "@/types";

const carGrid: Car[] = [
  { id: "1", name: "Calya", type: "MPV", image: "🚗" },
  { id: "2", name: "Avanza", type: "MPV", image: "🚗" },
  { id: "3", name: "Veloz", type: "MPV", image: "🚗" },
  { id: "4", name: "Innova", type: "SUV", image: "🚙" },
  { id: "5", name: "Zenix", type: "SUV", image: "🚙" },
  { id: "6", name: "Voxy", type: "SUV", image: "🚙" },
  { id: "7", name: "Alphard", type: "COMMERCIAL", image: "🚐" },
  { id: "8", name: "Vellfire", type: "COMMERCIAL", image: "🚐" },
  { id: "9", name: "Agya", type: "HATCHBACK", image: "🚗" },
  { id: "10", name: "Raize", type: "SUV", image: "🚙" },
  { id: "11", name: "Rush", type: "SUV", image: "🚙" },
];

interface CarGridProps {
  selectedType?: string;
}

export default function CarGrid({ selectedType }: CarGridProps) {
  const filteredCars = selectedType
    ? carGrid.filter((car) => car.type === selectedType)
    : carGrid;

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Daftar Kendaraan Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="bg-gradient-to-b from-blue-100 to-blue-50 h-40 flex items-center justify-center">
                <span className="text-6xl">{car.image}</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {car.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Tipe: <span className="font-semibold">{car.type}</span>
                </p>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
