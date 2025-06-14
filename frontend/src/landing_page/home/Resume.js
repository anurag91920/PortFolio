import React from 'react';
import './Resume.css'; // 👈 External CSS for styling

function Resume() {
    const handleResumeOpen = () => {
        window.open('media/resume.pdf', '_blank');
    };

    return (
        <div className='container p-5 mb-5'>
            <div className='row p-5 mt-5 mb-5 border-top' id='sa'>
                <h1 className='text-center mt-5 section-title'>📄 Resume</h1>
                <p className='text-center text-muted fs-5'>Download or view my resume</p>
            </div>

            <div className='text-center'>
                <button onClick={handleResumeOpen} className='resume-btn view'>
                    View Resume
                </button>

                <a href='media/resume.pdf' download className='resume-btn download'>
                    Download Resume
                </a>
            </div>
        </div>
    );
}

export default Resume;
