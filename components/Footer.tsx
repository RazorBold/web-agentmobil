"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              🚗 JUAL<span className="text-blue-400">BELI</span>MOBIL
            </h3>
            <p className="text-gray-300">
              Platform jual beli mobil terpercaya dengan penawaran terbaik dan proses cepat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Menu</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  MPV
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  SUV
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Hatchback
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Sedan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📞 0858-2207-6561</li>
              <li>💬 WhatsApp Me</li>
              <li>📍 Jakarta Utara</li>
              <li>⏰ 07:00 - 22:00 WIB</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-red-500 transition">
                f
              </a>
              <a href="#" className="text-2xl hover:text-red-500 transition">
                📷
              </a>
              <a href="#" className="text-2xl hover:text-red-500 transition">
                🐦
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400">
            <p>
              © 2026 JualBeliMobil. All rights reserved. | Made with ❤️ by
              Mahesa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
