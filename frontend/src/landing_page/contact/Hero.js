import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Hero.css';

function Contact() {
    const formRef = useRef();
    const sectionRef = useRef(null);

    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [focused, setFocused] = useState(null);

    /* ---------- Scroll Reveal ---------- */
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            { threshold: 0.12 }
        );

        const elements = section.querySelectorAll('.reveal');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs
            .sendForm(
                'service_ka30qom',
                'template_qjwpl5r',
                formRef.current,
                'sn8MI5ilo2RB4PqKT'
            )
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    setStatus('success');
                    formRef.current.reset();
                    setTimeout(() => setStatus('idle'), 4000);
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setStatus('error');
                    setTimeout(() => setStatus('idle'), 4000);
                }
            );
    };

    const contactInfo = [
        { icon: '📧', label: 'Email', value: 'anurag9120959628@gmail.com', href: 'mailto:anurag9120959628@gmail.com' },
        { icon: '📱', label: 'Phone', value: '+91 9120959628', href: 'tel:+919120959628' },
        { icon: '📍', label: 'Location', value: 'Noida, India', href: null },
    ];

    return (
        <section className='contact-section-wrapper' id='contact' ref={sectionRef}>
            <div className='contact-bg-glow contact-bg-glow-1'></div>
            <div className='contact-bg-glow contact-bg-glow-2'></div>
            <div className='contact-grid-overlay'></div>

            <div className='container contact-container'>

                {/* Title */}
                <div className='row pt-5 mt-5 mb-5 border-top border-secondary-subtle'>
                    <h1 className='text-center mt-5 section-title reveal'>
                        <span className='title-line'></span>
                        CONTACT ME
                        <span className='title-line'></span>
                    </h1>
                    <p className='section-subtitle reveal'>
                        Let's build something great together
                    </p>
                </div>

                <div className='row g-4 g-lg-5 align-items-stretch'>

                    {/* Left — Info Panel */}
                    <div className='col-12 col-lg-5'>
                        <div className='contact-info-panel reveal'>
                            <div className='info-badge'>
                                <span className='badge-dot'></span>
                                Available for work
                            </div>

                            <h2 className='info-heading'>
                                Get in <span className='gradient-text'>touch</span>
                            </h2>
                            <p className='info-text'>
                                Have a project in mind, a question, or just want to say hi?
                                Drop a message and I'll get back to you as soon as possible.
                            </p>

                            <div className='info-list'>
                                {contactInfo.map((item, i) => {
                                    const Wrapper = item.href ? 'a' : 'div';
                                    return (
                                        <Wrapper
                                            key={i}
                                            className='info-item'
                                            {...(item.href
                                                ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                                                : {})}
                                        >
                                            <div className='info-icon'>{item.icon}</div>
                                            <div className='info-content'>
                                                <div className='info-label'>{item.label}</div>
                                                <div className='info-value'>{item.value}</div>
                                            </div>
                                        </Wrapper>
                                    );
                                })}
                            </div>

                            {/* Socials */}
                            <div className='info-socials'>
                                <a href='https://github.com/anurag91920' aria-label='GitHub' className='social-btn'>
                                    <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
                                        <path d='M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.05.78 2.13v3.16c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z' />
                                    </svg>
                                </a>
                                <a href='https://anurag-chaurasiya-32a2442a5/' aria-label='LinkedIn' className='social-btn'>
                                    <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
                                        <path d='M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z' />
                                    </svg>
                                </a>
                                <a href='#twitter' aria-label='Twitter' className='social-btn'>
                                    <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
                                        <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className='col-12 col-lg-7'>
                        <form
                            className='contact-form reveal'
                            ref={formRef}
                            onSubmit={sendEmail}
                            noValidate
                        >
                            <div className='form-row'>
                                <div className={`form-field ${focused === 'name' ? 'focused' : ''}`}>
                                    <label htmlFor='name'>Name</label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        placeholder='Your Name'
                                        required
                                        onFocus={() => setFocused('name')}
                                        onBlur={() => setFocused(null)}
                                    />
                                </div>

                                <div className={`form-field ${focused === 'email' ? 'focused' : ''}`}>
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        placeholder='your@email.com'
                                        required
                                        onFocus={() => setFocused('email')}
                                        onBlur={() => setFocused(null)}
                                    />
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className={`form-field ${focused === 'mobile' ? 'focused' : ''}`}>
                                    <label htmlFor='mobile'>Mobile</label>
                                    <input
                                        type='tel'
                                        id='mobile'
                                        name='mobile'
                                        placeholder='+91 XXXXX XXXXX'
                                        onFocus={() => setFocused('mobile')}
                                        onBlur={() => setFocused(null)}
                                    />
                                </div>

                                <div className={`form-field ${focused === 'subject' ? 'focused' : ''}`}>
                                    <label htmlFor='subject'>Subject</label>
                                    <input
                                        type='text'
                                        id='subject'
                                        name='subject'
                                        placeholder='What is this about?'
                                        onFocus={() => setFocused('subject')}
                                        onBlur={() => setFocused(null)}
                                    />
                                </div>
                            </div>

                            <div className={`form-field ${focused === 'message' ? 'focused' : ''}`}>
                                <label htmlFor='message'>Message</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows='5'
                                    placeholder='Tell me about your project...'
                                    required
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused(null)}
                                ></textarea>
                            </div>

                            <button
                                type='submit'
                                className={`submit-btn ${status}`}
                                disabled={status === 'sending'}
                            >
                                {status === 'idle' && (
                                    <>
                                        <span>Send Message</span>
                                        <span className='btn-icon'>→</span>
                                    </>
                                )}
                                {status === 'sending' && (
                                    <>
                                        <span className='spinner'></span>
                                        <span>Sending...</span>
                                    </>
                                )}
                                {status === 'success' && (
                                    <>
                                        <span>✓</span>
                                        <span>Message Sent!</span>
                                    </>
                                )}
                                {status === 'error' && (
                                    <>
                                        <span>✕</span>
                                        <span>Try Again</span>
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <p className='form-message success'>
                                    Thanks! I'll get back to you soon. 🎉
                                </p>
                            )}
                            {status === 'error' && (
                                <p className='form-message error'>
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;