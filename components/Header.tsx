"use client";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white sticky top-0 z-50 shadow-lg">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              📍 Pecenangan, Jakarta Utara
            </span>
            <span className="flex items-center gap-2">
              📞 0858-2207-6561
            </span>
          </div>
          <div className="flex items-center gap-2">
            ⏰ 07:00 - 22:00 WIB
            <span className="bg-red-800 px-2 py-1 rounded font-bold">
              TUTUP
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold">
              🚗 <span className="text-red-500">JUAL</span>
              <span className="text-blue-400">BELI</span>
              <span className="text-yellow-400">MOBIL</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-red-500 transition">
              f
            </a>
            <a href="#" className="hover:text-red-500 transition">
              📷
            </a>
            <a href="#" className="hover:text-red-500 transition">
              👤
            </a>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-wrap gap-6 justify-center md:justify-start">
          {["MPV", "SUV", "HATCHBACK", "SEDAN", "COMMERCIAL", "TESTIMONI", "PROMO"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-red-500 font-semibold transition flex items-center gap-2"
              >
                {item}
                {["MPV", "SUV", "HATCHBACK", "SEDAN", "COMMERCIAL"].includes(item) && (
                  <span className="text-red-500">●</span>
                )}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
