# Data Plan — Konsolidasi Data Wisata

## Tujuan
Memusatkan semua data wisata ke dalam satu file `src/data/dataWisata.js` yang bisa diimport dari komponen mana pun.

---

## Data yang akan dipindah ke `src/data/dataWisata.js`

| Data | Deskripsi | Sumber Saat Ini |
|---|---|---|
| `DESTINATIONS` | 25 destinasi (nama, kategori, gambar, ukuran) | `src/orang-2/data/destinations.js` |
| `DESTINATION_FILTERS` | 6 filter (Semua, Gunung, Curug, Pantai, Kebun Binatang, Taman) | `src/orang-2/data/destinations.js` |
| `QIP_DESTINATIONS` | 5 kategori untuk Quick Info Panel cards | `src/orang-3/quickinfopanel.jsx` (hardcoded) |
| `FEATURE_CARDS` | 3 card fitur (Kurasi, Lokasi, Petualangan) | `src/data/cardGrid.jsx` |
| `GUNUNG_CIREMAI`, `PANTAI`, `CURUG`, `TAMAN`, `KEBUN_BINATANG` | 5 destinasi detail | `src/orang-3/data.js` (existing) |

---

## Struktur Data yang Diusulkan

### DESTINATIONS
```js
{
  id: number,
  name: string,
  tag: string,        // "Curug", "Gunung", dll
  category: string,   // "curug", "gunung", dll
  image: imageImport,
  size: "hero" | "wide" | "normal" | "full"
}
```

### DESTINATION_FILTERS
```js
{
  id: string,   // "semua", "gunung", "curug", dll
  label: string  // "Semua", "Gunung", "Curug", dll
}
```

### QIP_DESTINATIONS
```js
{
  id: string,     // "gunung", "curug", dll (sama dengan filter id)
  label: string,  // "Gunung", "Curug", dll
  icon: string    // nama ikon lucide-react: "Mountain", "Droplets", dll
}
```

### FEATURE_CARDS
```js
{
  icon: string,  // nama ikon lucide-react: "BadgeCheck", "MapPin", "Compass"
  judul: string, // "Kurasi", "Lokasi", "Petualangan"
  desc: string
}
```

---

## File Import yang Perlu Diupdate

| File | Import Lama | Import Baru |
|---|---|---|
| `src/page/destinasi.jsx` | `../orang-2/data/destinations` | `../data/data` |
| `src/page/galeri.jsx` | `../orang-2/data/destinations` | `../data/data` |
| `src/orang-3/quickinfopanel.jsx` | local data (hapus) | `../data/data` |
| `src/orang-3/experiencecard.jsx` | `../data/cardGrid` | `../data/data` |
| `src/components/aboutKontol.jsx` | `../data/cardGrid` | `../data/data` |
| `src/orang-3/destinations.jsx` | `./data` | `../data/data` |
| `src/page/personalWisata.jsx` | `../orang-3/data` | `../data/data` |

---

## Catatan

- Ikon di `QIP_DESTINATIONS` dan `FEATURE_CARDS` disimpan sebagai **string nama ikon** (bukan JSX) biar data tetap bersih tanpa dependency React
- Komponen yang render ikon akan melakukan mapping string → komponen lucide-react
- Path gambar `DESTINATIONS` akan diarahkan ke `src/orang-2/images/...`
- File lama (`src/orang-2/data/destinations.js`, `src/data/cardGrid.jsx`) bisa dihapus setelah semua import diupdate
