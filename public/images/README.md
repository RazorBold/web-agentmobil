# Image Asset Folder Structure

Folder ini untuk menyimpan semua gambar yang digunakan di website jual beli mobil.

## Folder Organization

### `/public/images/cars/`
**Gunakan untuk:** Foto atau gambar mobil individual
- `calya.png` atau `calya.jpg` - Gambar Toyota Calya
- `avanza.png` atau `avanza.jpg` - Gambar Toyota Avanza
- `agya.png` atau `agya.jpg` - Gambar Toyota Agya
- `raize.png` atau `raize.jpg` - Gambar Toyota Raize

**Rekomendasi:**
- Size: 400x300px (untuk car cards)
- Format: PNG (transparent bg) atau JPG
- Naming: lowercase dengan underscore (contoh: toyota_calya.png)

### `/public/images/features/`
**Gunakan untuk:** Icon atau gambar fitur
- `fast-process.png` - Ikon proses cepat
- `trusted.png` - Ikon terpercaya
- `easy-installment.png` - Ikon cicilan mudah
- `original-car.png` - Ikon mobil original

**Rekomendasi:**
- Size: 200x200px untuk icon
- Format: PNG dengan transparent background
- Naming: lowercase dengan dash (contoh: fast-process.png)

### `/public/images/logos/`
**Gunakan untuk:** Logo brand, sponsor, atau dealership
- `logo.png` - Logo utama website
- `brand-logo.png` - Logo brand
- `hero-banner.png` - Banner gambar hero

**Rekomendasi:**
- Size: Sesuai kebutuhan (600x400px untuk banner)
- Format: PNG dengan transparent background
- Naming: deskriptif dan lowercase

## Cara Menggunakan di Components

### Contoh di Next.js:

```tsx
import Image from "next/image";

export default function CarCard() {
  return (
    <Image
      src="/images/cars/toyota-calya.png"
      alt="Toyota Calya"
      width={400}
      height={300}
      priority
    />
  );
}
```

### Atau dengan tag HTML biasa:
```tsx
<img 
  src="/images/cars/toyota-calya.png" 
  alt="Toyota Calya"
/>
```

## Tips

1. **Optimasi Gambar**: Gunakan format WebP untuk performa lebih baik
2. **Responsive**: Siapkan versi mobile dan desktop jika perlu
3. **Naming Convention**: Gunakan nama yang deskriptif dan konsisten
4. **Size**: Jangan upload gambar terlalu besar (>1MB)
5. **Backup**: Simpan file original di folder terpisah jika perlu edit

## Struktur Complete
```
/public/images/
├── cars/
│   ├── toyota-calya.png
│   ├── toyota-avanza.png
│   ├── toyota-agya.png
│   └── toyota-raize.png
├── features/
│   ├── fast-process.png
│   ├── trusted.png
│   ├── easy-installment.png
│   └── original-car.png
└── logos/
    ├── logo.png
    ├── brand-logo.png
    └── hero-banner.png
```

Upload gambar Anda ke folder yang sesuai dan gunakan path di atas di components! 🎉
