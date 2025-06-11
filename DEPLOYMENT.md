# 🚀 Panduan Deploy ke GitHub Pages

Panduan lengkap untuk mendeploy website Sales Consultant Chery ke GitHub Pages.

## 📋 Persiapan

### 1. Buat Repository GitHub Baru
1. Login ke [GitHub.com](https://github.com)
2. Klik tombol **"New repository"**
3. Beri nama repository (contoh: `chery-sales-website`)
4. Set repository sebagai **Public**
5. Centang **"Add a README file"**
6. Klik **"Create repository"**

### 2. Upload Files Website
Anda bisa upload dengan dua cara:

#### Cara 1: Upload via Web Interface
1. Di repository GitHub, klik **"uploading an existing file"**
2. Drag & drop semua file website:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `_config.yml`
   - `.gitignore`
3. Tulis commit message: "Initial website upload"
4. Klik **"Commit changes"**

#### Cara 2: Git Command Line
```bash
git clone https://github.com/username/repository-name.git
cd repository-name
# Copy semua file website ke folder ini
git add .
git commit -m "Initial website upload"
git push origin main
```

## ⚙️ Konfigurasi GitHub Pages

### 1. Aktifkan GitHub Pages
1. Di repository GitHub, klik tab **"Settings"**
2. Scroll ke bawah ke bagian **"Pages"**
3. Di **"Source"**, pilih **"Deploy from a branch"**
4. Di **"Branch"**, pilih **"main"** dan folder **"/ (root)"**
5. Klik **"Save"**

### 2. Update Konfigurasi
1. Edit file `_config.yml`
2. Ganti baris berikut sesuai repository Anda:
```yaml
url: "https://username.github.io" # Ganti 'username' dengan username GitHub Anda
baseurl: "/repository-name" # Ganti 'repository-name' dengan nama repository Anda
```

### 3. Commit Perubahan
```bash
git add _config.yml
git commit -m "Update GitHub Pages configuration"
git push origin main
```

## 🌐 Akses Website

Setelah deploy berhasil, website dapat diakses di:
```
https://username.github.io/repository-name
```

**Catatan:** Proses deployment bisa memakan waktu 5-10 menit.

## 📱 Optimasi Mobile

Website sudah dioptimasi untuk mobile dengan fitur:

### Responsive Breakpoints
- **Mobile:** 360px - 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** 1024px+

### Mobile Features
- ✅ Touch-friendly buttons (min 44px)
- ✅ Readable font sizes (min 16px)
- ✅ Optimized images
- ✅ Fast loading
- ✅ Proper viewport settings
- ✅ Mobile navigation menu
- ✅ Optimized floating WhatsApp button

## 🔧 Kustomisasi

### Mengganti Informasi Sales
Edit file `index.html` dan ganti:
1. **Nama Sales:** Cari "Budi Santoso" dan ganti dengan nama Anda
2. **Nomor WhatsApp:** Cari "+6281234567890" dan ganti dengan nomor Anda
3. **Email:** Cari "budi.santoso@chery.co.id" dan ganti dengan email Anda
4. **Lokasi:** Ganti "Jakarta Selatan" dengan lokasi dealer Anda

### Mengupdate Harga
Edit file `index.html` bagian varian produk dan ganti harga sesuai yang terbaru.

### Menambah/Ubah Testimoni
Edit bagian testimonials di `index.html` dan ganti dengan testimoni asli dari pelanggan Anda.

## 📈 SEO & Analytics

### Google Analytics (Opsional)
Tambahkan Google Analytics tracking code di `index.html` sebelum `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Google Search Console
1. Daftarkan website di [Google Search Console](https://search.google.com/search-console)
2. Verifikasi kepemilikan website
3. Submit sitemap: `https://username.github.io/repository-name/sitemap.xml`

## 🚨 Troubleshooting

### Website Tidak Muncul
1. **Cek Status Build:** Di repository, tab "Actions" - pastikan build berhasil
2. **Cek Settings:** Pastikan GitHub Pages sudah diaktifkan
3. **Wait:** Tunggu 5-10 menit untuk propagasi

### Error 404
1. **Cek URL:** Pastikan URL sesuai format `https://username.github.io/repository-name`
2. **Cek File:** Pastikan `index.html` ada di root folder
3. **Cek Branch:** Pastikan deploy dari branch yang benar

### Mobile Tidak Responsive
1. **Clear Cache:** Hapus cache browser di mobile
2. **Test Tools:** Gunakan Chrome DevTools untuk test responsive
3. **Viewport:** Pastikan meta viewport tag sudah benar

## 📞 Support

Jika mengalami kesulitan deployment:

**Budi Santoso - Sales Consultant Chery**
- 📱 WhatsApp: +62 812-3456-7890
- 📧 Email: budi.santoso@chery.co.id

## 🔄 Update Website

Untuk update konten website:
1. Edit file yang diperlukan
2. Commit dan push changes
3. GitHub Pages akan otomatis rebuild
4. Website terupdate dalam 5-10 menit

---

**🎉 Selamat! Website Sales Consultant Chery Anda sudah online di GitHub Pages!** 