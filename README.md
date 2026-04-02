# ⌨️ TypeKids — Belajar Mengetik & Python

Aplikasi web interaktif untuk melatih anak-anak belajar mengetik cepat dari dasar, dilanjutkan dengan pengenalan sintaks Python!

## 🎮 Fitur

- **12 Level Progresif** dari dasar hingga Python
- **6 Level Mengetik**: Home Row → Kata → Semua Huruf → Speed Mode
- **6 Level Python**: print() → Variabel → Matematika → For Loop → If-Else → Fungsi
- Sistem **Bintang & Streak** untuk motivasi
- **Virtual Keyboard** dengan highlight tombol aktif
- **WPM & Akurasi** meter real-time
- **Timer** dengan countdown visual
- **Syntax Highlighting** untuk kode Python
- **Confetti** saat berhasil! 🎉
- Progress tersimpan di **localStorage**
- **Fully Responsive** — bisa di HP dan laptop

## 🚀 Deploy ke Vercel

### Cara 1: Via GitHub + Vercel
1. Fork/push repo ini ke GitHub
2. Buka [vercel.com](https://vercel.com) → New Project
3. Import repo dari GitHub
4. Klik Deploy — selesai!

### Cara 2: Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

## 💻 Jalankan Lokal

Tidak perlu instalasi apapun! Cukup buka `index.html` di browser, atau gunakan live server:

```bash
# Dengan Python
python -m http.server 3000

# Dengan Node.js
npx serve .
```

Buka `http://localhost:3000`

## 📁 Struktur File

```
typing-trainer/
├── index.html      # Struktur HTML utama
├── style.css       # Styling & animasi
├── app.js          # Logic aplikasi + data level
├── vercel.json     # Konfigurasi deployment Vercel
└── README.md       # Dokumentasi ini
```

## 🗺️ Roadmap Level

| Level | Kategori | Topik | Target WPM |
|-------|----------|-------|-----------|
| 1 | Dasar | Posisi Jari (Home Row) | 5 |
| 2 | Dasar | Kata Pendek | 8 |
| 3 | Menengah | Baris Atas QWERTY | 10 |
| 4 | Menengah | Baris Bawah ZXCV | 12 |
| 5 | Mahir | Kalimat Lengkap | 15 |
| 6 | Cepat | Sprint Mode | 20 |
| 7 | 🐍 Python | Hello World / print() | 12 |
| 8 | 🐍 Python | Variabel | 12 |
| 9 | 🐍 Python | Operasi Matematika | 12 |
| 10 | 🐍 Python | For Loop | 10 |
| 11 | 🐍 Python | If - Else | 10 |
| 12 | 🐍 Python | Fungsi (def) | 10 |

## 🛠️ Teknologi

- **Vanilla HTML/CSS/JavaScript** — tanpa framework
- **Google Fonts** — Fredoka One, Nunito, Space Mono
- **localStorage** untuk menyimpan progress

## 📄 Lisensi

MIT License — bebas digunakan dan dimodifikasi!
