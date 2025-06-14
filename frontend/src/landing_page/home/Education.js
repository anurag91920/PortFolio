import React from 'react';
import './Education.css'; // 👈 CSS file ko alag se link karein

function Education() {
    return ( 
       <div className='container mt-5'>
           <div className='row p-5 mt-5 nb-5 border-top' id='sam'>
               <h1 className='text-center mt-5 section-title'>EDUCATION</h1>
           </div>
           <div className='row align-items-center education-section'>
               <div className='col-md-6 text-center'>
                    <div className="image-wrapper">
                        <img 
                            src='media/images/DDU.png' 
                            alt='University Logo'
                            className='education-image' 
                        />
                    </div>
               </div>
               <div className='col-md-6'>
                  <div className='education-info'>
                      <h2>Deen Dayal Upadhyaya Gorakhpur University, Gorakhpur</h2>
                      <h3>2022 - 2026</h3>
                      <h3>Computer Science Engineering</h3>
                      <p>Bachelor of Technology in Computer Science & Engineering Student</p>
                      <h4>CGPA : <span className='highlight'>7.25</span></h4>
                  </div>
               </div>
           </div>
       </div>
    );
}

export default Education;
