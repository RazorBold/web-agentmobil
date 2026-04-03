"use client";

export default function ContactSection() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Ingin Informasi Lebih Cepat?
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 font-semibold">
          Hubungi Mahesa Disini
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Hubungi */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-bold text-lg mb-2">Hubungi</h3>
            <a
              href="tel:0858220765"
              className="text-red-600 font-bold text-xl hover:text-red-700"
            >
              0858-2207-6561
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/62858220765"
              className="text-green-600 font-bold text-xl hover:text-green-700"
            >
              +62-858-2207-6561
            </a>
          </div>

          {/* Facebook */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="text-4xl mb-4">f</div>
            <h3 className="font-bold text-lg mb-2">Terhubung</h3>
            <p className="text-gray-700 font-bold">Facebook</p>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="text-4xl mb-4">📷</div>
            <h3 className="font-bold text-lg mb-2">Terhubung</h3>
            <p className="text-gray-700 font-bold">Instagram</p>
          </div>
        </div>

        {/* Main Contact Area */}
        <div className="bg-white rounded-lg shadow-xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Info */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 font-semibold mb-2">📍 Alamat:</p>
                <p className="text-gray-600">
                  Jl. Pecenangan, Jakarta Utara
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 font-semibold mb-2">⏰ Jam Operasional:</p>
                <p className="text-gray-600">07:00 - 22:00 WIB</p>
              </div>
            </div>

            {/* Center Image Placeholder */}
            <div className="flex items-center justify-center bg-gray-100 rounded-lg min-h-64">
              <div className="text-6xl">🚗</div>
            </div>

            {/* Right Info */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-blue-700 font-bold mb-2">💰 Penawaran Spesial</p>
                <p className="text-blue-600">
                  DP Mulai dari 6.5 Juta, tenor sampai 5 tahun
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <p className="text-green-700 font-bold mb-2">✅ Keuntungan</p>
                <p className="text-green-600">
                  Data dibantu clear, proses cepat & mudah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
