import React from 'react';
import './Certificate.css';

function Certificate() {
    const certificates = [
        {
            title: 'Coding and Programming Fundamentals',
            provider: 'Samsung Innovation Campus',
            year: '2024',
            link: 'media/images/Cer1.jpg'
        },
        {
            title: 'Postman API Fundamentals',
            provider: 'Postman Student Expert Program',
            year: '2024',
            link: 'media/images/Cer2.jpg'
        },
        {
            title: 'Full Stack Web Development',
            provider: 'APANA COLLEGE (Shradha Khapara)',
            year: '2024',
            link: 'media/images/Cer3.jpg'
        },
        {
            title: 'DSA WITH JAVA',
            provider: 'APANA COLLEGE (Shradha Khapara)',
            year: '2024',
            link: 'media/images/Cer4.jpg'
        },
    ];

    return (
        <div className='certificate-section container py-5'>
            <div className='text-center mb-5 border-top pt-5' id='sa'>
                <h1 className='fw-bold section-title'>🏅 Certificates</h1>
                <p className='text-muted fs-5'>Here are some of my proud achievements</p>
            </div>

            <div className='row'>
                {certificates.map((cert, index) => (
                    <div className='col-12 col-md-6 mb-4' key={index}>
                        <div className='certificate-item'>
                            <h5 className='fw-bold mb-1'>{cert.title}</h5>
                            <p className='text-muted mb-1'>{cert.provider} | {cert.year}</p>
                            <a
                                href={cert.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='view-link'
                            >
                                View Certificate <i className='fas fa-external-link-alt'></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certificate;
