import React from 'react';

function Hero() {
    return ( 
        <div className=' container'>
        <div className='row p-5 mt-5  text-muted fs-6 border-top'>
            <div className='col-6 p-5 text-center image'>
                <img src='media/images/ac.jpg' style={{borderRadius: "100%", width: "50%"}} alt='' />
            </div>
            <div className='col-6 p-5 fs-5' id='her'>
                <h1 class = "highlight">Hello!, I'm <span>Anurag Chaurasiya</span></h1>
                <div class = "role"><spsn class = "text1">I am a |  </spsn>
                 <span class = "text2"> Mern Stack Developer</span>
                 <span class = "text3"> Web Designer</span></div>
            </div>
        </div>
       </div>
    );
}

export default Hero; 