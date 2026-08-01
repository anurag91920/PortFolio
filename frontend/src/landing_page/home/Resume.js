import React from 'react';
import './Resume.css'; 

function Resume() {
    const handleResumeOpen = () => {
        window.open('media/ats-resume-2026.pdf', '_blank');
    };

    return (
        <div className='container p-5 mb-5'>
            <div className='row p-5 mt-5 mb-5 border-top' id='sa'>
                <h1 className='text-center mt-5 section-title'>Resume</h1>
                <p className='text-center text fs-5'>Download or view my resume</p>
            </div>

            <div className='text-center'>
                <button onClick={handleResumeOpen} className='resume-btn view'>
                    View Resume
                </button>

                <a href='media/ats-resume-2026.pdf' download className='resume-btn download'>
                    Download Resumes
                </a>
            </div>
        </div>
    );
}

export default Resume;
