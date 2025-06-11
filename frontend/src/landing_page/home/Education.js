import React from 'react';
// import { Link } from "react-router-dom";

function Education() {
    return ( 
       <div className='container mt-5'>
        <div className='row p-5 mt-5 nb-5 border-top' id='sam'>
                <h1 className='text-center mt-5'>EDUCATION</h1>
            </div>
           <div className='row'>
               <div className='col-6'>
                    <img src='media/images/DDU.png' style={{borderRadius: "50%", height: "70%", width: "70%"}} alt='Hero Imag' className='mb-5' />
               </div>
               <div className='col-6'>
                  <h1 style={{ color: "rgb(255, 255, 255)" }}>Deen Dayal Upadhyaya Gorakhpur University, Gorakhpur</h1>
                  <h1 style={{ color: "rgb(255, 255, 255)" }}>2022 - 2026</h1>
                  <h1 style={{ color: "rgb(255, 255, 255)" }}>Computer Science Engineering</h1>
                  <h3 style={{ color: "rgb(255, 255, 255)" }}>Bachelor of Technology in Computer Science & Engineering Student</h3>
                  <h2 style={{ color: "rgb(255, 255, 255)" }} >CGPA : 7.25</h2>
               </div>
           </div>
       </div>
    );
}

export default Education;