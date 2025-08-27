import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_uv04wpi', 'template_yzp8n1l', form.current, {
                publicKey: 'MBqytZromd1Wrs7Dp',
            })
            .then(
                () => {
                    setName('');
                    setEmail('');
                    setMessage('');
                    setSuccess("Message Sent")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div>
            <p className='text-2xl text-cyan-500'>{success}</p>
            <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail} >
                <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    className="h-12 rounded-lg bg-[#645550] px-2 text-white"
                    value={name}
                    onChange={handleName}
                />
                <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    required
                    className="h-12 rounded-lg bg-[#645550] px-2 text-white"
                    value={email}
                    onChange={handleEmail}
                />
                <textarea
                    type="text"
                    name="message"
                    rows="9"
                    cols="50"
                    placeholder="Message"
                    required
                    className=" rounded-lg bg-[#645550] p-2 text-white"
                    value={message}
                    onChange={handleMessage}
                />
                <button
                    type="submit"
                    className="w-full rounded-lg border border-cyan-500 text-white h-12 font-bold text-xl hover:bg-[#009fb3] bg-cyan-500 transition-all duration-500"
                >
                    Send
                </button>
            </form>
        </div>
    )
}
