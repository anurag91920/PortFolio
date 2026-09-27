/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef } from 'react';
import './Skill.css';

function Skill() {
    const sectionRef = useRef(null);

    const designTools = [
        { img: 'https://img.icons8.com/color/48/000000/adobe-xd.png', name: 'Adobe XD' },
        { img: 'https://img.icons8.com/color/48/000000/figma.png', name: 'Figma' },
    ];

    const techTools = [
        { img: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000', name: 'HTML5' },
        { img: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000', name: 'CSS' },
        { img: 'https://img.icons8.com/?size=100&id=laVIsJnTtYoj&format=png&color=000000', name: 'JavaScript' },
        { img: 'https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000', name: 'React.js' },
        { img: 'https://img.icons8.com/?size=100&id=g9mmSxx3SwAI&format=png&color=000000', name: 'Bootstrap' },
        { img: 'https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000', name: 'TailwindCSS' },
        { img: 'https://img.icons8.com/?size=100&id=evasjCvrqrHU&format=png&color=000000', name: 'Firebase' },
        { img: 'https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000', name: 'Next.js' },
        { img: 'https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000', name: 'Material UI' },
        { img: 'https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000', name: 'Express.js' },
        { img: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000', name: 'Node.js' },
        { img: 'https://img.icons8.com/?size=100&id=62856&format=png&color=000000', name: 'Git' },
        { img: 'https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000', name: 'GitHub' },
        { img: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000', name: 'MongoDB' },
        { img: 'https://img.icons8.com/?size=100&id=JloqPm4xGSKW&format=png&color=000000', name: 'Render' },
        { img: 'https://img.icons8.com/?size=100&id=99262&format=png&color=000000', name: 'Vercel' },
        { img: 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000', name: 'AWS' },
        { img: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000', name: 'MySQL' },
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

    const renderBadge = (tool, index) => (
        <div
            className='skill-badge reveal'
            key={`${tool.name}-${index}`}
            style={{ transitionDelay: `${Math.min(index * 0.05, 0.8)}s` }}
        >
            <div className='badge-glow'></div>
            <div className='badge-icon'>
                <img src={tool.img} alt={tool.name} loading='lazy' />
            </div>
            <span className='badge-name'>{tool.name}</span>
            <div className='badge-shine'></div>
        </div>
    );

    return (
        <section className='skill-section-wrapper' id='skills' ref={sectionRef}>
            <div className='skill-bg-glow skill-bg-glow-1'></div>
            <div className='skill-bg-glow skill-bg-glow-2'></div>
            <div className='skill-grid-overlay'></div>

            <div className='container skill-container'>

                {/* Section Title */}
                <div className='row pt-5 mt-5 mb-4 border-top border-secondary-subtle'>
                    <h1 className='text-center mt-5 section-title reveal'>
                        <span className='title-line'></span>
                        SKILLS
                        <span className='title-line'></span>
                    </h1>
                    <p className='section-subtitle reveal'>
                        Technologies &amp; tools I work with
                    </p>
                </div>

                {/* Design Tools */}
                <div className='skill-category-block reveal'>
                    <h2 className='skill-category'>
                        <span className='category-icon'>🎨</span>
                        Design Tools I Use
                    </h2>
                    <div className='skill-badges-grid design-grid'>
                        {designTools.map((tool, i) => renderBadge(tool, i))}
                    </div>
                </div>

                {/* Tech Tools */}
                <div className='skill-category-block reveal'>
                    <h2 className='skill-category'>
                        <span className='category-icon'>🛠</span>
                        Technologies I Use
                    </h2>
                    <div className='skill-badges-grid'>
                        {techTools.map((tool, i) => renderBadge(tool, i))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skill;