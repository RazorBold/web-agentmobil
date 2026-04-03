"use client";

export default function HeroBanner() {
  return (
    <div className="relative w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-lg p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
              🎉 PROMO AWAL TAHUN! 🎉
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              DP MULAI 6.5 JT! DATA BANTU CLEAR!
            </h2>
            <p className="text-lg text-gray-700 font-semibold">
              Spesial untuk: Toyota Calya, Agya, Avanza, Raize, & Rush
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <p className="text-sm text-gray-600 mb-2">TENOR 5 TAHUN</p>
              <p className="text-2xl font-bold text-red-600">DATA DI BANTU</p>
              <p className="text-sm text-gray-600">SAMPAI CLEAR</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <p className="text-2xl font-bold text-green-600">✓ AJUKAN</p>
              <p className="text-sm text-gray-600">SEKARANG</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <p className="text-2xl font-bold text-green-600">✓ AMBIL</p>
              <p className="text-sm text-gray-600">BONUSNYA!</p>
            </div>
          </div>

          <div className="text-center text-red-600 font-bold text-lg">
            Hubungi kami sekarang & dapatkan penawaran terbaik! 🚗
          </div>
        </div>
      </div>
    </div>
  );
}
