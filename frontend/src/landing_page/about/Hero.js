import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <div className='hero-section container mt-5 py-5'>
            <div className='row align-items-center g-4'>

                <div className='col-12 col-md-6 text-center'>
                    <img
                        src='media/images/ac.jpg'
                        alt='Anurag Chaurasiya'
                        className='hero-image'
                    />
                    <h4 className='mt-3 hero-name'>Anurag Chaurasiya</h4>
                    <h5 className='hero-title'>MERN Stack Software Developer</h5>
                </div>

                <div className='col-12 col-md-6'>
                    <p className='hero-text'>
                        I'm a passionate MERN Stack Developer with experience building dynamic,
                        responsive, and scalable web applications. Proficient in MongoDB, Express.js,
                        React.js, and Node.js.
                    </p>
                    <p className='hero-text'>
                        I specialize in creating full-stack solutions that provide seamless user
                        experiences and robust back-end functionality.
                    </p>
                    <p className='hero-text'>
                        I enjoy solving complex problems, optimizing performance, and staying
                        current with modern web technologies. Whether it's developing RESTful APIs,
                        designing intuitive UIs, or managing databases — I bring a collaborative
                        mindset and strong attention to detail to every project.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
