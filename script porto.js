document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. SMOOTH SCROLLING NAVIGASI
    // ==========================================
    const navLinks = document.querySelectorAll('header nav a, .hero a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Cek jika href merujuk ke elemen id internal (misal: #tentang)
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ==========================================
    // 2. LOGIKA KALKULATOR PERSEGI
    // ==========================================
    const hitungBtn = document.getElementById('btn-hitung');
    
    if (hitungBtn) {
        hitungBtn.addEventListener('click', () => {
            const sisiInput = document.getElementById('sisi-persegi').value;
            const sisi = parseFloat(sisiInput);
            const resultBox = document.getElementById('hasil-perhitungan');

            // Validasi input
            if (isNaN(sisi) || sisi <= 0) {
                resultBox.innerHTML = '<p style="color: red;">Masukkan panjang sisi yang valid (angka positif)!</p>';
                return;
            }

            // Hitung Luas dan Keliling
            const luas = sisi * sisi;
            const keliling = 4 * sisi;

            // Tampilkan Hasil
            resultBox.innerHTML = `
                <div style="background-color: #f0f4f8; padding: 15px; border-radius: 8px; margin-top: 10px; color: #333;">
                    <p><strong>Panjang Sisi:</strong> ${sisi} cm</p>
                    <p><strong>Luas Persegi:</strong> ${luas} cm²</p>
                    <p><strong>Keliling Persegi:</strong> ${keliling} cm</p>
                </div>
            `;
        });
    }

    // ==========================================
    // 3. TOMBOL "BACK TO TOP"
    // ==========================================
    const topBtn = document.createElement('button');
    topBtn.innerText = '↑ Top';
    topBtn.id = 'backToTop';
    topBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: none;
        padding: 10px 15px;
        background-color: #38ef7d;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        font-weight: bold;
        z-index: 1000;
    `;
    document.body.appendChild(topBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    });

    topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});
