import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Hero() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ka30qom',     // ✅ Your Service ID
      'template_qjwpl5r',    // ✅ Your Template ID
      form.current,
      'sn8MI5ilo2RB4PqKT'    // ✅ Your Public Key
    ).then(
      (result) => {
        console.log('SUCCESS!', result.text);
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        console.error('FAILED...', error.text);
        alert('Failed to send message.');
      }
    );
  };

  return (
    <div className='container'>
      <div className='row border-top'>
        <div className='row p-1' id='sam'>
          <h1 className='text-center'>Contact</h1>
        </div>

        {/* ✅ Add onSubmit and ref here */}
        <form className="contact" ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile Number</label>
            <input type="number" className="form-control" id="mobile" name="mobile" placeholder="Mobile Number" />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
