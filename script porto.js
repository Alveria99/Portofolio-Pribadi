document.addEventListener("DOMContentLoaded", () => {
    // 1. Smooth Scroll untuk Navigasi & Tombol
    const navLinks = document.querySelectorAll("nav a, .btn");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // 2. Efek Animasi Fade-In saat Scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll("section, .AboutMe");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.8s ease-out";
        observer.observe(section);
    });

    // 3. Tombol "Kembali ke Atas" (Back to Top Button)
    const backToTopBtn = document.createElement("button");
    backToTopBtn.innerHTML = "↑";
    backToTopBtn.id = "backToTop";
    document.body.appendChild(backToTopBtn);

    // Styling tombol lewat JS
    Object.assign(backToTopBtn.style, {
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        backgroundColor: "darkturquoise",
        color: "#fff",
        border: "none",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer",
        display: "none",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: "1000",
        transition: "opacity 0.3s ease, transform 0.2s ease"
    });

    // Tampilkan tombol jika di-scroll ke bawah
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
            backToTopBtn.style.opacity = "1";
        } else {
            backToTopBtn.style.opacity = "0";
            setTimeout(() => {
                if (window.scrollY <= 300) backToTopBtn.style.display = "none";
            }, 300);
        }
    });

    // Fungsi klik tombol kembali ke atas
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});