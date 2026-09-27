import React, { useEffect, useRef } from 'react';
import './Education.css';

function Education() {
    const sectionRef = useRef(null);
    const imageWrapRef = useRef(null);

    /* ---------- Scroll Reveal Animation ---------- */
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

            const rotateY = ((x - centerX) / centerX) * 12;
            const rotateX = ((centerY - y) / centerY) * 12;

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
        <section className='education-section-wrapper' id='education' ref={sectionRef}>
            <div className='education-bg-glow education-bg-glow-1'></div>
            <div className='education-bg-glow education-bg-glow-2'></div>

            <div className='container'>
                {/* Section Title */}
                <div className='row pt-5 mt-5 mb-4 border-top border-secondary-subtle'>
                    <h1 className='text-center mt-5 section-title reveal'>
                        <span className='title-line'></span>
                        EDUCATION
                        <span className='title-line'></span>
                    </h1>
                </div>

                {/* Education Card */}
                <div className='row align-items-center education-card reveal'>

                    {/* Image */}
                    <div className='col-12 col-md-6 text-center mb-4 mb-md-0'>
                        <div className='edu-image-stage' ref={imageWrapRef}>
                            <div className='edu-ring-outer'></div>
                            <div className='edu-ring-inner'></div>
                            <div className='edu-glow'></div>

                            <div className='edu-image-frame'>
                                <img
                                    src='media/images/DDU.png'
                                    alt='University Logo'
                                    className='education-image'
                                />
                                <div className='edu-shine'></div>
                            </div>
                        </div>
                    </div>

                    {/* Info */}
                    <div className='col-12 col-md-6'>
                        <div className='education-info'>
                            <div className='edu-badge reveal'>
                                <span className='badge-dot'></span>
                                B.Tech • CSE
                            </div>

                            <h2 className='edu-title reveal'>
                                IET Deen Dayal Upadhyaya Gorakhpur University, Gorakhpur
                            </h2>

                            <div className='edu-meta reveal'>
                                <div className='meta-item'>
                                    <span className='meta-icon'>📅</span>
                                    <span>May 2022 – May 2026</span>
                                </div>
                                <div className='meta-item'>
                                    <span className='meta-icon'>💻</span>
                                    <span>Computer Science &amp; Engineering</span>
                                </div>
                            </div>

                            <p className='edu-desc reveal'>
                                Bachelor of Technology in Computer Science &amp; Engineering
                            </p>

                            <div className='edu-cgpa reveal'>
                                <div className='cgpa-label'>CGPA</div>
                                <div className='cgpa-value'>
                                    <span className='highlight'>7.50</span>
                                    <span className='cgpa-total'>/ 10</span>
                                </div>
                                <div className='cgpa-bar'>
                                    <div className='cgpa-fill' style={{ width: '75%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Education;