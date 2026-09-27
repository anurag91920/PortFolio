import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    /* ---------- Scroll Detection ---------- */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* ---------- Close menu on route change ---------- */
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    /* ---------- Lock body scroll when menu open (mobile) ---------- */
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const navItems = [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Project', to: '/project' },
        { label: 'Contact', to: '/contact' },
    ];

    return (
        <>
            <nav className={`custom-navbar fixed-top ${scrolled ? 'scrolled' : ''}`}>
                <div className='nav-bg-glow'></div>

                <div className='container nav-container'>

                    {/* Brand */}
                    <Link className='navbar-brand' to='/'>
                        <div className='logo-wrapper'>
                            <img
                                src='media/images/Logo.png'
                                className='logo-img'
                                alt='Anurag Logo'
                            />
                            <span className='logo-ring'></span>
                        </div>
                        <span className='brand-name'>Anurag</span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <ul className='nav-links-desktop'>
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    end={item.to === '/'}
                                    className={({ isActive }) =>
                                        `nav-link-custom ${isActive ? 'active' : ''}`
                                    }
                                >
                                    <span className='nav-link-text'>{item.label}</span>
                                    <span className='nav-link-underline'></span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger */}
                    <button
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label='Toggle menu'
                        aria-expanded={menuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>
            </nav>

            {/* Mobile Overlay */}
            <div
                className={`mobile-overlay ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(false)}
            ></div>

            {/* Mobile Drawer */}
            <aside className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
                <div className='drawer-header'>
                    <div className='logo-wrapper'>
                        <img
                            src='media/images/Logo.png'
                            className='logo-img'
                            alt='Anurag Logo'
                        />
                    </div>
                    <span className='drawer-brand'>Anurag</span>
                </div>

                <nav className='drawer-nav'>
                    {navItems.map((item, i) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.to === '/'}
                            className={({ isActive }) =>
                                `drawer-link ${isActive ? 'active' : ''}`
                            }
                            style={{ transitionDelay: `${i * 0.06}s` }}
                        >
                            <span className='drawer-link-num'>0{i + 1}</span>
                            <span className='drawer-link-text'>{item.label}</span>
                            <span className='drawer-link-arrow'>→</span>
                        </NavLink>
                    ))}
                </nav>

                <div className='drawer-footer'>
                    <p>Let's connect</p>
                    <div className='drawer-socials'>
                        <a href='https://github.com/anurag91920' target='_blank' rel='noopener noreferrer' className='drawer-social' aria-label='GitHub'>
                            <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
                                <path d='M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.05.78 2.13v3.16c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z' />
                            </svg>
                        </a>
                        <a href='https://anurag-chaurasiya-32a2442a5' target='_blank' rel='noopener noreferrer' className='drawer-social' aria-label='LinkedIn'>
                            <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
                                <path d='M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z' />
                            </svg>
                        </a>
                        <a href='https://instagram.com/anurag91920' target='_blank' rel='noopener noreferrer' className='drawer-social' aria-label='Instagram'>
                            <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
                                <path d='M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.67 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z' />
                            </svg>
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Navbar;