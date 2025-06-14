import React from 'react';
import './Certificate.css'; // 👈 External CSS

function Certificate() {
    const certificates = [
        'media/images/Cer1.jpg',
        'media/images/Cer2.jpg',
        'media/images/Cer3.png',
        'media/images/Cer4.png'
    ];

    return (
        <div className='container py-5'>
            <div className='text-center mb-5 border-top pt-5' id='sa'>
                <h1 className='fw-bold section-title'>🏅 Certificates</h1>
                <p className='text-muted fs-5'>Here are some of my proud achievements</p>
            </div>

            <div className='row g-4'>
                {certificates.map((src, index) => (
                    <div className='col-12 col-sm-6 col-lg-3 d-flex justify-content-center' key={index}>
                        <div className='certificate-card'>
                            <img
                                src={src}
                                alt={`Certificate ${index + 1}`}
                                className='certificate-image'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certificate;
