const slidesData = [
    {
        id: 'title',
        type: 'hero',
        title: 'Mastering SQL Complex Queries',
        subtitle: 'Meningkatkan Kemampuan Analisis Data dengan SQL Tingkat Lanjut',
        image: 'hero.png',
        content: `
            <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--glass-border);">
                <p style="font-size: 1.1rem; color: var(--accent-primary); margin-bottom: 0.5rem; font-weight: 600; text-transform: uppercase;">Mata Kuliah: Analitik dan Virtualisasi Data</p>
                <p style="font-size: 1.1rem; margin-bottom: 1.5rem;"><span style="color: var(--text-secondary);">Dosen Pengampu:</span> Irfan Nurdiansyah, S.Kom., M.Kom.</p>
                
                <div class="highlight-box reveal reveal-1" style="margin-top: 0; padding: 1.2rem;">
                    <h4 style="color: var(--accent-secondary); margin-bottom: 0.8rem; font-size: 1.1rem;">KELOMPOK 3</h4>
                    <ul style="list-style: none; padding-left: 0; font-size: 1rem;">
                        <li style="margin-bottom: 0.5rem;"><span style="color: var(--text-secondary); display: inline-block; width: 100px; font-family: monospace;">411231179</span> Edisyah Putra Waruwu</li>
                        <li><span style="color: var(--text-secondary); display: inline-block; width: 100px; font-family: monospace;">411231222</span> Marviel David</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 'agenda',
        type: 'full',
        title: '📍 Alur Pembelajaran (Agenda)',
        content: `
            <p style="font-size: 1.25rem; text-align: center; margin-bottom: 2rem; color: var(--text-secondary);">Perjalanan kita dalam menguasai Complex Query hari ini:</p>
            <div class="text-content" style="max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                <div class="list-item highlight-box reveal reveal-1" style="margin-top: 0; padding: 1rem 1.5rem; border-left-color: #ff5f56;">
                    <div style="font-size: 1.5rem; margin-right: 1rem; color: #ff5f56; font-weight: bold;">01</div>
                    <div><strong>Pendahuluan:</strong> Konsep "Detektif Data" & Definisi SQL Kompleks.</div>
                </div>
                <div class="list-item highlight-box reveal reveal-2" style="margin-top: 0; padding: 1rem 1.5rem; border-left-color: #ffbd2e;">
                    <div style="font-size: 1.5rem; margin-right: 1rem; color: #ffbd2e; font-weight: bold;">02</div>
                    <div><strong>5 Senjata Utama:</strong> Window Functions, Subqueries, CTE, Joins, & CASE.</div>
                </div>
                <div class="list-item highlight-box reveal reveal-3" style="margin-top: 0; padding: 1rem 1.5rem; border-left-color: #27c93f;">
                    <div style="font-size: 1.5rem; margin-right: 1rem; color: #27c93f; font-weight: bold;">03</div>
                    <div><strong>Eksplorasi Lanjut:</strong> Self-Join, Set Operators, & Data Shaping.</div>
                </div>
                <div class="list-item highlight-box reveal reveal-4" style="margin-top: 0; padding: 1rem 1.5rem; border-left-color: var(--accent-primary);">
                    <div style="font-size: 1.5rem; margin-right: 1rem; color: var(--accent-primary); font-weight: bold;">04</div>
                    <div><strong>Optimasi & Kesimpulan:</strong> Strategi Performa & Rangkuman.</div>
                </div>
            </div>
        `
    },
    {
        id: 'definition',
        type: 'split',
        title: 'Apa itu Complex Query?',
        content: `
            <div class="text-content">
                <div class="highlight-box reveal reveal-1" style="margin-top: 0; border-left-color: var(--accent-secondary);">
                    <span class="important-tag">Definisi Dasar</span>
                    <p>SQL Kompleks adalah teknik manipulasi data yang melampaui perintah dasar (SELECT/WHERE tunggal).</p>
                    <p style="margin-top: 0.8rem; font-style: italic; color: var(--text-secondary); font-size: 1.1rem;">
                        <i data-lucide="search" style="vertical-align: middle; margin-right: 5px;"></i>
                        "Bayangkan Anda seorang Detektif Data; ini adalah kemampuan menghubungkan titik-titik misteri di ribuan baris data."
                    </p>
                </div>
                
                <div style="margin-top: 2rem;">
                    <span class="important-tag reveal reveal-2" style="background: var(--accent-primary);">Tujuan Utama</span>
                    <div class="list-item reveal reveal-3">
                        <i data-lucide="layers" class="list-icon"></i>
                        <div>Melakukan agregasi bertingkat.</div>
                    </div>
                    <div class="list-item reveal reveal-4">
                        <i data-lucide="bar-chart-3" class="list-icon"></i>
                        <div>Membandingkan data antar baris (time-series, ranking).</div>
                    </div>
                    <div class="list-item reveal reveal-5">
                        <i data-lucide="zap" class="list-icon"></i>
                        <div>Eksekusi langsung oleh Database Engine (Jauh lebih cepat).</div>
                    </div>
                </div>
            </div>
        `,
        visual: `
            <div class="code-block">
                <div class="code-header">
                    <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                    <span class="code-lang">Detective Logic</span>
                </div>
                <pre><code class="language-sql">SELECT category, SUM(sales)
FROM orders
GROUP BY category
HAVING SUM(sales) > (
    SELECT AVG(total) FROM yearly_sales
);</code></pre>
            </div>
        `
    },
    {
        id: 'weapons',
        type: 'full',
        title: '🛠️ 5 Senjata Utama SQL Tingkat Lanjut',
        content: `
            <p style="font-size: 1.25rem; text-align: center; margin-bottom: 2rem; color: var(--text-secondary);">Untuk menguasai Complex Query, kita wajib memahami 5 konsep inti berikut:</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; max-width: 1100px; margin: 0 auto;">
                <div class="highlight-box reveal reveal-1" style="margin-top:0">
                    <h3 style="color: var(--accent-primary)">1. Window Functions</h3>
                    <p>RANK(), OVER(), PARTITION BY</p>
                </div>
                <div class="highlight-box reveal reveal-2" style="margin-top:0">
                    <h3 style="color: var(--accent-primary)">2. Subqueries</h3>
                    <p>Nested & Correlated Subqueries</p>
                </div>
                <div class="highlight-box reveal reveal-3" style="margin-top:0">
                    <h3 style="color: var(--accent-primary)">3. CTE</h3>
                    <p>WITH ... AS (Query Sementara)</p>
                </div>
                <div class="highlight-box reveal reveal-4" style="margin-top:0">
                    <h3 style="color: var(--accent-primary)">4. Multiple Joins</h3>
                    <p>Menghubungkan data dari banyak tabel</p>
                </div>
                <div class="highlight-box reveal reveal-5" style="margin-top:0">
                    <h3 style="color: var(--accent-primary)">5. Conditional Logic</h3>
                    <p>CASE WHEN (If-Else di SQL)</p>
                </div>
            </div>
        `
    },
    {
        id: 'window-functions',
        type: 'split',
        title: '1. Window Functions',
        content: `
            <div class="text-content">
                <p class="reveal reveal-1"><strong>Konsep:</strong> Kalkulasi pada sekumpulan baris yang berhubungan tanpa menggabungkan (grouping) mereka menjadi satu baris hasil.</p>
                <div class="highlight-box reveal reveal-2">
                    <span class="important-tag">Kapan Digunakan?</span>
                    <ul style="list-style: none; padding-left: 0; margin-top: 0.5rem;">
                        <li><i data-lucide="check" size="16"></i> Membuat ranking (Top 3 produk).</li>
                        <li><i data-lucide="check" size="16"></i> Menghitung Running Total.</li>
                    </ul>
                </div>
                <p class="reveal reveal-3" style="margin-top:1.5rem"><strong>Kasus:</strong> "Siapa karyawan dengan gaji tertinggi di masing-masing departemen?"</p>
            </div>
        `,
        visual: `
            <div class="code-block">
                <div class="code-header">
                    <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                </div>
                <pre><code class="language-sql">SELECT name, salary, dept_id,
RANK() OVER(
    PARTITION BY dept_id 
    ORDER BY salary DESC
) as rank_pos
FROM employees;</code></pre>
            </div>
        `
    },
    {
        id: 'correlated-subquery',
        type: 'split',
        title: '2. Correlated Subquery',
        content: `
            <div class="text-content">
                <p class="reveal reveal-1"><strong>Konsep:</strong> Subquery yang menggunakan nilai dari outer query. Dieksekusi berulang kali untuk setiap baris.</p>
                <div class="highlight-box reveal reveal-2" style="border-left-color: #ffbd2e;">
                    <span class="important-tag">Kapan Digunakan?</span>
                    <p>Membandingkan individu dengan rata-rata kelompoknya.</p>
                </div>
                <p class="reveal reveal-3" style="margin-top:1.5rem"><strong>Kasus:</strong> "Tampilkan karyawan yang gajinya di atas rata-rata gaji di departemennya."</p>
            </div>
        `,
        visual: `
            <div class="code-block">
                <div class="code-header">
                    <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                </div>
                <pre><code class="language-sql">SELECT e1.name, e1.salary
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.dept_id = e1.dept_id
);</code></pre>
            </div>
        `
    },
    {
        id: 'cte',
        type: 'split',
        title: '3. Common Table Expressions (CTE)',
        content: `
            <div class="text-content">
                <p class="reveal reveal-1"><strong>Konsep:</strong> Hasil tabel sementara yang bisa dipanggil kembali. Sangat bagus untuk keterbacaan kode.</p>
                <div class="highlight-box reveal reveal-2">
                    <span class="important-tag">Kapan Digunakan?</span>
                    <p>Memecah query raksasa menjadi bagian-bagian kecil yang logis.</p>
                </div>
                <p class="reveal reveal-3" style="margin-top:1.5rem">"CTE adalah dokumentasi terbaik di dalam kode SQL Anda."</p>
            </div>
        `,
        visual: `
            <div class="code-block">
                <div class="code-header">
                    <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                </div>
                <pre><code class="language-sql">WITH DeptAvg AS (
    SELECT dept_id, AVG(salary) as avg_sal
    FROM employees GROUP BY dept_id
)
SELECT e.name, e.salary, d.avg_sal
FROM employees e JOIN DeptAvg d ON e.dept_id = d.dept_id;</code></pre>
            </div>
        `
    },
    {
        id: 'multiple-joins',
        type: 'split',
        title: '4. Multiple Joins & Aggregation',
        content: `
            <div class="text-content">
                <p class="reveal reveal-1"><strong>Konsep:</strong> Menghubungkan lebih dari 2 tabel secara bersamaan untuk mengambil data dari arsitektur database yang ternormalisasi.</p>
                <div class="highlight-box reveal reveal-2" style="border-left-color: #27c93f;">
                    <span class="important-tag">Kapan Digunakan?</span>
                    <p>Saat data tersebar di banyak tabel (User, Orders, Products, Shippers).</p>
                </div>
                <p class="reveal reveal-3" style="margin-top:1.5rem"><strong>Kasus:</strong> Hitung total jam kerja per departemen untuk proyek 'Ongoing'.</p>
            </div>
        `,
        visual: `
            <div class="code-block" style="font-size: 0.9rem;">
                <div class="code-header">
                    <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                </div>
                <pre><code class="language-sql">SELECT d.name, SUM(wh.hours)
FROM departments d
JOIN employees e ON d.id = e.dept_id
JOIN work_hours wh ON e.id = wh.emp_id
JOIN projects p ON wh.project_id = p.id
WHERE p.status = 'Ongoing'
GROUP BY d.name;</code></pre>
            </div>
        `
    },
    {
        id: 'conditional-logic',
        type: 'split',
        title: '5. Conditional Logic (CASE WHEN)',
        content: `
            <div class="text-content">
                <p class="reveal reveal-1"><strong>Konsep:</strong> Logika If-Else di dalam SQL. Memungkinkan pembuatan kolom baru secara dinamis.</p>
                <div class="highlight-box reveal reveal-2" style="border-left-color: var(--accent-secondary);">
                    <span class="important-tag">Kapan Digunakan?</span>
                    <p>Pelabelan data (Kategori Umur) atau Pivot data manual.</p>
                </div>
                <p class="reveal reveal-3" style="margin-top:1.5rem"><strong>Kasus:</strong> Menandai status gaji 'Underpaid' atau 'Overpaid'.</p>
            </div>
        `,
        visual: `
            <div class="code-block" style="font-size: 0.85rem;">
                <div class="code-header">
                    <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                </div>
                <pre><code class="language-sql">SELECT name, salary,
    CASE
        WHEN salary < 6000 THEN 'Underpaid'
        WHEN salary > 8500 THEN 'Overpaid'
        ELSE 'Standard'
    END AS salary_status
FROM employees;</code></pre>
            </div>
        `
    },
    {
        id: 'self-join',
        type: 'split',
        title: 'Bonus: Self-Join (Eksplorasi Internal)',
        content: `
            <div class="text-content">
                <p class="reveal reveal-1"><strong>Konsep:</strong> Menggabungkan tabel dengan dirinya sendiri. Kunci untuk data hierarkis.</p>
                <div class="highlight-box reveal reveal-2">
                    <span class="important-tag">Kasus Nyata</span>
                    <p>Mencari hubungan Karyawan ke Manajer dalam satu tabel.</p>
                </div>
            </div>
        `,
        visual: `
            <div class="code-block">
                <div class="code-header">
                    <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                </div>
                <pre><code class="language-sql">SELECT e.name AS Emp, m.name AS Boss
FROM employees e
LEFT JOIN employees m 
    ON e.manager_id = m.id;</code></pre>
            </div>
        `
    },
    {
        id: 'data-shaping',
        type: 'split',
        title: 'SQL for Visualization (Data Shaping)',
        content: `
            <div class="text-content">
                <p class="reveal reveal-1"><strong>Konsep:</strong> Menyiapkan data agar "siap saji" untuk Chart di Tableau/PowerBI.</p>
                <div class="highlight-box reveal reveal-2" style="border-left-color: var(--accent-primary);">
                    <span class="important-tag">Pivoting</span>
                    <p>Mengubah ribuan baris transaksi menjadi baris ringkasan kolom tahunan.</p>
                </div>
            </div>
        `,
        visual: `
            <div class="code-block" style="font-size: 0.85rem;">
                <div class="code-header">
                    <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                </div>
                <pre><code class="language-sql">SELECT year,
    SUM(CASE WHEN qtr=1 THEN rev ELSE 0 END) AS Q1,
    SUM(CASE WHEN qtr=2 THEN rev ELSE 0 END) AS Q2,
    SUM(CASE WHEN qtr=3 THEN rev ELSE 0 END) AS Q3,
    SUM(CASE WHEN qtr=4 THEN rev ELSE 0 END) AS Q4
FROM sales_data GROUP BY year;</code></pre>
            </div>
        `
    },
    {
        id: 'optimization',
        type: 'full',
        title: '⚡ Tips Optimasi Performa',
        content: `
            <div class="comparison-container reveal reveal-1">
                <div class="comparison-header">
                    <button class="toggle-btn active" onclick="toggleComparison('bad')">Slow Query</button>
                    <button class="toggle-btn" onclick="onclick=toggleComparison('good')">Optimized</button>
                </div>
                <div id="comparison-content" class="comparison-body">
                    <div id="bad-query" class="query-panel">
                        <div class="panel-header red">🔴 Hindari (Non-SARGable)</div>
                        <pre><code class="language-sql">SELECT * FROM orders 
WHERE YEAR(order_date) = 2023;</code></pre>
                    </div>
                    <div id="good-query" class="query-panel hidden">
                        <div class="panel-header green">🟢 Gunakan (SARGable)</div>
                        <pre><code class="language-sql">SELECT id, total FROM orders 
WHERE order_date >= '2023-01-01' 
  AND order_date < '2024-01-01';</code></pre>
                    </div>
                </div>
            </div>
            <div class="text-content reveal reveal-2" style="max-width: 800px; margin: 1.5rem auto 0; text-align: center;">
                <p>1. Gunakan <strong>INDEX</strong> | 2. Hindari <strong>SELECT *</strong> | 3. Dahulukan <strong>JOIN</strong> daripada Subquery.</p>
            </div>
        `
    },
    {
        id: 'conclusion',
        type: 'full',
        title: '🏁 Kesimpulan',
        content: `
            <div class="text-content" style="max-width: 800px; margin: 0 auto; text-align: center;">
                <p class="reveal reveal-1" style="font-size: 1.5rem; margin-bottom: 2rem; color: var(--text-secondary);">SQL Kompleks mengubah Anda dari sekadar "pengambil data" menjadi "pembangun wawasan".</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
                    <div class="highlight-box reveal reveal-2" style="margin-top: 0; padding: 1.5rem; border-top: 4px solid var(--accent-primary); border-left: none;">
                        <i data-lucide="brain" size="32" style="color: var(--accent-primary); margin-bottom: 1rem;"></i>
                        <h4>Mindset Analitis</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">SQL adalah alat untuk memecahkan misteri bisnis.</p>
                    </div>
                    <div class="highlight-box reveal reveal-3" style="margin-top: 0; padding: 1.5rem; border-top: 4px solid var(--accent-secondary); border-left: none;">
                        <i data-lucide="eye" size="32" style="color: var(--accent-secondary); margin-bottom: 1rem;"></i>
                        <h4>Kekuatan Visual</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Data yang rapi menghasilkan grafik yang jujur.</p>
                    </div>
                    <div class="highlight-box reveal reveal-4" style="margin-top: 0; padding: 1.5rem; border-top: 4px solid #27c93f; border-left: none;">
                        <i data-lucide="zap" size="32" style="color: #27c93f; margin-bottom: 1rem;"></i>
                        <h4>Efisiensi</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">Query efisien menghemat waktu dan biaya.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 'qa',
        type: 'hero',
        title: 'Tanya Jawab (Q&A)',
        subtitle: 'Terima Kasih!',
        image: 'dashboard.png',
        content: `
            <div class="reveal reveal-1" style="margin-top: 2rem;">
                <p style="font-size: 1.5rem; font-style: italic; color: var(--accent-primary); margin-bottom: 1rem;">"Siap untuk menjadi Detektif Data?"</p>
                <p style="font-size: 1.2rem; color: var(--text-secondary);">Silakan bertanya jika ada teknik query yang ingin dieksplorasi lebih lanjut.</p>
            </div>
        `
    }
];

let currentSlide = 0;
const container = document.getElementById('slides-container');
const counter = document.getElementById('slide-counter');
const progressBar = document.getElementById('progress-bar');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function renderSlides() {
    container.innerHTML = slidesData.map((slide, index) => {
        let contentHtml = '';
        
        if (slide.type === 'hero') {
            contentHtml = `
                <div class="slide ${index === 0 ? 'active' : ''}" id="slide-${index}">
                    <div class="content-grid" style="grid-template-columns: 1fr 1.2fr">
                        <div class="reveal reveal-1">
                            <h1>${slide.title}</h1>
                            <p style="font-size: 1.5rem; color: var(--text-secondary); margin-bottom: 1.5rem;">${slide.subtitle}</p>
                            ${slide.content || ''}
                        </div>
                        <div class="visual-container reveal reveal-2" style="text-align: right;">
                            <img src="${slide.image}" class="visual-image" alt="Visual" style="max-width: 90%; border-radius: 2rem; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
                        </div>
                    </div>
                </div>
            `;
        } else if (slide.type === 'split') {
            contentHtml = `
                <div class="slide" id="slide-${index}">
                    <h2 class="reveal reveal-1">${slide.title}</h2>
                    <div class="content-grid" style="grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;">
                        <div class="reveal reveal-2">
                            ${slide.content}
                        </div>
                        <div class="visual-side reveal reveal-3">
                            <div class="code-container">
                                ${slide.visual}
                                <button class="copy-btn" onclick="copyCode(this)" title="Salin Kode"><i data-lucide="copy"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            contentHtml = `
                <div class="slide" id="slide-${index}">
                    <h2 class="reveal reveal-1" style="text-align: center; margin-bottom: 2rem;">${slide.title}</h2>
                    <div class="reveal reveal-2">
                        ${slide.content}
                    </div>
                </div>
            `;
        }
        return contentHtml;
    }).join('');
    
    renderMenu();
    lucide.createIcons();
    if (window.Prism) Prism.highlightAll();
}

// Menu Logic
const menuOverlay = document.getElementById('slide-menu');
const menuGrid = document.getElementById('menu-grid');
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu');

function renderMenu() {
    menuGrid.innerHTML = slidesData.map((slide, index) => `
        <div class="menu-item" onclick="goToSlide(${index})">
            <span class="slide-num">Slide ${index + 1}</span>
            <h3>${slide.title.replace(/<[^>]*>/g, '')}</h3>
        </div>
    `).join('');
}

function goToSlide(index) {
    currentSlide = index;
    updateSlide();
    toggleMenu(false);
}

function toggleMenu(show) {
    menuOverlay.classList.toggle('active', show);
}

menuBtn.addEventListener('click', () => toggleMenu(true));
closeMenuBtn.addEventListener('click', () => toggleMenu(false));
menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) toggleMenu(false);
});

// Navigation Logic
function updateSlide() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        if (index === currentSlide) {
            slide.classList.add('active');
        } else if (index < currentSlide) {
            slide.classList.add('prev');
        }
    });

    counter.innerText = `${currentSlide + 1} / ${slidesData.length}`;
    progressBar.style.width = `${((currentSlide + 1) / slidesData.length) * 100}%`;
}

// Clickable Progress Bar
document.querySelector('.progress-container').addEventListener('click', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const targetSlide = Math.floor(percentage * slidesData.length);
    goToSlide(Math.min(targetSlide, slidesData.length - 1));
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < slidesData.length - 1) {
        currentSlide++;
        updateSlide();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
});

// Click to Advance Logic
container.addEventListener('click', (e) => {
    if (e.target.closest('button, code, .menu-item, .toggle-btn')) return;
    if (currentSlide < slidesData.length - 1) {
        currentSlide++;
        updateSlide();
    }
});

// Fullscreen Logic
const fullscreenBtn = document.getElementById('fullscreen-btn');
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullscreenBtn.querySelector('i').setAttribute('data-lucide', 'minimize');
    } else {
        document.exitFullscreen();
        fullscreenBtn.querySelector('i').setAttribute('data-lucide', 'maximize');
    }
    lucide.createIcons();
}
fullscreenBtn.addEventListener('click', toggleFullscreen);

// Touch Swipe Logic
let touchStartX = 0;
let touchEndX = 0;
container.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
container.addEventListener('touchend', e => { touchEndX = e.changedTouches[0].screenX; handleSwipe(); }, { passive: true });

function handleSwipe() {
    const threshold = 50;
    if (touchStartX - touchEndX > threshold) nextBtn.click();
    else if (touchEndX - touchStartX > threshold) prevBtn.click();
}

// Keyboard Controls
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'Escape') toggleMenu(false);
    if (e.key.toLowerCase() === 'm') toggleMenu(true);
    if (e.key.toLowerCase() === 'f') toggleFullscreen();
});

// Copy Code Logic
async function copyCode(btn) {
    const code = btn.parentElement.querySelector('code').innerText;
    try {
        await navigator.clipboard.writeText(code);
        const icon = btn.querySelector('i');
        icon.setAttribute('data-lucide', 'check');
        btn.classList.add('success');
        lucide.createIcons();
        setTimeout(() => {
            icon.setAttribute('data-lucide', 'copy');
            btn.classList.remove('success');
            lucide.createIcons();
        }, 2000);
    } catch (err) { console.error('Gagal menyalin:', err); }
}

// Comparison Toggle Logic
function toggleComparison(type) {
    const bad = document.getElementById('bad-query');
    const good = document.getElementById('good-query');
    const btns = document.querySelectorAll('.toggle-btn');
    if (type === 'bad') {
        bad.classList.remove('hidden'); good.classList.add('hidden');
        btns[0].classList.add('active'); btns[1].classList.remove('active');
    } else {
        bad.classList.add('hidden'); good.classList.remove('hidden');
        btns[0].classList.remove('active'); btns[1].classList.add('active');
    }
    if (window.Prism) Prism.highlightAll();
}

// Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeBtn.querySelector('i').setAttribute('data-lucide', isLight ? 'sun' : 'moon');
    lucide.createIcons();
});

// Print Logic
document.getElementById('print-btn').addEventListener('click', () => { window.print(); });

// Initialize
renderSlides();
updateSlide();
