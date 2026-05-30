        // DATA: PORTFOLIO ITEMS
        const portfolioData = [
            {
                id: 1,
                type: 'video',
                title: 'FYP Content: Rumah Murah Malang',
                platform: 'TikTok',
                views: '219K+',
                date: 'Desember 2025',
                thumb: 'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
                videoUrl: 'video Konten/eztate.id 2.mp4'
            },
            {
                id: 2,
                type: 'video',
                title: 'FYP Content: Rumah Murah Malang',
                platform: 'Instagram',
                views: '85K+',
                date: 'Oktober 2024',
                thumb: 'https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so',
                videoUrl: 'video Konten/eztate.id 1.mp4'
            },
            {
                id: 3,
                type: 'photo',
                title: 'Poster Kenaikan Yesus Kristus',
                platform: 'Instagram',
                views: '12K Likes',
                date: 'Maret 2026',
                thumb: 'Poster/Jumat agung.png'
            },
            {
                id: 4,
                type: 'photo',
                title: 'Poster Hari Raya',
                platform: 'Instagram',
                views: '100',
                date: 'Februari 2025',
                thumb: 'Poster/eid fitr.png',
                
            },
            {
                id: 5,
                type: 'video',
                title: 'FYP Content: Rumah Murah Malang',
                platform: 'TikTok',
                views: '45K+',
                date: 'Desember 2025',
                thumb: 'https://fastly.picsum.photos/id/60/1920/1200.jpg?hmac=fAMNjl4E_sG_WNUjdU39Kald5QAHQMh-_-TsIbbeDNI',
                videoUrl: 'video Konten/review.rumahmalang 1.mp4'
            },
            {
                id: 6,
                type: 'photo',
                title: 'Poster Ra Kartini',
                platform: 'Instagram',
                views: '5K Shares',
                date: 'November 2024',
                thumb: 'Poster/RA kartini.png'
            },
            {
                id: 7,
                type: 'photo',
                title: 'Poster Typography',
                platform: 'Instagram',
                views: '5K Shares',
                date: 'February 2026',
                thumb: 'Poster/waguri.png'
            },
            {
                id: 8,
                type: 'video',
                title: 'FYP Content: Rumah Murah Malang',
                platform: 'TikTok',
                views: '5K Shares',
                date: 'November 2024',
                thumb: 'https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA',
                videoUrl: 'video Konten/review.rumahmalang.mp4'
            }
        ];

        // STATE MANAGEMENT
        let currentTheme = 'dark';
        let currentModalIndex = 0;
        let filteredItems = [...portfolioData];

        // INITIALIZATION
        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            initTypewriter();
            initReveal();
            initStatsCounter();
            renderPortfolio('all');
            initCursor();
            initMobileMenu();
            initScrollEffects();
        });

        // THEME TOGGLE
        const themeBtn = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        
        themeBtn.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', currentTheme);
            themeIcon.setAttribute('data-lucide', currentTheme === 'dark' ? 'moon' : 'sun');
            lucide.createIcons();
        });

        // TYPEWRITER EFFECT
        function initTypewriter() {
            const words = ["Digital Marketing Specialist", "Content Creator", "Data-Driven Marketer"];
            let wordIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            const target = document.getElementById('typewriter');

            function type() {
                const currentWord = words[wordIndex];
                if (isDeleting) {
                    target.textContent = currentWord.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    target.textContent = currentWord.substring(0, charIndex + 1);
                    charIndex++;
                }

                let typeSpeed = isDeleting ? 50 : 100;

                if (!isDeleting && charIndex === currentWord.length) {
                    isDeleting = true;
                    typeSpeed = 2000; // Pause at end
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                    typeSpeed = 500;
                }

                setTimeout(type, typeSpeed);
            }
            type();
        }

        // SCROLL REVEAL
        function initReveal() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        }

        // STATS COUNTER
        function initStatsCounter() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = parseInt(entry.target.dataset.target);
                        animateValue(entry.target, 0, target, 2000);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
        }

        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    obj.innerHTML = end + (obj.dataset.target.includes('+') ? '+' : (obj.parentElement.querySelector('.stat-label').textContent.includes('%') ? '%' : '+'));
                    // Fix formatting manually
                    if (obj.dataset.target == "10") obj.innerHTML = "10+";
                    if (obj.dataset.target == "400") obj.innerHTML = "400K+";
                    if (obj.dataset.target == "3") obj.innerHTML = "3";
                    if (obj.dataset.target == "85") obj.innerHTML = "85%+";
                }
            };
            window.requestAnimationFrame(step);
        }

        // PORTFOLIO RENDER & FILTER
        const grid = document.getElementById('portfolio-grid');
        const filterBtns = document.querySelectorAll('.filter-btn');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderPortfolio(btn.dataset.filter);
            });
        });

        function renderPortfolio(filter) {
            filteredItems = filter === 'all' 
                ? [...portfolioData] 
                : portfolioData.filter(item => item.type === filter);

            grid.style.opacity = '0';
            
            setTimeout(() => {
                grid.innerHTML = filteredItems.map((item, index) => `
                    <div class="work-card reveal visible" onclick="openLightbox(${index})">
                        <div class="work-thumb-box">
                            <img src="${item.thumb}" alt="${item.title}" class="work-thumb" loading="lazy" width="400" height="225">
                            <div class="work-overlay">
                                ${item.type === 'video' ? '<div class="play-icon"><i data-lucide="play" fill="white"></i></div>' : '<div class="play-icon"><i data-lucide="maximize-2"></i></div>'}
                            </div>
                            ${item.type === 'data' ? '<span class="report-badge">EXCEL</span>' : ''}
                        </div>
                        <div class="work-info">
                            <span class="work-type">${item.platform}</span>
                            <h3 class="work-title">${item.title}</h3>
                        </div>
                    </div>
                `).join('');
                lucide.createIcons();
                grid.style.opacity = '1';
            }, 300);
        }

        // LIGHTBOX
        const modal = document.getElementById('lightbox');
        const modalMedia = document.getElementById('modal-media');
        const modalTitle = document.getElementById('modal-title');
        const modalPlatform = document.getElementById('modal-platform');
        const modalViews = document.getElementById('modal-views');
        const modalDate = document.getElementById('modal-date');
        const modalCounter = document.getElementById('modal-counter');

        function openLightbox(index) {
            currentModalIndex = index;
            updateModal();
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function updateModal() {
            const item = filteredItems[currentModalIndex];
            modalMedia.innerHTML = '';
            
            if (item.type === 'video') {
                modalMedia.innerHTML = `<video controls autoplay><source src="${item.videoUrl}" type="video/mp4"></video>`;
            } else {
                modalMedia.innerHTML = `<img src="${item.thumb}" alt="${item.title}">`;
            }

            modalTitle.textContent = item.title;
            modalPlatform.textContent = item.platform;
            modalViews.textContent = item.views;
            modalDate.textContent = item.date;
            modalCounter.textContent = `${currentModalIndex + 1} / ${filteredItems.length}`;
            lucide.createIcons();
        }

        document.getElementById('modal-close').addEventListener('click', closeModal);
        document.getElementById('modal-prev').addEventListener('click', (e) => {
            e.stopPropagation();
            currentModalIndex = (currentModalIndex - 1 + filteredItems.length) % filteredItems.length;
            updateModal();
        });
        document.getElementById('modal-next').addEventListener('click', (e) => {
            e.stopPropagation();
            currentModalIndex = (currentModalIndex + 1) % filteredItems.length;
            updateModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        function closeModal() {
            modal.classList.remove('open');
            modalMedia.innerHTML = ''; // Stop video
            document.body.style.overflow = '';
        }

        // Keyboard Support
        document.addEventListener('keydown', (e) => {
            if (!modal.classList.contains('open')) return;
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') document.getElementById('modal-prev').click();
            if (e.key === 'ArrowRight') document.getElementById('modal-next').click();
        });

        // Swipe Gesture
        let touchStartX = 0;
        modal.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX);
        modal.addEventListener('touchend', e => {
            const touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) document.getElementById('modal-next').click();
            if (touchEndX - touchStartX > 50) document.getElementById('modal-prev').click();
        });

        // EXPERIENCE TOGGLE
        function toggleExp(header) {
            const item = header.parentElement;
            const wasActive = item.classList.contains('active');
            
            document.querySelectorAll('.exp-item').forEach(i => i.classList.remove('active'));
            if (!wasActive) item.classList.add('active');
        }

        // CURSOR FOLLOWER
        function initCursor() {
            const cursor = document.getElementById('cursor');
            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            function animate() {
                let dx = mouseX - cursorX;
                let dy = mouseY - cursorY;
                cursorX += dx * 0.15;
                cursorY += dy * 0.15;
                cursor.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px)`;
                requestAnimationFrame(animate);
            }
            animate();
        }

        // MOBILE MENU
        function initMobileMenu() {
            const toggle = document.getElementById('mobile-toggle');
            const close = document.getElementById('mobile-close');
            const menu = document.getElementById('mobile-menu');
            const links = document.querySelectorAll('.mobile-link');

            toggle.addEventListener('click', () => menu.classList.add('open'));
            close.addEventListener('click', () => menu.classList.remove('open'));
            links.forEach(link => link.addEventListener('click', () => menu.classList.remove('open')));
        }

        // SCROLL EFFECTS
        function initScrollEffects() {
            const navbar = document.getElementById('navbar');
            const navLinks = document.querySelectorAll('.nav-link');

            window.addEventListener('scroll', () => {
                // Navbar border
                if (window.scrollY > 80) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }

                // Active Link
                let current = '';
                document.querySelectorAll('section').forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (pageYOffset >= sectionTop - 150) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === current) {
                        link.classList.add('active');
                    }
                });
            });
        }
