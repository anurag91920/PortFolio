import React from 'react';

function Certificate() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 nb-5 border-top' id='sa'>
                <h1 className='text-center mt-5'>Certificate</h1>
            </div>
            <div className='row text-center'>
                <div className='col-6'>
                 <img src='media/images/Cer1.jpg' style={{height: "70%", width: "70%"}} alt='Hero Imag' className='mb-5' />
                </div>
                <div className='col-6'>
                     <img src='media/images/Cer2.jpg' style={{height: "70%", width: "70%"}} alt='Hero Imag' className='mb-5' />
                </div>
            </div>
            <div className='row text-center'>
                <div className='col-6'>
                 <img src='media/images/Cer3.png' style={{height: "70%", width: "70%"}} alt='Hero Imag' className='mb-5' />
                </div>
                <div className='col-6'>
                     <img src='media/images/Cer4.png' style={{height: "70%", width: "70%"}} alt='Hero Imag' className='mb-5' />
                </div>
            </div>
        </div>
    );
}

export default Certificate;