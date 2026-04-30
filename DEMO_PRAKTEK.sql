/* 
================================================================
SKENARIO PRAKTEK SQL COMPLEX QUERIES (BIG DATASET)
Dataset ini berisi lebih banyak data untuk simulasi yang realistis.
================================================================
*/

-- 1. PERSIAPAN DATA (Hapus tabel lama jika ada)
-- --------------------------------------------------------------
DROP TABLE IF EXISTS work_hours;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS sales_data;

CREATE TABLE departments (id INT PRIMARY KEY, name VARCHAR(50));
CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(50), salary DECIMAL(10,2), dept_id INT, manager_id INT, role VARCHAR(50));
CREATE TABLE projects (id INT PRIMARY KEY, name VARCHAR(50), status VARCHAR(20));
CREATE TABLE work_hours (id INT PRIMARY KEY, emp_id INT, project_id INT, hours INT);
CREATE TABLE sales_data (id INT PRIMARY KEY, year INT, qtr INT, rev DECIMAL(10,2));

-- Masukkan Data Departemen
INSERT INTO departments VALUES (1, 'IT'), (2, 'HR'), (3, 'Finance'), (4, 'Marketing'), (5, 'Sales');

-- Masukkan Data Karyawan (20+ Records)
INSERT INTO employees VALUES 
(1, 'Edisyah', 12000, 1, NULL, 'CTO'),
(2, 'Marviel', 11000, 1, 1, 'VP Engineering'),
(3, 'Andi', 8500, 1, 2, 'Senior Dev'),
(4, 'Budi', 6000, 1, 3, 'Junior Dev'),
(5, 'Cici', 6200, 1, 3, 'Junior Dev'),
(6, 'Dedi', 9500, 3, NULL, 'CFO'),
(7, 'Erna', 7500, 3, 6, 'Accountant'),
(8, 'Fani', 7200, 3, 6, 'Accountant'),
(9, 'Gani', 8000, 2, NULL, 'HR Director'),
(10, 'Hani', 5500, 2, 9, 'Recruiter'),
(11, 'Indra', 5800, 2, 9, 'Admin'),
(12, 'Joko', 9000, 4, NULL, 'Marketing Head'),
(13, 'Kiki', 6500, 4, 12, 'Designer'),
(14, 'Lala', 6700, 4, 12, 'Content Creator'),
(15, 'Maman', 10000, 5, NULL, 'Sales Director'),
(16, 'Nana', 7800, 5, 15, 'Account Manager'),
(17, 'Oki', 7900, 5, 15, 'Account Manager'),
(18, 'Pupu', 5200, 5, 16, 'Sales Exec'),
(19, 'Qori', 5300, 5, 16, 'Sales Exec'),
(20, 'Rian', 5100, 5, 17, 'Sales Exec');

-- Masukkan Data Proyek
INSERT INTO projects VALUES 
(1, 'Cloud Migration', 'Ongoing'),
(2, 'New Website', 'Completed'),
(3, 'Audit 2024', 'Ongoing'),
(4, 'Ad Campaign', 'Ongoing');

-- Masukkan Data Jam Kerja
INSERT INTO work_hours VALUES 
(1, 3, 1, 40), (2, 4, 1, 40), (3, 5, 1, 35),
(4, 7, 3, 45), (5, 8, 3, 40),
(6, 13, 4, 30), (7, 14, 4, 35),
(8, 18, 2, 10), (9, 19, 2, 12);

-- Masukkan Data Penjualan (3 Tahun)
INSERT INTO sales_data VALUES 
(1, 2022, 1, 500), (2, 2022, 2, 600), (3, 2022, 3, 550), (4, 2022, 4, 700),
(5, 2023, 1, 800), (6, 2023, 2, 850), (7, 2023, 3, 900), (8, 2023, 4, 1100),
(9, 2024, 1, 1200), (10, 2024, 2, 1350);


-- 2. QUERY PRAKTEK (Sama seperti sebelumnya tapi hasil lebih kaya)
-- --------------------------------------------------------------

-- [RANKING GAJI PER DEPARTEMEN]
SELECT name, salary, dept_id,
RANK() OVER(PARTITION BY dept_id ORDER BY salary DESC) as rank_pos
FROM employees;

-- [PEMBAGIAN KATEGORI GAJI]
SELECT name, salary, role,
    CASE
        WHEN salary < 6000 THEN 'Underpaid'
        WHEN salary > 9500 THEN 'Overpaid'
        ELSE 'Standard'
    END AS status
FROM employees;

-- [STRUKTUR ORGANISASI]
SELECT e.name AS Karyawan, m.name AS Manager, e.role
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;

-- [PENJUALAN TAHUNAN (PIVOT)]
SELECT year,
    SUM(CASE WHEN qtr=1 THEN rev ELSE 0 END) AS Q1,
    SUM(CASE WHEN qtr=2 THEN rev ELSE 0 END) AS Q2,
    SUM(CASE WHEN qtr=3 THEN rev ELSE 0 END) AS Q3,
    SUM(CASE WHEN qtr=4 THEN rev ELSE 0 END) AS Q4,
    SUM(rev) AS TOTAL_TAHUNAN
FROM sales_data 
GROUP BY year;
