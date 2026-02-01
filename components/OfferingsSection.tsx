'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Users, Briefcase, Laptop } from 'lucide-react';

const offerings = [
    {
        id: 1,
        title: 'Group Classes',
        description: 'Join our vibrant community. From energizing Vinyasa flows to grounding Yin sessions, experience the collective energy of practice.',
        icon: <Users className="w-6 h-6" />,
        image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop',
        alt: 'Group yoga class'
    },
    {
        id: 2,
        title: 'Corporate Wellness',
        description: 'Bring mindfulness to the workplace. Tailored workshops designed to reduce stress, improve posture, and boost team morale.',
        icon: <Briefcase className="w-6 h-6" />,
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop',
        alt: 'Corporate wellness session'
    },
    {
        id: 3,
        title: 'Online Sessions',
        description: 'Practice from your sanctuary. Access live-streamed classes and an on-demand library that fits your schedule perfectly.',
        icon: <Laptop className="w-6 h-6" />,
        image: 'https://images.unsplash.com/photo-1516827003699-2880f453d93b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Online yoga session'
    }
];

const OfferingsSection = () => {
    // State for mobile "tap" interaction
    const [activeId, setActiveId] = useState<number | null>(null);

    const handleCardClick = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="py-12 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-center text-primary text-[32px] font-semibold uppercase tracking-wide mb-6">
                        Our Offerings
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto text-lg">
                        Find the perfect balance for your lifestyle, whether in the studio, at work, or at home.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {offerings.map((item) => {
                        const isActive = activeId === item.id;

                        return (
                            <div
                                key={item.id}
                                onClick={() => handleCardClick(item.id)}
                                className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-lg transform transition-all duration-300 bg-card"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        className={`object-cover transition-transform duration-700 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>

                                {/* Gradient Overlay 
                  Using 'from-foreground' (which is #111827/Black in your CSS) ensures the dark overlay works correctly.
              */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-90' : 'opacity-80 group-hover:opacity-90'}`}
                                />

                                {/* Content Container */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}
                                >
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-2xl font-serif font-bold text-white mb-3">
                                        {item.title}
                                    </h3>

                                    <p
                                        className={`text-gray-200 leading-relaxed transition-opacity duration-500 delay-100 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OfferingsSection;