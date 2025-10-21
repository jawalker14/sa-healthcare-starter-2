"use client";
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [consent, setConsent] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        if (!name || !email || !message || !consent) {
            setError('Please fill in all fields and accept the consent.');
            return;
        }

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            setSuccess(true);
            setName('');
            setEmail('');
            setMessage('');
            setConsent(false);
        } else {
            setError('There was an error submitting the form. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="text-red-500">{error}</div>}
            {success && <div className="text-green-500">Your message has been sent!</div>}
            <div>
                <label htmlFor="name" className="block">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border rounded p-2 w-full"
                />
            </div>
            <div>
                <label htmlFor="email" className="block">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border rounded p-2 w-full"
                />
            </div>
            <div>
                <label htmlFor="message" className="block">Message</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="border rounded p-2 w-full"
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        required
                    />
                    I consent to the processing of my data in accordance with the privacy policy.
                </label>
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded p-2">Send</button>
        </form>
    );
};

export default ContactForm;