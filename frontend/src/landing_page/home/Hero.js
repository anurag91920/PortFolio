/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
    const typingRef = useRef(null);
    const imageWrapRef = useRef(null);
    const words = ['MERN Stack Developer', 'Web Designer', 'Problem Solver'];

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

    /* ---------- 3D Tilt on Mouse Move ---------- */
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
        <section className='hero-section' id='hero'>
            {/* Background */}
            <div className='hero-bg-glow hero-bg-glow-1'></div>
            <div className='hero-bg-glow hero-bg-glow-2'></div>
            <div className='hero-grid-overlay'></div>

            <div className='container hero-container'>
                <div className='row align-items-center g-4 g-md-5'>

                    {/* Image */}
                    <div className='col-12 col-md-6 text-center order-md-2'>
                        <div className='image-stage' ref={imageWrapRef}>
                            <div className='image-ring-outer'></div>
                            <div className='image-ring-inner'></div>
                            <div className='image-glow'></div>

                            <div className='image-frame'>
                                <img
                                    src='media/images/anuragimg.jpg'
                                    alt='Anurag Chaurasiya'
                                    className='hero-image'
                                />
                                <div className='image-shine'></div>
                            </div>

                            {/* Floating badges */}
                            <div className='float-badge badge-1'>⚛️ React</div>
                            <div className='float-badge badge-2'>🟢 Node</div>
                            <div className='float-badge badge-3'>🍃 Mongo</div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className='col-12 col-md-6 order-md-1 text-center text-md-start'>
                        <p className='hero-greeting'>
                            <span className='wave'>👋</span> Hello, I'm
                        </p>
                        <h1 className='hero-name'>Anurag Chaurasiya</h1>

                        <div className='typing-wrapper'>
                            <span className='typing-prefix'>I am a</span>
                            <span className='typewriter'>
                                <span ref={typingRef} className='typewriter-text'></span>
                                <span className='cursor'>|</span>
                            </span>
                        </div>

                        <div className='hero-actions'>
                            <a href='#contact' className='btn-hero btn-primary-hero'>Hire Me</a>
                            <a href='#projects' className='btn-hero btn-ghost-hero'>View Work</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;