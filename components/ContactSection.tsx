'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone, Send, CheckCircle, ChevronDown } from 'lucide-react';

const ContactSection = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setFormStatus('success');
    };

    return (
        <section id="contact" className="py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header - Aligned with your Gallery changes */}
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-primary text-xs font-bold uppercase tracking-widest font-sans mb-3">
                        REACH OUT
                    </p>
                    <h2 className="text-primary text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                        Get in Touch
                    </h2>
                    <p className="text-muted text-lg font-sans leading-relaxed">
                        Have questions about our classes or want to book a private session? Drop by the studio or send us a message below.
                    </p>
                </div>

                {/* Content Container */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 bg-card rounded-3xl shadow-sm p-6 md:p-8 lg:p-0 overflow-hidden border border-border">

                    {/* Left Column: Form & Info */}
                    <div className="lg:col-span-5 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Send a Message</h3>

                            {/* Success Message */}
                            {formStatus === 'success' ? (
                                <div className="p-6 bg-green-50/50 dark:bg-green-900/20 text-primary rounded-xl border border-primary flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
                                    <CheckCircle className="w-12 h-12 mb-3" />
                                    <p className="font-bold text-xl">Message Sent!</p>
                                    <p className="mt-2">Thank you. We'll be in touch shortly.</p>
                                    <button
                                        onClick={() => setFormStatus('idle')}
                                        className="mt-6 text-sm font-semibold underline hover:text-green-800"
                                    >
                                        Send another
                                    </button>
                                </div>
                            ) : (
                                /* Contact Form */
                                <form onSubmit={handleSubmit} className="space-y-6">

                                    {/* Name */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            disabled={formStatus === 'submitting'}
                                            className="peer block w-full px-4 py-3 text-foreground bg-background border border-foreground rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder-transparent"
                                            placeholder="Your Name"
                                        />
                                        <label
                                            htmlFor="name"
                                            className="absolute text-muted duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-card px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 cursor-text pointer-events-none"
                                        >
                                            Your Name
                                        </label>
                                    </div>

                                    {/* Email */}
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            disabled={formStatus === 'submitting'}
                                            className="peer block w-full px-4 py-3 text-foreground bg-background border border-foreground rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder-transparent"
                                            placeholder="Email Address"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute text-muted duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-card px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 cursor-text pointer-events-none"
                                        >
                                            Email Address
                                        </label>
                                    </div>

                                    {/* Subject Select */}
                                    <div className="relative">
                                        <select
                                            id="subject"
                                            className="block w-full px-4 py-3 text-foreground bg-background border border-foreground rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Select a Topic</option>
                                            <option value="classes">Class Inquiry</option>
                                            <option value="private">Private Session</option>
                                            <option value="events">Events & Workshops</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary">
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="relative">
                                        <textarea
                                            id="message"
                                            rows={4}
                                            required
                                            disabled={formStatus === 'submitting'}
                                            className="peer block w-full px-4 py-3 text-foreground bg-background border border-foreground rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none placeholder-transparent"
                                            placeholder="How can we help?"
                                        ></textarea>
                                        <label
                                            htmlFor="message"
                                            className="absolute text-muted duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-card px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:top-0 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 cursor-text pointer-events-none"
                                        >
                                            How can we help?
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === 'submitting'}
                                        className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-xl shadow-md hover:bg-primary/90 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {formStatus === 'submitting' ? (
                                            <span>Sending...</span>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Direct Contact Info */}
                        <div className="mt-12 pt-8 border-t border-border space-y-4">
                            <div className="flex items-center gap-4 text-muted">
                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <p className="font-medium">Block F, North Nazimabad</p>
                            </div>
                            <div className="flex items-center gap-4 text-muted">
                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <a href="mailto:yogawithmahaofficial@gmail.com" className="font-medium hover:text-primary transition">yogawithmahaofficial@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-4 text-muted">
                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <a href="tel:+923008288402" className="font-medium hover:text-primary transition">+92 300 8288402</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Map & Visual */}
                    <div className="lg:col-span-7 relative h-[500px] lg:h-auto order-1 lg:order-2 bg-secondary/30">
                        <iframe
                            src="https://maps.google.com/maps?q=Block+F,+North+Nazimabad,+Karachi,+Pakistan&hl=en&z=15&output=embed"
                            title="Yoga with Maha studio location — North Nazimabad, Karachi"
                            className="absolute inset-0 w-full h-full border-0 grayscale-[0.2] contrast-[0.9]"
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-72 bg-card/95 backdrop-blur-md p-4 rounded-xl shadow-lg z-10 border border-border">
                            <div className="flex items-start gap-3">
                                <div className="relative w-16 h-16 shrink-0">
                                    <Image
                                        src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=200&auto=format&fit=crop"
                                        alt="Studio Entrance"
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-foreground">Serenity Flow</h3>
                                    <p className="text-xs text-green-600 font-bold mt-1 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                        Open Now • Closes 8PM
                                    </p>
                                    <a
                                        href="https://www.google.com/maps/dir/?api=1&destination=Block+F,+North+Nazimabad,+Karachi,+Pakistan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-primary font-semibold mt-1 hover:underline block"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
