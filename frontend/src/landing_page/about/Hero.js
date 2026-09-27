/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
    const sectionRef = useRef(null);
    const imageWrapRef = useRef(null);
    const typingRef = useRef(null);

    const words = ['MERN Stack Developer', 'Full-Stack Engineer', 'Problem Solver'];

    /* ---------- Typing Animation ---------- */
    useEffect(() => {
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId;

        const type = () => {
            const currentWord = words[wordIndex];
            const currentText = currentWord.substring(0, charIndex);

            if (typingRef.current) {
                typingRef.current.textContent = currentText;
            }

            let typeSpeed = isDeleting ? 40 : 100;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 1800;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 400;
            } else {
                charIndex += isDeleting ? -1 : 1;
            }

            timeoutId = setTimeout(type, typeSpeed);
        };

        timeoutId = setTimeout(type, 500);
        return () => clearTimeout(timeoutId);
    }, []);

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

    /* ---------- 3D Tilt on Image ---------- */
    useEffect(() => {
        const wrap = imageWrapRef.current;
        if (!wrap) return;

        const handleMove = (e) => {
            const rect = wrap.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateY = ((x - centerX) / centerX) * 10;
            const rotateX = ((centerY - y) / centerY) * 10;

            wrap.style.setProperty('--rx', `${rotateX}deg`);
            wrap.style.setProperty('--ry', `${rotateY}deg`);
        };

        const handleLeave = () => {
            wrap.style.setProperty('--rx', '0deg');
            wrap.style.setProperty('--ry', '0deg');
        };

        wrap.addEventListener('mousemove', handleMove);
        wrap.addEventListener('mouseleave', handleLeave);

        return () => {
            wrap.removeEventListener('mousemove', handleMove);
            wrap.removeEventListener('mouseleave', handleLeave);
        };
    }, []);

    return (
        <section className='about-section-wrapper' id='about' ref={sectionRef}>
            <div className='about-bg-glow about-bg-glow-1'></div>
            <div className='about-bg-glow about-bg-glow-2'></div>
            <div className='about-grid-overlay'></div>

            <div className='container about-container'>

                {/* Section Label */}
                <div className='row pt-5 mt-5 mb-4 border-top border-secondary-subtle'>
                    <h1 className='text-center mt-5 section-title reveal'>
                        <span className='title-line'></span>
                        ABOUT ME
                        <span className='title-line'></span>
                    </h1>
                    <p className='section-subtitle reveal'>
                        Get to know me better
                    </p>
                </div>

                <div className='row align-items-center g-4 g-lg-5'>

                    {/* Left - Image + Name */}
                    <div className='col-12 col-lg-5 text-center'>
                        <div className='about-image-stage reveal' ref={imageWrapRef}>
                            <div className='about-ring-outer'></div>
                            <div className='about-ring-inner'></div>
                            <div className='about-glow'></div>

                            <div className='about-image-frame'>
                                <img
                                    src='media/images/anuragimg.jpg'
                                    alt='Anurag Chaurasiya'
                                    className='about-image'
                                />
                                <div className='about-shine'></div>
                            </div>

                            {/* Status dot */}
                            <div className='status-pill'>
                                <span className='status-dot'></span>
                                Available for work
                            </div>
                        </div>

                        <h4 className='about-name reveal'>Anurag Chaurasiya</h4>

                        <div className='about-role reveal'>
                            <span className='role-prefix'>&lt;/&gt;</span>
                            <span className='typewriter-text' ref={typingRef}></span>
                            <span className='cursor'>|</span>
                        </div>

                        <div className='about-socials reveal'>
                            <a href='https://github.com/anurag91920' aria-label='GitHub' className='social-btn'>
                                <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
                                    <path d='M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.05.78 2.13v3.16c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z' />
                                </svg>
                            </a>
                            <a href='https://anurag-chaurasiya-32a2442a5/' aria-label='LinkedIn' className='social-btn'>
                                <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
                                    <path d='M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z' />
                                </svg>
                            </a>
                            <a href='#twitter' aria-label='Twitter' className='social-btn'>
                                <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
                                    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right - Bio */}
                    <div className='col-12 col-lg-7'>
                        <div className='about-bio'>

                            <div className='bio-badge reveal'>
                                <span className='badge-dot'></span>
                                Full-Stack Developer
                            </div>

                            <h2 className='about-heading reveal'>
                                Turning ideas into{' '}
                                <span className='gradient-text'>real products</span>
                            </h2>

                            <p className='about-text reveal'>
                                I'm a passionate <strong>MERN Stack Developer</strong> with hands-on
                                experience building dynamic, responsive, and scalable web applications.
                                Skilled in <strong>MongoDB, Express.js, React.js,</strong> and{' '}
                                <strong>Node.js</strong>, I bring ideas to life with clean, efficient code.
                            </p>

                            <p className='about-text reveal'>
                                I specialize in crafting full-stack solutions that deliver seamless
                                user experiences and robust back-end functionality — from RESTful APIs
                                and database design to intuitive, modern UIs.
                            </p>

                            {/* Feature Highlights */}
                            <div className='about-features reveal'>
                                <div className='feature-card'>
                                    <div className='feature-icon'>⚡</div>
                                    <div className='feature-text'>
                                        <h4>Fast &amp; Scalable</h4>
                                        <p>Performance-first builds</p>
                                    </div>
                                </div>
                                <div className='feature-card'>
                                    <div className='feature-icon'>🎨</div>
                                    <div className='feature-text'>
                                        <h4>Modern UI/UX</h4>
                                        <p>Pixel-perfect interfaces</p>
                                    </div>
                                </div>
                                <div className='feature-card'>
                                    <div className='feature-icon'>🧩</div>
                                    <div className='feature-text'>
                                        <h4>Problem Solver</h4>
                                        <p>Complex → simple</p>
                                    </div>
                                </div>
                                <div className='feature-card'>
                                    <div className='feature-icon'>🚀</div>
                                    <div className='feature-text'>
                                        <h4>Always Learning</h4>
                                        <p>Updated with tech</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;