'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle, Lock, Sun, Sparkles, X } from 'lucide-react';

// --- Data Configuration ---
const galleryItems = [
    {
        id: 0,
        title: 'The Practice Room',
        description: 'Spacious, light-filled, and equipped with premium mats.',
        // Grid spanning classes: Spans 2 cols and 2 rows on large screens
        className: 'lg:col-span-2 lg:row-span-2 h-64 md:h-full',
        src: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
        src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop', // Abstract locker/clean vibes
        alt: 'Changing Rooms',
    },
    {
        id: 3,
        title: 'Amenities',
        description: 'Complimentary tea, towels, and props.',
        className: 'lg:col-span-2 h-64 md:h-auto',
        src: 'https://images.unsplash.com/photo-1611077094612-943a95a2708b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Studio Amenities',
    },
];

const features = [
    { icon: <CheckCircle className="w-8 h-8 text-primary mb-2" />, label: 'Spotless Clean' },
    { icon: <Lock className="w-8 h-8 text-primary mb-2" />, label: 'Secure Lockers' },
    { icon: <Sun className="w-8 h-8 text-primary mb-2" />, label: 'Natural Light' },
    { icon: <Sparkles className="w-8 h-8 text-primary mb-2" />, label: 'Premium Mats' },
];

const SanctuaryGallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <>
            <section className="py-12 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center bg-background mb-6">
                        <h2 className="text-primary text-[32px] font-serif font-bold mb-2">
                            Experience the Space
                        </h2>
                        <p className="text-muted text-lg mb-12">
                            We've curated a peaceful, pristine environment designed to help you disconnect from the noise and reconnect with yourself. Take a look inside.
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[500px]">
                        {galleryItems.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedImage(item.id)}
                                className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-card ${item.className}`}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-white font-serif text-xl md:text-2xl font-bold">
                                        {item.title}
                                    </span>
                                    <p className="text-gray-200 text-sm mt-1">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Features Bar */}
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="p-4 bg-card rounded-xl shadow-sm border border-border flex flex-col items-center justify-center"
                            >
                                {feature.icon}
                                <p className="font-semibold text-muted">{feature.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox / Modal */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors">
                        <X className="w-10 h-10" />
                    </button>

                    {/* Large Image */}
                    <div className="relative w-full max-w-5xl h-[80vh] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={galleryItems[selectedImage].src}
                            alt={galleryItems[selectedImage].alt}
                            fill
                            className="object-contain"
                            sizes="100vw"
                        />
                        {/* Caption inside modal */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-center">
                            <h3 className="text-2xl font-serif">{galleryItems[selectedImage].title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SanctuaryGallery;