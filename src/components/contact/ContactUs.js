import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.css'
const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState('');
    const [alertType, setAlertType] = useState('');
    const [error, setError] = useState({ name: false, email: false, subject: false, message: false });
    const showMessage = (text, type) => {
        setAlert(text);
        setAlertType(type);

        setTimeout(() => {
            setAlert('');
            setAlertType('');
        }, 3000);
    };
    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const sendEmail = async (e) => {
        e.preventDefault();
        if (!name) {
            setError((prevError) => ({ ...prevError, name: true }));
            return;
        }
        if (!email || !isValidEmail(email)) {
            setError((prevError) => ({ ...prevError, email: true }));
            return;
        }
        if (!subject) {
            setError((prevError) => ({ ...prevError, subject: true }));
            return;
        }
        if (!message) {
            setError((prevError) => ({ ...prevError, message: true }));
            return;
        }
        try {
            const templateParams = {
                user_name: name,
                user_email: email,
                user_subject: subject,
                user_message: message,
            };

            await emailjs.send('service_j7nu7i5', 'template_drmtnmr', templateParams, '-nixmAp-KPCmUSxIc');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            showMessage('Successfully Submitted...!', 'success');

        } catch (error) {
            showMessage('Error sending email:', error, 'error');
        }
    };

    return (
        <div className='contact-form'>
            <h1 className='cf-head'>Contact me..!</h1>
            {alert && (
                <div className={`contact-alert ${alertType}`}>
                    {alert}
                </div>
            )}
            <form onSubmit={sendEmail}>
                <div className='form-group'>
                    <label>Name</label>
                    <input
                        type='text'
                        className={`form-control ${error.name && "error-input"}`}
                        placeholder='john doe'
                        value={name}
                        onChange={(e) => { setName(e.target.value); setError((prevError) => ({ ...prevError, name: false })) }} />

                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='email'
                        className={`form-control ${error.email && "error-input"}`}
                        placeholder='abcd@gmail.com'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError((prevError) => ({ ...prevError, email: false })) }} />
                </div>
                <div className='form-group'>
                    <label>Subject</label>
                    <input
                        type='text'
                        className={`form-control ${error.subject && "error-input"}`}
                        placeholder='write a subject'
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value); setError((prevError) => ({ ...prevError, subject: false })) }} />
                </div>
                <div className='form-group'>
                    <label>Message</label>
                    <textarea
                        className={`form-control ${error.message && "error-input"}`}
                        cols={40}
                        placeholder='write a message'
                        value={message}
                        onChange={(e) => { setMessage(e.target.value); setError((prevError) => ({ ...prevError, message: false })) }}>
                    </textarea>
                </div>
                <div>
                    <button type='submit' className='btn contact-btn'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContactUs