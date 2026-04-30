# 📊 PANDUAN ANALISIS HASIL QUERY

Gunakan panduan ini untuk menjelaskan apa yang terjadi di balik layar saat Anda menjalankan query di file `DEMO_PRAKTEK.sql`.

---

## 1. Window Functions (Ranking Gaji)
*   **Maksud Hasil:** Menentukan siapa yang paling senior/bergaji tinggi di setiap departemen tanpa menghilangkan data individu.
*   **Yang Harus Ditonjolkan:** Perhatikan kolom `rank_pos`. Angka ranking akan kembali ke **1** setiap kali sistem berpindah ke departemen baru.
*   **Pesan untuk Audiens:** "Teknik ini sangat kuat karena kita bisa melakukan perhitungan kelompok (per departemen) tanpa harus kehilangan detail data per orang (baris)."

## 2. Correlated Subquery (Gaji vs Rata-rata)
*   **Maksud Hasil:** Menemukan individu yang performanya (atau gajinya) menonjol dibandingkan rata-rata timnya sendiri.
*   **Yang Harus Ditonjolkan:** Hasilnya hanya akan menampilkan orang-orang 'spesial' yang gajinya di atas rata-rata.
*   **Pesan untuk Audiens:** "Subquery ini bekerja secara dinamis. Ia menghitung rata-rata departemen A, lalu mengecek orang-orang di departemen A. Kemudian ia beralih ke departemen B secara otomatis."

## 3. CTE (Readability)
*   **Maksud Hasil:** Hasilnya sama dengan join biasa, namun kodenya jauh lebih bersih.
*   **Yang Harus Ditonjolkan:** Jelaskan bagian `WITH DeptAvg AS (...)`. Katakan bahwa itu adalah 'tabel bayangan' yang kita buat sebentar hanya untuk query ini.
*   **Pesan untuk Audiens:** "CTE bukan soal kecepatan, tapi soal kejelasan. Kode ini jauh lebih mudah dipahami oleh tim lain yang akan membaca pekerjaan kita nantinya."

## 4. Multiple Joins (Cross-Table Analysis)
*   **Maksud Hasil:** Menggabungkan kepingan data dari Departemen, Karyawan, Proyek, dan Jam Kerja.
*   **Yang Harus Ditonjolkan:** Hasil akhirnya hanya menampilkan departemen yang memiliki proyek aktif ('Ongoing').
*   **Pesan untuk Audiens:** "Database profesional biasanya memecah data ke banyak tabel (Normalisasi). Kemampuan menggabungkan 4 tabel sekaligus adalah bukti kemahiran kita dalam menguasai SQL Kompleks."

## 5. CASE WHEN (Status Gaji)
*   **Maksud Hasil:** Memberikan label deskriptif pada angka-angka mentah.
*   **Yang Harus Ditonjolkan:** Kolom `salary_status` berisi teks 'Underpaid', 'Overpaid', atau 'Standard'.
*   **Pesan untuk Audiens:** "Kita memberikan konteks pada data. Angka 5000 tidak berarti apa-apa sampai kita memberinya label 'Underpaid' menggunakan logika CASE ini."

## 6. Self-Join (Hierarki)
*   **Maksud Hasil:** Menemukan relasi internal (Atasan vs Bawahan).
*   **Yang Harus Ditonjolkan:** Lihat baris 'Edisyah'. Manager-nya bernilai `NULL` karena di dataset ini, Edisyah adalah pimpinan tertinggi (CTO) yang tidak melapor ke siapa pun.
*   **Pesan untuk Audiens:** "Self-join adalah teknik 'ajaib' di mana tabel bercermin pada dirinya sendiri untuk menemukan hubungan antar baris."

## 7. Data Shaping (Pivot Laporan)
*   **Maksud Hasil:** Mentransformasi data vertikal menjadi horizontal.
*   **Yang Harus Ditonjolkan:** Lihat perbandingan antara tabel asli `sales_data` yang memanjang ke bawah dengan hasil query ini yang melebar ke samping (Q1, Q2, Q3, Q4).
*   **Pesan untuk Audiens:** "Format seperti ini sangat disukai oleh pimpinan karena mereka bisa melihat perbandingan kuartal per tahun dalam satu baris pandangan saja."

---
*Dibuat oleh AI Assistant untuk Kelompok 3.*
