# Portofolio Antoni Roozaq

Proyek ini adalah website portofolio statis (HTML/CSS/JS) yang siap dipublish menggunakan GitHub Pages.

## Cara publish ke GitHub Pages

1. Pastikan file `index.html` ada di root repository.
2. Push semua file ke GitHub.
3. Buka repository di GitHub → **Settings** → **Pages**.
4. Pada bagian **Build and deployment**:
   - **Source**: pilih **Deploy from a branch**
   - **Branch**: pilih `main` (atau `master`) dan folder **/(root)** → **Save**
5. Tunggu sampai status deployment selesai. URL GitHub Pages akan muncul di halaman yang sama.

## Catatan penting

- GitHub Pages berjalan di Linux (case-sensitive). Pastikan nama folder/file pada URL sama persis dengan nama folder/file di repository.
- File `.nojekyll` disertakan agar GitHub Pages tidak memproses aset statis menggunakan Jekyll.

