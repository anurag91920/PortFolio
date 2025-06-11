import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
        <div className='row p-5 mt-5  text-muted fs-6 border-top'>
            <div className='col-6 p-5 text-center'>
                <img src='media/images/ac.jpg' style={{borderRadius: "100%", width: "40%"}} alt='' />
                <h4 className='mt-3' style={{ color: "rgb(255, 255, 255)" }}>Anurag Chaurasiya</h4>
                <h5 style={{ color: "rgb(255, 255, 255)" }}>MERN Stack Software Developer</h5>
            </div>
            <div className='col-6 p-5 fs-5'>
                <p style={{ color: "rgb(255, 255, 255)" }}>I'm a passionate MERN Stack Developer with experience building dynamic, responsive, and scalable web applications. Proficient in MongoDB, Express.js, React.js, and Node.js,  </p> 

                <p style={{ color: "rgb(255, 255, 255)" }}>I specialize in creating full-stack solutions that provide seamless user experiences and robust back-end functionality.</p> 

                <p style={{ color: "rgb(255, 255, 255)" }}> I enjoy solving complex problems, optimizing performance, and staying current with modern web technologies. Whether it's developing RESTful APIs, designing intuitive UIs, or managing databases, I bring a collaborative mindset and strong attention to detail to every project.  </p> 
            </div>
        </div>
       </div>
    );
}

export default Hero;