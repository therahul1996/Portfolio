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
    const showMessage = (text, type) => {
        setAlert(text);
        setAlertType(type);
    
        setTimeout(() => {
        setAlert('');
        setAlertType('');
        }, 3000);
      };
    const sendEmail = async (e) => {
        e.preventDefault();

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
                        className='form-control'
                        placeholder='john doe'
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        placeholder='abcd@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Subject</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='write a subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Message</label>
                    <textarea
                        className='form-control'
                        cols={40}
                        placeholder='write a message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}>

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