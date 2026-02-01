'use client';

import React from 'react';
import { Star, Quote, Heart, Users, Sparkles, ArrowRight } from 'lucide-react';

// Shadcn UI Imports
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// --- Data Configuration (Defined Statically for SSR) ---
const stats = [
    { id: 1, value: '500+', label: 'Happy Students', icon: <Users className="w-5 h-5 text-primary" /> },
    { id: 2, value: '4.9', label: 'Average Rating', icon: <Star className="w-5 h-5 text-primary" /> },
    { id: 3, value: '12+', label: 'Years Experience', icon: <Sparkles className="w-5 h-5 text-primary" /> },
];

const reviews = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        role: 'Vinyasa Regular',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        text: "I've tried many studios in the city, but this one feels like home. The instructor's attention to alignment changed my practice completely.",
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Beginner Yogi',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        text: "As a guy who can barely touch his toes, I was intimidated. But the 'Basics' class was welcoming and judgment-free. My back pain has virtually disappeared.",
    },
    {
        id: 3,
        name: 'Emma Thompson',
        role: 'Private Sessions',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        text: "The private sessions are a game changer. We tailored a routine specifically for my runner's knee, and the recovery has been incredible.",
    },
    {
        id: 4,
        name: 'Priya Patel',
        role: 'Yin & Meditation',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        text: "This space is my sanctuary. The Yin classes on Friday evenings are the only way I can truly decompress after a stressful work week.",
    },
    {
        id: 5,
        name: 'David Rossi',
        role: 'Workshop Attendee',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
        rating: 4,
        text: "The weekend workshops are intense in the best way possible. Deep dives into philosophy and advanced postures that you don't get in a standard class.",
    },
    {
        id: 6,
        name: 'Jessica Alva',
        role: 'Online Student',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        text: "I moved away last year but still join the online streams. The audio quality is perfect, and I still feel connected to the community.",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-20 sm:py-32 bg-secondary/20 relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Content */}
                <div className='flex flex-col items-center'>
                    <div className="text-primary font-bold tracking-widest uppercase text-xs border border-primary/20 px-3 py-1 rounded-full bg-background/50 backdrop-blur-sm">
                        Community Stories
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-6 mb-4">
                        Kind Words from <span className="text-primary italic">Our Tribe</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We don't just teach yoga; we build community.
                    </p>

                    {/* Note: Carousel controls are usually integrated into the component, 
              but we will render the Carousel with its own controls below. */}
                    {/* <div className="hidden md:block">
                        <Button variant="ghost" className="text-primary gap-2 hover:bg-primary/10 hover:text-primary">
                            Read all reviews <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div> */}
                </div>

                {/* --- SHADCN CAROUSEL --- */}
                <div className="w-full">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 pb-4">
                            {reviews.map((review) => (
                                <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3 h-full">
                                    <div className="h-full p-1">
                                        {/* Shadcn Card */}
                                        <Card className="h-full border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                                            <CardContent className="p-8 flex flex-col h-full relative z-10">

                                                {/* Quote Icon */}
                                                <div className="absolute top-6 right-8 text-primary/5">
                                                    <Quote size={80} fill="currentColor" stroke="none" />
                                                </div>

                                                {/* Stars */}
                                                <div className="flex gap-1 mb-6">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={16}
                                                            className={`${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted/30'}`}
                                                        />
                                                    ))}
                                                </div>

                                                {/* Text */}
                                                <p className="text-foreground/80 leading-relaxed mb-8 flex-grow font-medium relative z-10 line-clamp-4">
                                                    "{review.text}"
                                                </p>

                                                {/* User Profile */}
                                                <div className="flex items-center gap-4 pt-6 border-t border-border mt-auto">
                                                    <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
                                                        <AvatarImage src={review.image} alt={review.name} className="object-cover" />
                                                        <AvatarFallback className="bg-primary/10 text-primary font-bold">
                                                            {review.name.charAt(0)}
                                                        </AvatarFallback>
                                                    </Avatar>

                                                    <div>
                                                        <h4 className="font-serif font-bold text-foreground text-lg leading-none mb-1">
                                                            {review.name}
                                                        </h4>
                                                        <p className="text-xs text-primary font-bold uppercase tracking-wide">
                                                            {review.role}
                                                        </p>
                                                    </div>
                                                </div>

                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Custom Navigation Controls (Bottom-Right aligned on Desktop, Centered on Mobile) */}
                        <div className="flex items-center justify-center md:justify-end gap-2 mt-8">
                            <CarouselPrevious className="static translate-y-0 translate-x-0 h-12 w-12 border-primary/20 text-primary hover:bg-primary hover:text-white" />
                            <CarouselNext className="static translate-y-0 translate-x-0 h-12 w-12 border-primary/20 text-primary hover:bg-primary hover:text-white" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;