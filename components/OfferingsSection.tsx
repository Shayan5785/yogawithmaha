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
        // Using a yoga-specific image from Unsplash
        image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop',
        alt: 'Group yoga class session in studio'
    },
    {
        id: 2,
        title: 'Corporate Wellness',
        description: 'Bring mindfulness to the workplace. Tailored workshops designed to reduce stress, improve posture, and boost team morale.',
        icon: <Briefcase className="w-6 h-6" />,
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop',
        alt: 'Corporate office yoga wellness session'
    },
    {
        id: 3,
        title: 'Online Sessions',
        description: 'Practice from your sanctuary. Access live-streamed classes and an on-demand library that fits your schedule perfectly.',
        icon: <Laptop className="w-6 h-6" />,
        image: 'https://images.unsplash.com/photo-1516827003699-2880f453d93b?q=80&w=687&auto=format&fit=crop',
        alt: 'Woman practicing yoga at home with laptop'
    }
];

const OfferingsSection = () => {
    // State to track which card is clicked (mostly for mobile/tablet touch)
    const [activeId, setActiveId] = useState<number | null>(null);

    const handleCardClick = (id: number) => {
        // Toggle: if clicking the same card, close it. If different, open it.
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section id="offerings" className="py-16 sm:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <p className="text-primary text-xs font-bold uppercase tracking-widest font-sans">
                        Find Your Flow
                    </p>
                    <h2 className="text-primary text-3xl md:text-5xl font-heading font-bold text-foreground">
                        Our Offerings
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto font-sans leading-relaxed">
                        Find the perfect balance for your lifestyle, whether in the studio, at work, or at home.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {offerings.map((item) => {
                        const isActive = activeId === item.id;

                        return (
                            <div
                                key={item.id}
                                onClick={() => handleCardClick(item.id)}
                                onMouseEnter={() => setActiveId(item.id)} // Optional: Makes desktop hover feel snappier
                                onMouseLeave={() => setActiveId(null)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleCardClick(item.id);
                                    }
                                }}
                                className={`
                                    group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden 
                                    cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500
                                    focus:outline-none focus:ring-4 focus:ring-primary/20
                                `}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        className={`
                                            object-cover transition-transform duration-700 ease-out
                                            ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                                        `}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>

                                {/* Dark Gradient Overlay (Essential for text readability) */}
                                <div
                                    className={`
                                        absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                                        transition-opacity duration-500
                                        ${isActive ? 'opacity-90' : 'opacity-70 group-hover:opacity-90'}
                                    `}
                                />

                                {/* Content Container */}
                                <div
                                    className={`
                                        absolute bottom-0 left-0 right-0 p-6 md:p-8 
                                        transform transition-transform duration-500 ease-out
                                        ${isActive ? 'translate-y-0' : 'translate-y-[40px] group-hover:translate-y-0'}
                                    `}
                                >
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white mb-4">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                                        {item.title}
                                    </h3>

                                    <p
                                        className={`
                                            text-gray-100 font-sans leading-relaxed text-sm md:text-base
                                            transition-all duration-500 delay-75 mb-5
                                            ${isActive
                                                ? 'opacity-100 max-h-40 translate-y-0'
                                                : 'opacity-0 max-h-0 translate-y-4 group-hover:opacity-100 group-hover:max-h-40 group-hover:translate-y-0'
                                            }
                                        `}
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