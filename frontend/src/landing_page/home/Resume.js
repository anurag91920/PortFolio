import React, { useEffect, useRef } from 'react';
import './Resume.css';

function Resume() {
    const sectionRef = useRef(null);

    const handleResumeOpen = () => {
        window.open('media/ATS-Resume-2026.pdf', '_blank');
    };

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
            { threshold: 0.15 }
        );

        const elements = section.querySelectorAll('.reveal');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className='resume-section-wrapper' id='resume' ref={sectionRef}>
            <div className='resume-bg-glow resume-bg-glow-1'></div>
            <div className='resume-bg-glow resume-bg-glow-2'></div>
            <div className='resume-grid-overlay'></div>

            <div className='container resume-container'>

                {/* Title */}
                <div className='row pt-5 mt-5 mb-4 border-top border-secondary-subtle'>
                    <h1 className='text-center mt-5 section-title reveal'>
                        <span className='title-line'></span>
                        RESUME
                        <span className='title-line'></span>
                    </h1>
                    <p className='section-subtitle reveal'>
                        Download or view my resume
                    </p>
                </div>

                {/* Resume Card */}
                <div className='resume-card reveal'>
                    {/* Decorative floating dots */}
                    <span className='float-dot dot-1'></span>
                    <span className='float-dot dot-2'></span>
                    <span className='float-dot dot-3'></span>

                    <div className='resume-icon reveal'>
                        <span className='icon-emoji'>📄</span>
                        <span className='icon-ring'></span>
                    </div>

                    <h2 className='resume-heading reveal'>
                        My <span className='gradient-text'>Resume</span>
                    </h2>

                    <p className='resume-desc reveal'>
                        Grab a copy of my resume to explore my education, skills,
                        and projects. Available in PDF format.
                    </p>

                    <div className='resume-meta reveal'>
                        <span className='meta-chip'>
                            <span className='chip-icon'>📅</span> Updated 2026
                        </span>
                        <span className='meta-chip'>
                            <span className='chip-icon'>📑</span> PDF Format
                        </span>
                        <span className='meta-chip'>
                            <span className='chip-icon'>⚡</span> ATS Friendly
                        </span>
                    </div>

                    <div className='resume-actions reveal'>
                        <button onClick={handleResumeOpen} className='resume-btn view'>
                            <span className='btn-icon'>👁</span>
                            <span>View Resume</span>
                        </button>

                        <a
                            href='media/ATS-Resume-2026.pdf'
                            download
                            className='resume-btn download'
                        >
                            <span className='btn-icon'>⬇</span>
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Resume;