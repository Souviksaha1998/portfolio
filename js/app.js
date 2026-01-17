// NeuralPortfolio - Main Application Logic
(function () {
    'use strict';

    const { profile, education, career, skills, projects, contact, navLinks } = portfolioData;

    // DOM Ready Handler
    document.addEventListener('DOMContentLoaded', () => {
        initNavigation();
        initMobileMenu();
        renderPageContent();
        // Delay scroll animations to ensure content is rendered
        setTimeout(initScrollAnimations, 100);
    });

    // Navigation
    function initNavigation() {
        const navLinksContainer = document.querySelector('.nav-links');

        if (navLinksContainer) {
            navLinksContainer.innerHTML = navLinks.map(link =>
                `<a href="${link.href}" class="nav-link ${isCurrentPage(link.href) ? 'active' : ''}">${link.name}</a>`
            ).join('');
        }
    }

    function isCurrentPage(href) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        return currentPage === href;
    }

    // Mobile Menu
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

    // Scroll Animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    if (entry.target.classList.contains('skill-item')) {
                        const progressBar = entry.target.querySelector('.skill-progress');
                        if (progressBar) {
                            const level = progressBar.dataset.level;
                            progressBar.style.width = `${level}%`;
                        }
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in, .timeline-item, .card, .skill-item').forEach(el => {
            observer.observe(el);
        });
    }

    // Typing Effect
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

    // Page Content Rendering
    function renderPageContent() {
        const page = window.location.pathname.split('/').pop() || 'index.html';

        switch (page) {
            case 'index.html':
            case '':
                renderHero();
                break;
            case 'education.html':
                renderEducation();
                break;
            case 'career.html':
                renderCareer();
                break;
            case 'skills.html':
                renderSkills();
                break;
            case 'projects.html':
                renderProjects();
                break;
            case 'contact.html':
                renderContact();
                break;
        }
    }

    // Hero Section
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
                    <a href="contact.html" class="btn btn-secondary">Get in Touch</a>
                </div>
            `;
            initTypingEffect();
        }

        if (heroImage) {
            heroImage.innerHTML = `
                <div class="profile-container">
                    <div class="profile-glow"></div>
                    <div class="profile-ring"></div>
                    <img src="${profile.photo}" alt="${profile.name}" class="profile-image" onerror="this.src='https://api.dicebear.com/7.x/initials/svg?seed=${profile.name}&backgroundColor=6c5ce7'">
                </div>
            `;
        }
    }

    // Education Section
    function renderEducation() {
        const grid = document.querySelector('.education-grid');
        if (!grid) return;

        grid.innerHTML = education.map(edu => `
            <div class="card education-card fade-in">
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

    // Career Section
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

    // Skills Section
    function renderSkills() {
        const container = document.querySelector('.skills-container');
        if (!container) return;

        container.innerHTML = `
            <div class="card skill-category">
                <h3 class="skill-category-title">💻 Programming Languages</h3>
                ${skills.languages.map(skill => `
                    <div class="skill-item fade-in">
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
            <div class="card skill-category">
                <h3 class="skill-category-title">🧠 ML Frameworks</h3>
                ${skills.frameworks.map(skill => `
                    <div class="skill-item fade-in">
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
            <div class="card skill-category">
                <h3 class="skill-category-title">🎯 ML Domains</h3>
                <div class="skill-tags">
                    ${skills.mlDomains.map(domain => `<span class="skill-tag">${domain}</span>`).join('')}
                </div>
            </div>
            <div class="card skill-category">
                <h3 class="skill-category-title">🛠 Tools & Platforms</h3>
                <div class="skill-tags">
                    ${skills.tools.map(tool => `<span class="skill-tag">${tool}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // Projects Section
    function renderProjects() {
        const grid = document.querySelector('.projects-grid');
        if (!grid) return;

        grid.innerHTML = projects.map(project => `
            <div class="card project-card fade-in">
                <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='https://placehold.co/600x400/1a1a25/6c5ce7?text=${encodeURIComponent(project.title)}'">
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

    // Contact Section
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
})();
