/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
    const typingRef = useRef(null);
    const words = ['MERN Stack Developer', 'Web Designer', 'Problem Solver'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    useEffect(() => {
        const type = () => {
            const currentWord = words[wordIndex];
            const currentText = currentWord.substring(0, charIndex);

            if (typingRef.current) {
                typingRef.current.innerHTML = currentText;
            }

            if (!isDeleting && charIndex < currentWord.length) {
                charIndex++;
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
            } else if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 1000);
                return;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

            setTimeout(type, isDeleting ? 60 : 120);
        };

        type();
    }, []);

    return (
        <div className='container'>
            <div className='row p-5 mt-5 text-muted fs-6 border-top align-items-center'>
                <div className='col-12 col-md-6 p-5 text-center'>
                    <div className="image-container mx-auto">
                        <img
                            src='media/images/PC.jpg'
                            alt='Anurag Chaurasiya'
                            className='hero-image'
                        />
                    </div>
                </div>
                <div className='col-12 col-md-6 p-5 fs-5 text-center text-md-start' id='her'>
                    <h1 className='highlight'>
                        Hello!, I'm <span className='name'>Anurag Chaurasiya</span>
                    </h1>
                    <div className='typing'>
                        <span className='iama'>I am a </span>
                        <span ref={typingRef} className="typewriter-text"></span>
                        <span className='cursor'>|</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
