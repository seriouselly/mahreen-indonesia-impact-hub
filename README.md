# Mahreen Impact Hub

Mahreen Impact Hub adalah website prototipe untuk membantu anak muda menemukan ruang belajar, berkarya, berkolaborasi, dan menciptakan dampak bersama Mahreen Indonesia.

Konten opportunity di dalam website ini bersifat demo untuk keperluan internship challenge dan bukan daftar program resmi yang sedang berjalan.

## Fitur

- Hero section dengan navigasi anchor ke setiap bagian halaman.
- Eksplorasi enam area ekosistem: Creative, Digital Technology, Talent Development, Business, Community, dan Social Impact.
- Impact Path quiz untuk membantu pengguna menemukan kategori yang sesuai.
- Opportunity Finder dengan pencarian dan filter berdasarkan kategori.
- Detail opportunity melalui modal interaktif.
- Timeline perjalanan dari belajar sampai menciptakan dampak.
- Responsive layout untuk desktop dan mobile.
- Smooth scrolling, reveal animation, dan dukungan reduced motion.

## Teknologi

- React 19
- Vite
- Tailwind CSS 4
- ESLint

## Menjalankan Project

Pastikan Node.js dan npm sudah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Buka URL yang ditampilkan Vite, biasanya `http://localhost:5173`.

## Script

| Command           | Keterangan                                |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Menjalankan development server dengan HMR |
| `npm run build`   | Membuat production build di folder `dist` |
| `npm run preview` | Menjalankan preview dari production build |
| `npm run lint`    | Memeriksa error dan aturan ESLint         |

## Struktur Folder

```text
src/
├── .github/
│      └── workflows
│       └── deploy.yml         # Robot deploy
├── assets/                    # Asset gambar dan logo
├── components/                # Komponen section dan UI
│   ├── About.jsx
│   ├── CategoryCard.jsx
│   ├── EcosystemSection.jsx
│   ├── FinalCTA.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ImpactJourney.jsx
│   ├── ImpactQuiz.jsx
│   ├── Navbar.jsx
│   ├── OpportunityCard.jsx
│   ├── OpportunityFinder.jsx
│   └── OpportunityModal.jsx
└── data/
    └── opportunities.js       # Data kategori, opportunity, dan quiz
├── App.jsx                    # Komposisi halaman utama
├── index.css                  # Global reset, token, animasi, dan styling dasar
├── main.jsx                   # Entry point React
```

## Mengubah Data Opportunity

Data kategori, kartu opportunity, dan pertanyaan quiz berada di [src/data/opportunities.js](src/data/opportunities.js). Untuk menambah opportunity, lengkapi field berikut:

```js
{
	id: 9,
	category: "creative",
	categoryLabel: "Creative",
	title: "Judul Opportunity",
	description: "Deskripsi singkat opportunity.",
	tags: ["Desain", "Konten"],
	learn: "Hal yang dapat dipelajari.",
	contribute: "Hal yang dapat dikontribusikan."
}
```

## Status Project

Project ini merupakan prototype frontend. Belum terdapat backend, autentikasi, database, atau integrasi pendaftaran opportunity.

## Deploy ke GitHub Pages

Project sudah memiliki workflow GitHub Actions di `.github/workflows/deploy.yml` yang akan menjalankan build dan deploy otomatis setiap ada push ke branch `main`.

Di repository GitHub, buka **Settings → Pages**, lalu pilih **GitHub Actions** sebagai source deployment. Setelah workflow berhasil, website dapat diakses di:

```text
https://seriouselly.github.io/mahreen-indonesia-impact-hub/
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
