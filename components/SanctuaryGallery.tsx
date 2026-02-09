'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckCircle, Lock, Sun, Sparkles, X, ZoomIn } from 'lucide-react';

const galleryItems = [
    {
        id: 0,
        title: 'The Practice Room',
        description: 'Spacious, light-filled, and equipped with premium mats.',
        // Bento Grid Logic: Spans 2 cols & 2 rows on large screens
        className: 'md:col-span-2 md:row-span-2 h-64 md:h-full',
        src: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=880&auto=format&fit=crop',
        alt: 'Main Yoga Studio Floor',
    },
    {
        id: 1,
        title: 'Reception',
        description: 'A warm welcome awaits you.',
        className: 'h-64 md:h-auto',
        src: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1000&auto=format&fit=crop',
        alt: 'Reception Area',
    },
    {
        id: 2,
        title: 'Changing Suites',
        description: 'Secure lockers & private changing areas.',
        className: 'h-64 md:h-auto',
        src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
        alt: 'Changing Rooms',
    },
    {
        id: 3,
        title: 'Amenities',
        description: 'Complimentary tea, towels, and props.',
        className: 'md:col-span-2 h-64 md:h-auto', // Span 2 cols to fill gap
        src: 'https://images.unsplash.com/photo-1611077094612-943a95a2708b?q=80&w=1169&auto=format&fit=crop',
        alt: 'Studio Amenities',
    },
];

const features = [
    { icon: <CheckCircle className="w-6 h-6 text-primary mb-2" />, label: 'Spotless Clean' },
    { icon: <Lock className="w-6 h-6 text-primary mb-2" />, label: 'Secure Lockers' },
    { icon: <Sun className="w-6 h-6 text-primary mb-2" />, label: 'Natural Light' },
    { icon: <Sparkles className="w-6 h-6 text-primary mb-2" />, label: 'Premium Mats' },
];

const SanctuaryGallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    // 1. UX FIX: Lock body scroll when Modal is open
    useEffect(() => {
        if (selectedImage !== null) {
            document.body.style.overflow = 'hidden'; // Freeze background
        } else {
            document.body.style.overflow = 'unset'; // Release background
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedImage]);

    // 2. UX FIX: Close on Escape Key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section id="gallery" className="py-16 sm:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-primary text-xs font-bold uppercase tracking-widest font-sans mb-3">
                        Inside the Studio
                    </p>
                    <h2 className="text-primary text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                        Experience the Space
                    </h2>
                    <p className="text-muted text-lg font-sans leading-relaxed">
                        We've curated a peaceful, pristine environment designed to help you disconnect from the noise and reconnect with yourself.
                    </p>
                </div>

                {/* Gallery Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] md:h-[500px] mb-12">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedImage(item.id)}
                            className={`
                                group relative overflow-hidden rounded-2xl cursor-pointer bg-muted
                                shadow-sm hover:shadow-xl transition-all duration-300
                                ${item.className}
                            `}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <ZoomIn className="text-white w-8 h-8 mb-auto opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0" />
                                <span className="text-white font-heading text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </span>
                                <p className="text-gray-200 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-card rounded-2xl shadow-sm border border-border/50 flex flex-col items-center justify-center text-center hover:border-primary/20 transition-colors"
                        >
                            <div className="p-3 bg-primary/5 rounded-full mb-3">
                                {feature.icon}
                            </div>
                            <p className="font-semibold text-foreground text-sm md:text-base font-sans">
                                {feature.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Modal */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md z-50">
                        <X className="w-6 h-6" />
                    </button>

                    {/* Large Image Container */}
                    <div
                        className="relative w-full max-w-5xl h-[80vh] rounded-lg overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                    >
                        <Image
                            src={galleryItems[selectedImage].src}
                            alt={galleryItems[selectedImage].alt}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            quality={90}
                            priority
                        />

                        {/* Caption Bar */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white text-center">
                            <h3 className="text-2xl font-heading mb-1">{galleryItems[selectedImage].title}</h3>
                            <p className="text-white/80 text-sm">{galleryItems[selectedImage].description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SanctuaryGallery;