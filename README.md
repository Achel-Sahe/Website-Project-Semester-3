# Jelajah Jabar — Portal Wisata Jawa Barat

Project React + Vite: web wisata interaktif yang menampilkan destinasi alam dan budaya Jawa Barat (gunung, curug, pantai, taman, kebun binatang).

**Stack:** React 19 · Vite 8 · React Router 7 · Lenis (smooth scroll) · AOS (animasi) · lucide-react (ikon)

## Cara Menjalankan

```bash
npm install
npm run dev       # development server (hot reload)
npm run build     # production build
npm run preview   # preview build
npm run lint      # oxlint
```

## Struktur Project

```
src/
├── main.jsx           # Entry point (ReactDOM, Lenis, AOS init)
├── App.jsx            # Router utama
├── components/        # Komponen kecil reusable (Title, SubTitle, Button)
├── dev-1/           # Navbar, Hero, Gallery, Button, Footer
├── dev-2/           # DestinationCard, FilterBar, FilterChip
├── dev-3/           # QuickInfoPanel, ExperienceCard, MapSection
├── page/              # Halaman: home, destinasi, galeri, about, personalWisata
├── data/
│   └── dataWisata.js  # Semua data wisata (single source of truth)
└── img/               # Aset gambar
```

## Fitur

- Halaman multi-route (Home, Destinasi, Galeri, About, Detail Wisata)
- Filtering destinasi per kategori (gunung, curug, pantai, taman, kebun binatang)
- Galeri bento layout dengan staggered animation
- Detail destinasi dengan embed Google Maps
- Navbar responsif dengan mobile menu
- Smooth scrolling (Lenis) + scroll animation (AOS)
- Lazy loading gambar

---

# 🎤 Panduan Presentasi

> Penggalan English buat nyelipin di tengah kalimat Indo + cara ngejelasin. Semua code di bawah REAL dari project ini — tinggal dibaca pas presentasi.

## 1. Array Data (`dataWisata.js`)

```js
export const dataWisata = {
  destinations: [
    { id: 1, name: "Curug Panjang", tag: "Curug", category: "curug", image: CurugPanjang, size: "hero" },
    { id: 2, name: "Gunung Ciremai", tag: "Gunung", category: "gunung", image: GunungCiremai, size: "wide" },
    { id: 3, name: "Kebun Raya Bogor", tag: "Taman", category: "taman", image: TamanKebunraya, size: "normal" },
    // ... dst
  ],
};
```

**Slang (tapi tetep pro):**
> "Gua pisahin datanya ke satu source of truth, jadi semua destinasi itu tinggal array of objects. Mau nambah tempat? Tinggal push satu entry, UI-nya auto kegenerate. Efeknya, data sama tampilan nggak nyampur — clean separation of concerns."

**Frase wajib biar keliatan berpengalaman:**
- "single source of truth" 🔥
- "data-driven rendering" 🔥
- "separation of concerns" 🔥

## 2. `.map()` buat render list

> Code asli: `src/dev-1/galeriBento.jsx`

```jsx
{items.map((item, i) => (
  <Link
    key={item.id}
    to={`/pw/${encodeURIComponent(item.caption || item.alt || "")}`}
    className={`gallery-bento__item gallery-bento__item--${item.size || "normal"}`}
    data-aos="fade-up"
    data-aos-delay={i * 80}
  >
    <img className="gallery-bento__img" src={item.image} alt={item.alt || ""} loading="lazy" />
    {/* ... */}
  </Link>
))}
```


**Slang:**
> "Gua nggak nulis card-nya satu-satu — gua `map()` aja datanya, jadi 5 atau 50 destinasi, code-nya tetep segini doang. `key` di setiap item itu penting biar React tahu mana yang berubah, jadi pas update nggak perlu re-render semuanya."

## 3. Props + Destructuring (`hero.jsx`)

```jsx
function Hero({
  pc,
  Button: ButtonComponent = ButtonDefault,
  p1,
  p2,
  overlay,
}) {
  return (
    <section className="hero-section" data-aos="fade-in">
      {overlay && <div className="hero-overlay" />}
      <div className="hero-image" style={{ backgroundImage: `url(${img})` }} />
      <div className="hero-content">
        <p className={`hero-subtitle ${pc}`}>EXPLORE WEST JAVA</p>
        <h1 className={`hero-title c-scnd `}>
          {p1} <br /> {p2}
        </h1>
        {/* ... */}
      </div>
    </section>
  );
}
```

Dipake di halaman lain — `src/page/about.jsx`:
```jsx
<Hero p1={'Cerita di Balik'} p2={'Keindahan Priangan'} pc={'hidden'} Button={null} overlay />
```

**Slang:**
> "Hero component gua bikin reusable. Kontennya bisa diganti dari luar lewat props, bahkan tombolnya juga bisa di-swap — ada default-nya tapi bisa di-override. Jadi satu komponen, bisa dipakai berkali-kali di halaman yang beda."

**Frase wajib:**
- "reusable component" 🔥
- "dependency injection" (bonus point, dosen suka)
- "decoupled / loosely coupled" 🔥

## 4. Conditional Rendering

> Code asli: `src/dev-1/hero.jsx`

```jsx
{overlay && <div className="hero-overlay" />}

{ButtonComponent && (
  <div data-aos="fade-up" data-aos-delay="600">
    <ButtonComponent
      text={<>Mulai Perjalananmu <ArrowRight size={16} /></>}
      className="c-scnd primary"
    />
  </div>
)}
```
**Slang:**
> "Pola `&&` ini tuh shortcut-nya conditional rendering. Nilainya falsy? Otomatis di-skip React-nya. Lebih ringkas daripada nulis if-else buat hal sesimpel ini."

## 5. Animation Stagger

> Code asli: `src/components/jelajahJabar.jsx`

```jsx
{features.map(({ icon: Icon, title, description }, i) => (
  <div key={title} className="feature-card" data-aos="fade-up" data-aos-delay={i * 120}>
    <Icon className="feature-icon" strokeWidth={1.75} />
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
))}
```

**Slang:**
> "Delay-nya gua kalikan sama index, jadi tiap card muncul bergantian kayak efek domino — biar nggak kaku semuanya muncul barengan. Detail kecil, tapi bikin UX-nya terasa lebih premium."

## 6. Component Modularity (`components/`, `dev-1/`)

```
src/
├── components/   → Title.jsx, SubTitle.jsx, Button.jsx (satu tanggung jawab per file)
├── dev-1/        → Navbar, Hero, GalleryBento, Button, Footer
├── dev-2/        → DestinationCard, FilterBar, FilterChip
├── dev-3/        → QuickInfoPanel, ExperienceCard, MapSection
└── page/         → home, destinasi, galeri, about, personalWisata
```

**Slang:**
> "Gua pecah jadi komponen-komponen kecil yang fokusnya satu doang — ada `Title`, `SubTitle`, `Button`, masing-masing tanggung jawabnya jelas. Makanya kalau ada bug, tinggal buka file yang relevan, nggak perlu bongkar-bongkar satu file gede."

## 7. Penggalan English buat disisipin

### 📦 Deklarasi & Data

| English | Arti | Contoh dipakai |
|---|---|---|
| `declare a variable` | bikin variabel | "Di sini gua **declare** satu array..." |
| `initialize it` | isi nilai awal | "Direct data ini gua **initialize**..." |
| `store data` | simpan data | "Data destinasi gua **store** di satu file..." |
| `single source of truth` | sumber data tunggal | "Jadi ini **single source of truth**-nya..." |
| `array of objects` | array berisi object | "...ini tinggal **array of objects**." |
| `structured data` | data terstruktur | "Semua pakai **structured data**, jadi konsisten." |
| `hardcoded` | ditulis manual mati | "Layout-nya nggak **hardcoded**..." |
| `static dataset` | data yang nggak berubah | "Ini masih **static dataset**..." |

### 🔁 Looping / Render

| English | Arti | Contoh dipakai |
|---|---|---|
| `loop / iterate over` | Looping data | "Gua **iterate over** array-nya..." |
| `map through it` | pakai `.map()` | "Tinggal **map through** datanya..." |
| `dynamically render` | render otomatis | "Setiap item ke-**render dynamically**..." |
| `generate the UI` | bikin tampilan | "UI-nya **auto-generated** dari data." |
| `scale automatically` | nambah otomatis | "Datanya nambah, tampilannya ikut-**scale automatically**." |
| `loop once per item` | sekali per item | "Per item, di-**loop once**." |

### 🧩 Komponen & Props

| English | Arti | Contoh dipakai |
|---|---|---|
| `reusable component` | komponen bisa dipakai ulang | "Hero ini gua bikin **reusable component**..." |
| `pass props down` | kirim data ke anak | "Data gua **pass down** lewat props..." |
| `accept props` | terima kiriman | "Komponennya **accepts props**..." |
| `destructure` | ambil langsung dari props | "Props gua **destructure** di parameter..." |
| `compose smaller components` | gabung komponen kecil | "Page ini **composed** dari komponen kecil..." |
| `self-contained` | komponen berdiri sendiri | "Setiap komponen **self-contained**..." |
| `injectable` | bisa disuntik/diganti dari luar | "Tombolnya bahkan **injectable**..." |
| `cascading effect` | efek berurutan | "Delayed animation bikin **cascading effect**..." |

### ⚙️ Logika / Conditional

| English | Arti | Contoh dipakai |
|---|---|---|
| `short-circuit evaluation` | pola `&&` | "Ini pakai **short-circuit evaluation**..." |
| `truthy / falsy` | bernilai benar/salah | "...kalau value-nya **falsy**, langsung skip." |
| `conditionally render` | tampil bersyarat | "Overlay-nya **conditionally rendered**..." |
| `edge case` | kasus khusus | "Ini buat ngatasin **edge case**-nya..." |
| `fallback value` | nilai cadangan | "Ada **fallback value** kalau props kosong." |
| `default parameter` | nilai default | "Button-nya ada **default parameter**..." |

### 🎨 Styling & Responsive

| English | Arti | Contoh dipakai |
|---|---|---|
| `breakpoints` | titik perubahan layout | "Pakai **breakpoints** biar responsive..." |
| `mobile-first approach` | utamakan HP dulu | "Style-nya **mobile-first**..." |
| `adapt to screen size` | nyesuaiin layar | "Layout **adapts** ke ukuran layar." |
| `flexbox / grid` | sistem layout | "Pakai **CSS grid** buat card-nya..." |

### 🚀 Build & Git

| English | Arti | Contoh dipakai |
|---|---|---|
| `build tool` | alat build | "Vite sebagai **build tool**-nya..." |
| `hot reload` | auto-refresh saat develop | "Vite ada **hot reload**, jadi develop cepat..." |
| `bundle size` | besar file hasil build | "Bundle-nya tetep **lightweight**..." |
| `version control` | git | "Semua di-track pakai **version control**..." |
| `clean commit` | commit rapi | "Commit history-nya gua jaga tetep **clean**..." |

## 8. Template Kalimat Campuran (Siap Pakai)

> "Jadi workflow-nya gini — data gua **declare** dulu sebagai **array of objects** di file terpisah. Terus di komponen, gua **map through** data itu biar UI-nya **dynamically rendered**. Tiap komponen itu **reusable**, dan antar komponen gua **pass props down** supaya nggak ada fungsi yang duplikat. Property yang nggak pasti gua kasih **fallback value**, dan yang kondisional gua jagain pakai **short-circuit evaluation**. Styling-nya **mobile-first** dengan **breakpoints**, jadi layout-nya **scale automatically**. Kesimpulannya, arsitektur ini udah siap kalau datanya mau di-swap ke **real API** dari backend."

## Bonus: Bahasa buat Slide & Q&A

| Situasi | Ucapan |
|---|---|
| Buka presentasi | "So, I built this as a **component-based** React app using **Vite** as the build tool —" |
| Ditanya kenapa pilih X | "**Because it scales better** / **it's more maintainable** / **performance-wise it's lighter**." |
| Ditanya yang nggak tahu | "Honestly, that's a trade-off I hadn't fully explored yet — but it's on my radar." |
| Nunjukin data | "This is a **static dataset** right now, but the architecture is ready to swap in a real **API** anytime — we'd just replace the data source." |
| Ngomongin styling | "I used CSS with **responsive breakpoints** — mobile-first approach, so it adapts from phone to desktop." |

## Catatan Penting Sebelum Presentasi

### 2. Commit message
Commit terakhir lu "last push maybe" — ganti gaya:
```bash
git commit -m "feat: finalize presentation build"
```

### 3. Nama folder modul
Folder `dev-1`, `dev-2`, `dev-3` — masing-masing modul developer. Kalau dosen tanya, jawab: "kita develop bareng pakai git, tiap orang pegang modul `dev-1/2/3`, kontribusi siapa ngapain ke-track di git history".

### 4. Tip gaya presentasi
- Sisipin maksimal **2-3 istilah English per kalimat** — kebanyakan jadi kayak hafalan.
- Garisbawahi 5-6 istilah paling penting per sesi.
- Kalau dosen tanya yang nggak tahu: *"Honestly, that's a trade-off I haven't fully explored yet — but it's on my radar."* — kedengeran confident dan pro.




3. pastikan routes di react router.
4. integrate =>
5. 



kita bagi menjadi beberapa components, yang akan di integrate/compouse. setelah di develop, kita akan import di setiap page yang akan kita gunakan.

atur routing untuk alurnya

folder development
hero 


comps :
shared components / reusable

props :
passing. return