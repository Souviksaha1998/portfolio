// NeuralPortfolio - Single Page Application
// Ocean Theme with Particles.js

(function () {
    'use strict';

    const { profile, education, career, skills, projects, contact } = portfolioData;

    // ============================================
    // Initialize on DOM Ready
    // ============================================
    document.addEventListener('DOMContentLoaded', () => {
        initParticles();
        initNavigation();
        initMobileMenu();
        renderAllSections();
        initScrollAnimations();
        initSmoothScroll();
        updateNavOnScroll();
        initParallax();
    });

    // ============================================
    // Particles.js Configuration
    // ============================================
    function initParticles() {
        if (typeof particlesJS === 'undefined') return;

        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: { enable: true, value_area: 800 }
                },
                color: { value: ['#00d4ff', '#5eead4', '#0891b2'] },
                shape: { type: 'circle' },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: { enable: true, speed: 2, size_min: 0.5, sync: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00d4ff',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 0.5 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    // ============================================
    // Navigation
    // ============================================
    function initNavigation() {
        const navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar?.classList.add('scrolled');
            } else {
                navbar?.classList.remove('scrolled');
            }
        });
    }

    function updateNavOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            const scrollY = window.scrollY;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // ============================================
    // Mobile Menu
    // ============================================
    function initMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle?.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks?.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle?.classList.remove('active');
                navLinks?.classList.remove('active');
            });
        });
    }

    // ============================================
    // Smooth Scroll
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // ============================================
    // Scroll Animations (Intersection Observer)
    // ============================================
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // Animate skill bars
                    if (entry.target.classList.contains('skill-item')) {
                        const progressBar = entry.target.querySelector('.skill-progress');
                        if (progressBar) {
                            setTimeout(() => {
                                progressBar.style.width = `${progressBar.dataset.level}%`;
                            }, 200);
                        }
                    }
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .timeline-item, .card, .skill-item').forEach(el => {
            observer.observe(el);
        });
    }

    // ============================================
    // Render All Sections
    // ============================================
    function renderAllSections() {
        renderHero();
        renderEducation();
        renderCareer();
        renderSkills();
        renderProjects();
        renderContact();
    }

    // ============================================
    // Hero Section
    // ============================================
    function renderHero() {
        const heroText = document.querySelector('.hero-text');
        const heroImage = document.querySelector('.hero-image');

        if (heroText) {
            heroText.innerHTML = `
                <p class="hero-greeting">${profile.greeting}</p>
                <h1 class="hero-name">${profile.name}</h1>
                <p class="hero-roles"><span class="typing-text"></span></p>
                <p class="hero-bio">${profile.bio}</p>
                <div class="hero-cta">
                    <a href="${profile.resumeLink}" class="btn btn-primary">
                        <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        Download Resume
                    </a>
                    <a href="#contact" class="btn btn-secondary">Get in Touch</a>
                </div>
            `;
            initTypingEffect();
        }

        if (heroImage) {
            heroImage.innerHTML = `
                <div class="profile-container">
                    <div class="profile-glow"></div>
                    <div class="profile-ring"></div>
                    <img src="${profile.photo}" alt="${profile.name}" class="profile-image" onerror="this.src='https://api.dicebear.com/7.x/initials/svg?seed=${profile.name}&backgroundColor=0891b2'">
                </div>
            `;
        }
    }

    // ============================================
    // Typing Effect
    // ============================================
    function initTypingEffect() {
        const typingElement = document.querySelector('.typing-text');
        if (!typingElement) return;

        const roles = profile.roles;
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typingSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        }

        type();
    }

    // ============================================
    // Education Section
    // ============================================
    function renderEducation() {
        const grid = document.querySelector('.education-grid');
        if (!grid) return;

        grid.innerHTML = education.map((edu, i) => `
            <div class="card education-card reveal stagger-${i + 1}">
                <div class="education-icon">${edu.icon}</div>
                <div class="education-content">
                    <h3 class="card-title">${edu.degree}</h3>
                    <p class="card-subtitle">${edu.institution}</p>
                    <p class="card-text">${edu.description}</p>
                    <div class="card-meta">
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <span>${edu.year}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ============================================
    // Career Section
    // ============================================
    function renderCareer() {
        const timeline = document.querySelector('.timeline');
        if (!timeline) return;

        timeline.innerHTML = career.map(job => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <span class="timeline-date">${job.period}</span>
                <div class="card timeline-card">
                    <h3 class="card-title">${job.role}</h3>
                    <p class="card-subtitle">${job.company} • ${job.location}</p>
                    <p class="card-text">${job.description}</p>
                    <div class="project-tech">
                        ${job.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ============================================
    // Skills Section
    // ============================================
    function renderSkills() {
        const container = document.querySelector('.skills-container');
        if (!container) return;

        container.innerHTML = `
            <div class="card reveal stagger-1">
                <h3 class="skill-category-title">💻 Programming Languages</h3>
                ${skills.languages.map(skill => `
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-level">${skill.level}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-level="${skill.level}"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="card reveal stagger-2">
                <h3 class="skill-category-title">🧠 ML Frameworks</h3>
                ${skills.frameworks.map(skill => `
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-level">${skill.level}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-level="${skill.level}"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="card reveal stagger-3">
                <h3 class="skill-category-title">🎯 ML Domains</h3>
                <div class="skill-tags">
                    ${skills.mlDomains.map(domain => `<span class="skill-tag">${domain}</span>`).join('')}
                </div>
            </div>
            <div class="card reveal stagger-4">
                <h3 class="skill-category-title">🛠 Tools & Platforms</h3>
                <div class="skill-tags">
                    ${skills.tools.map(tool => `<span class="skill-tag">${tool}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // ============================================
    // Projects Section
    // ============================================
    function renderProjects() {
        const grid = document.querySelector('.projects-grid');
        if (!grid) return;

        grid.innerHTML = projects.map((project, i) => `
            <div class="card project-card reveal stagger-${(i % 3) + 1}">
                <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='https://placehold.co/600x400/0d1f3c/00d4ff?text=${encodeURIComponent(project.title)}'">
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.demoLink}" class="btn btn-primary">Live Demo</a>
                        <a href="${project.codeLink}" class="btn btn-secondary" target="_blank">View Code</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ============================================
    // Contact Section
    // ============================================
    function renderContact() {
        const list = document.querySelector('.contact-list');
        const socialLinks = document.querySelector('.social-links');

        if (list) {
            list.innerHTML = `
                <div class="contact-item">
                    <div class="contact-icon">📧</div>
                    <div class="contact-text">
                        <h4>Email</h4>
                        <p><a href="mailto:${contact.email}">${contact.email}</a></p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📱</div>
                    <div class="contact-text">
                        <h4>Phone</h4>
                        <p>${contact.phone}</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📍</div>
                    <div class="contact-text">
                        <h4>Location</h4>
                        <p>${contact.location}</p>
                    </div>
                </div>
            `;
        }

        if (socialLinks) {
            socialLinks.innerHTML = `
                <a href="${contact.social.github}" class="social-link" target="_blank" title="GitHub">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="${contact.social.linkedin}" class="social-link" target="_blank" title="LinkedIn">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="${contact.social.twitter}" class="social-link" target="_blank" title="Twitter">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
            `;
        }
    }

    // ============================================
    // Parallax Scroll Effect
    // ============================================
    function initParallax() {
        const particlesCanvas = document.getElementById('particles-js');
        const profileContainer = document.querySelector('.profile-container');
        const heroSection = document.getElementById('hero');

        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;

                    // Parallax for particles (moves at 30% scroll speed)
                    if (particlesCanvas) {
                        particlesCanvas.style.transform = `translateY(${scrollY * 0.3}px)`;
                    }

                    // Parallax for profile image (subtle floating effect)
                    if (profileContainer && heroSection) {
                        const heroRect = heroSection.getBoundingClientRect();
                        if (heroRect.bottom > 0) {
                            const parallaxValue = scrollY * 0.15;
                            profileContainer.style.transform = `translateY(${parallaxValue}px)`;
                        }
                    }

                    // Add parallax to section headers
                    document.querySelectorAll('.section-title').forEach(title => {
                        const rect = title.getBoundingClientRect();
                        if (rect.top < window.innerHeight && rect.bottom > 0) {
                            const offset = (window.innerHeight - rect.top) * 0.05;
                            title.style.transform = `translateY(${-offset}px)`;
                        }
                    });

                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // ============================================
    // Cursor Glow Effect
    // ============================================
    function initCursorGlow() {
        // Create cursor glow element
        const cursorGlow = document.createElement('div');
        cursorGlow.className = 'cursor-glow';
        document.body.appendChild(cursorGlow);

        // Create inner glow for more depth
        const cursorInner = document.createElement('div');
        cursorInner.className = 'cursor-glow-inner';
        document.body.appendChild(cursorInner);

        let mouseX = 0, mouseY = 0;
        let glowX = 0, glowY = 0;
        let innerX = 0, innerY = 0;

        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth animation loop
        function animateCursor() {
            // Outer glow follows with lag
            glowX += (mouseX - glowX) * 0.08;
            glowY += (mouseY - glowY) * 0.08;
            cursorGlow.style.left = `${glowX}px`;
            cursorGlow.style.top = `${glowY}px`;

            // Inner glow follows faster
            innerX += (mouseX - innerX) * 0.15;
            innerY += (mouseY - innerY) * 0.15;
            cursorInner.style.left = `${innerX}px`;
            cursorInner.style.top = `${innerY}px`;

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Grow effect on hovering interactive elements
        document.querySelectorAll('a, button, .card, .skill-tag, .social-link').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorGlow.classList.add('cursor-hover');
                cursorInner.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                cursorGlow.classList.remove('cursor-hover');
                cursorInner.classList.remove('cursor-hover');
            });
        });

        // Hide cursor glow on mobile/touch devices
        if ('ontouchstart' in window) {
            cursorGlow.style.display = 'none';
            cursorInner.style.display = 'none';
        }
    }

})();

