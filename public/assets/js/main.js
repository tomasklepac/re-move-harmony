// assets/js/main.js
const burger = document.getElementById('burger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

if (burger && navMenu) {
    burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burger.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            burger.classList.remove('active');
        });
    });
}

window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-about');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    const applyFilter = (category) => {
        serviceCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const match = category === 'all' || cardCategory === category;
            card.classList.toggle('hidden', !match);
        });
    };

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilter(btn.dataset.filter);
        });
    });

    const galleryCards = Array.from(document.querySelectorAll('.gallery-card'));
    if (galleryCards.length) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img class="lightbox-img" src="" alt="">
                <div class="lightbox-caption"></div>
                <div class="lightbox-nav">
                    <button class="lightbox-prev" aria-label="Predchozi">&lt;</button>
                    <button class="lightbox-next" aria-label="Dalsi">&gt;</button>
                </div>
                <button class="lightbox-close" aria-label="Zavrit">X</button>
            </div>
        `;
        document.body.appendChild(lightbox);

        const lbImg = lightbox.querySelector('.lightbox-img');
        const lbCaption = lightbox.querySelector('.lightbox-caption');
        const btnPrev = lightbox.querySelector('.lightbox-prev');
        const btnNext = lightbox.querySelector('.lightbox-next');
        const btnClose = lightbox.querySelector('.lightbox-close');
        let currentIndex = 0;

        const items = galleryCards.map(card => {
            return {
                src: card.querySelector('img')?.src || '',
                alt: card.querySelector('img')?.alt || '',
                caption: card.querySelector('figcaption')?.textContent.trim() || ''
            };
        });

        const show = (index) => {
            currentIndex = (index + items.length) % items.length;
            const item = items[currentIndex];
            lbImg.src = item.src;
            lbImg.alt = item.alt;
            lbCaption.textContent = item.caption;
            lightbox.classList.add('active');
            document.body.classList.add('lightbox-open');
        };

        const close = () => {
            lightbox.classList.remove('active');
            document.body.classList.remove('lightbox-open');
        };

        galleryCards.forEach((card, index) => {
            card.addEventListener('click', () => show(index));
        });

        btnPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            show(currentIndex - 1);
        });

        btnNext.addEventListener('click', (e) => {
            e.stopPropagation();
            show(currentIndex + 1);
        });

        btnClose.addEventListener('click', close);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) close();
        });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowLeft') show(currentIndex - 1);
            if (e.key === 'ArrowRight') show(currentIndex + 1);
        });

        let touchStartX = null;
        let touchStartY = null;

        const handleTouchStart = (e) => {
            const touch = e.touches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
        };

        const handleTouchEnd = (e) => {
            if (touchStartX === null || touchStartY === null) return;
            const touch = e.changedTouches[0];
            const dx = touch.clientX - touchStartX;
            const dy = touch.clientY - touchStartY;
            touchStartX = null;
            touchStartY = null;
            if (Math.abs(dx) < 30 || Math.abs(dx) < Math.abs(dy)) return;
            if (dx > 0) {
                show(currentIndex - 1);
            } else {
                show(currentIndex + 1);
            }
        };

        lightbox.addEventListener('touchstart', handleTouchStart, { passive: true });
        lightbox.addEventListener('touchend', handleTouchEnd);
    }
});
