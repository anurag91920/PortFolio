import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

function Projects() {
    const sectionRef = useRef(null);
    const sliderRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const projects = [
        {
            title: 'CozyStay',
            tag: 'Full-Stack',
            icon: '🏠',
            img: 'media/images/Pro1.png',
            desc: 'A collection of thoughtfully designed homes where comfort meets convenience. Built for seamless booking and warm hospitality experiences.',
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            link: 'https://cozy-stay-yths.onrender.com/listings',
        },
        {
            title: 'ECHOMEET',
            tag: 'WebRTC',
            icon: '🎥',
            img: 'media/images/Pro3.png',
            desc: 'A Zoom-inspired video conferencing app with real-time video, audio, screen sharing, and live chat in a clean, responsive UI.',
            tech: ['React', 'WebRTC', 'Socket.io', 'Node.js'],
            link: 'https://echo-meet-frontend-psi.vercel.app/',
        },
        {
            title: 'Prime Earth Shop',
            tag: 'eCommerce',
            icon: '🛒',
            img: 'media/images/Pro4.png',
            desc: 'An eco-inspired eCommerce platform with full product showcase, cart flow, backend API, and modern responsive design.',
            tech: ['React', 'Node.js', 'REST API', 'MongoDB'],
            link: 'https://prime-earth-shop.vercel.app/',
        },
        {
            title: 'TradeNest',
            tag: 'FinTech',
            icon: '📈',
            img: 'media/images/Pro2.png',
            desc: 'A modern trading platform for stocks, crypto, commodities, and forex — offering fast, secure, and intuitive experiences.',
            tech: ['React', 'Chart.js', 'Node.js', 'API'],
            link: 'https://trade-nests-frontend.vercel.app/',
        },
        {
            title: 'WanderVista',
            tag: 'Travel',
            icon: '🌍',
            img: 'media/images/Pro5.png',
            desc: 'A modern travel planning web app to explore destinations, find trip ideas, and get inspiration with clean UI and smooth navigation.',
            tech: ['React', 'Bootstrap', 'Node.js', 'Deploy'],
            link: 'https://wandervista-qq8u.onrender.com/',
        },
    ];

    const total = projects.length;

    /* ---------- Autoplay ---------- */
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, 5500);
        return () => clearInterval(interval);
    }, [isPaused, total]);

    /* ---------- Scroll Reveal ---------- */
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            { threshold: 0.12 }
        );

        const elements = section.querySelectorAll('.reveal');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const goTo = (index) => {
        setCurrent(((index % total) + total) % total);
    };

    const next = () => goTo(current + 1);
    const prev = () => goTo(current - 1);

    /* ---------- Touch Swipe ---------- */
    const touchStart = useRef(null);
    const handleTouchStart = (e) => {
        touchStart.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
        if (touchStart.current === null) return;
        const diff = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(diff) > 50) {
            if (diff < 0) next();
            else prev();
        }
        touchStart.current = null;
    };

    return (
        <section className='projects-section-wrapper' id='projects' ref={sectionRef}>
            <div className='proj-bg-glow proj-bg-glow-1'></div>
            <div className='proj-bg-glow proj-bg-glow-2'></div>
            <div className='proj-grid-overlay'></div>

            <div className='container proj-container'>

                {/* Title */}
                <div className='row pt-5 mt-5 mb-5 border-top border-secondary-subtle'>
                    <h1 className='text-center mt-5 section-title reveal'>
                        <span className='title-line'></span>
                        PROJECTS
                        <span className='title-line'></span>
                    </h1>
                    <p className='section-subtitle reveal'>
                        Some of my recent work &amp; experiments
                    </p>
                </div>

                {/* Slider */}
                <div
                    className='slider-shell reveal'
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    ref={sliderRef}
                >
                    <div
                        className='slider-track'
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {projects.map((project, index) => (
                            <div className='slide' key={index}>
                                <article className='project-card'>
                                    {/* Image */}
                                    <div className='project-image-wrap'>
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className='project-img'
                                            loading='lazy'
                                        />
                                        <div className='image-gradient'></div>

                                        <span className='project-tag'>
                                            <span className='tag-icon'>{project.icon}</span>
                                            {project.tag}
                                        </span>

                                        <span className='project-number'>
                                            0{index + 1} / 0{total}
                                        </span>
                                    </div>

                                    {/* Body */}
                                    <div className='project-body'>
                                        <h3 className='project-title'>{project.title}</h3>
                                        <p className='project-desc'>{project.desc}</p>

                                        <div className='project-tech'>
                                            {project.tech.map((t, i) => (
                                                <span className='tech-chip' key={i}>{t}</span>
                                            ))}
                                        </div>

                                        <div className='project-footer'>
                                            <a
                                                href={project.link}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='project-btn'
                                            >
                                                <span>View Project</span>
                                                <span className='btn-arrow'>→</span>
                                            </a>

                                            <a
                                                href={project.link}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='project-btn-icon'
                                                aria-label='Open project'
                                            >
                                                ↗
                                            </a>
                                        </div>
                                    </div>

                                    <div className='project-shine'></div>
                                </article>
                            </div>
                        ))}
                    </div>

                    {/* Arrows */}
                    <button
                        className='slider-arrow slider-arrow-prev'
                        onClick={prev}
                        aria-label='Previous project'
                    >
                        ‹
                    </button>
                    <button
                        className='slider-arrow slider-arrow-next'
                        onClick={next}
                        aria-label='Next project'
                    >
                        ›
                    </button>
                </div>

                {/* Dots */}
                <div className='slider-dots reveal'>
                    {projects.map((p, i) => (
                        <button
                            key={i}
                            className={`slider-dot ${i === current ? 'active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Go to ${p.title}`}
                        >
                            <span className='dot-fill'></span>
                        </button>
                    ))}
                </div>

                {/* Counter */}
                <div className='slider-counter reveal'>
                    <span className='counter-current'>0{current + 1}</span>
                    <span className='counter-divider'></span>
                    <span className='counter-total'>0{total}</span>
                </div>

            </div>
        </section>
    );
}

export default Projects;