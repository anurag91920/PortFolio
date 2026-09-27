import React, { useEffect, useRef } from 'react';
import './Certificate.css';

function Certificate() {
    const sectionRef = useRef(null);

    const certificates = [
        {
            title: 'Coding and Programming Fundamentals',
            provider: 'Samsung Innovation Campus',
            year: '2024',
            link: 'media/images/Cer1.jpg',
            badge: '🏆',
        },
        {
            title: 'Postman API Fundamentals',
            provider: 'Postman Student Expert Program',
            year: '2024',
            link: 'media/images/Cer2.jpg',
            badge: '🚀',
        },
        {
            title: 'Full Stack Web Development',
            provider: 'APANA COLLEGE (Shradha Khapara)',
            year: '2024',
            link: 'media/images/Cer3.png',
            badge: '💻',
        },
        {
            title: 'DSA WITH JAVA',
            provider: 'APANA COLLEGE (Shradha Khapara)',
            year: '2024',
            link: 'media/images/Cer4.png',
            badge: '☕',
        },
    ];

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

    return (
        <section className='certificate-section-wrapper' id='certificates' ref={sectionRef}>
            <div className='cert-bg-glow cert-bg-glow-1'></div>
            <div className='cert-bg-glow cert-bg-glow-2'></div>
            <div className='cert-grid-overlay'></div>

            <div className='container cert-container'>

                {/* Title */}
                <div className='row pt-5 mt-5 mb-5 border-top border-secondary-subtle'>
                    <h1 className='text-center mt-5 section-title reveal'>
                        <span className='title-line'></span>
                        🏅 CERTIFICATES
                        <span className='title-line'></span>
                    </h1>
                    <p className='section-subtitle reveal'>
                        Here are some of my proud achievements
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className='row g-4'>
                    {certificates.map((cert, index) => (
                        <div className='col-12 col-md-6' key={index}>
                            <a
                                href={cert.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='cert-card reveal'
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                <div className='cert-glow'></div>

                                {/* Thumbnail */}
                                <div className='cert-thumb'>
                                    <img src={cert.link} alt={cert.title} loading='lazy' />
                                    <div className='thumb-overlay'>
                                        <span className='thumb-icon'>👁</span>
                                    </div>
                                    <span className='cert-badge'>{cert.badge}</span>
                                </div>

                                {/* Info */}
                                <div className='cert-info'>
                                    <h3 className='cert-title'>{cert.title}</h3>
                                    <p className='cert-provider'>{cert.provider}</p>

                                    <div className='cert-footer'>
                                        <span className='cert-year'>
                                            <span className='year-dot'></span>
                                            {cert.year}
                                        </span>
                                        <span className='view-link'>
                                            View
                                            <span className='arrow'>→</span>
                                        </span>
                                    </div>
                                </div>

                                <div className='cert-shine'></div>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Certificate;