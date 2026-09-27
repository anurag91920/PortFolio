import React, { useEffect, useRef } from 'react';
import './Footer.css';

function Footer() {
    const footerRef = useRef(null);

    const socials = [
        {
            label: 'GitHub',
            href: 'https://github.com/anurag91920',
            svg: (
                <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
                    <path d='M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.05.78 2.13v3.16c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z' />
                </svg>
            ),
        },
        {
            label: 'LinkedIn',
            href: 'https://anurag-chaurasiya-32a2442a5',
            svg: (
                <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
                    <path d='M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z' />
                </svg>
            ),
        },
        {
            label: 'Instagram',
            href: 'https://instagram.com/anurag91920',
            svg: (
                <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
                    <path d='M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.67 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z' />
                </svg>
            ),
        },
        {
            label: 'Facebook',
            href: 'https://facebook.com/anurag91920',
            svg: (
                <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
                    <path d='M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0z' />
                </svg>
            ),
        },
        {
            label: 'WhatsApp',
            href: 'https://wa.me/qr/QAZWIFMSZYN2N1',
            svg: (
                <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
                    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z' />
                </svg>
            ),
        },
    ];

    /* ---------- Scroll Reveal ---------- */
    useEffect(() => {
        const footer = footerRef.current;
        if (!footer) return;

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

        const elements = footer.querySelectorAll('.reveal');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='footer' ref={footerRef}>
            <div className='footer-bg-glow footer-bg-glow-1'></div>
            <div className='footer-bg-glow footer-bg-glow-2'></div>
            <div className='footer-grid-overlay'></div>

            <div className='container footer-container'>

                {/* Top row - Brand + Socials */}
                <div className='footer-top reveal'>
                    <div className='footer-brand'>
                        <span className='brand-bracket'>&lt;/&gt;</span>
                        <span className='brand-name'>Anurag Chaurasiya</span>
                    </div>

                    <div className='footer-socials'>
                        {socials.map((s, i) => (
                            <a
                                key={i}
                                href={s.href}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='social-btn'
                                aria-label={s.label}
                            >
                                {s.svg}
                                <span className='social-tooltip'>{s.label}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className='footer-divider reveal'>
                    <span className='divider-line'></span>
                    <span className='divider-dot'></span>
                    <span className='divider-line'></span>
                </div>

                {/* Bottom row - Copyright + Back to top */}
                <div className='footer-bottom reveal'>
                    <p className='footer-text'>
                        © {new Date().getFullYear()} <span className='footer-name'>Anurag Chaurasiya</span> — All rights reserved.
                    </p>

                    <button
                        className='back-top'
                        onClick={scrollTop}
                        aria-label='Back to top'
                    >
                        <span className='back-top-icon'>↑</span>
                        <span className='back-top-text'>Back to top</span>
                    </button>
                </div>

                <p className='footer-credit reveal'>
                    Built with <span className='heart'>♥</span> using React &amp; Bootstrap
                </p>

            </div>
        </footer>
    );
}

export default Footer;