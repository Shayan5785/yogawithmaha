'use client';

import React from 'react';
import { Star, Quote, Users, Sparkles, ArrowRight } from 'lucide-react';

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
    name: "A Queen",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=A+Queen",
    text: "MAHA is an amazing yoga instructor — calm, patient, and truly inspiring. Her classes are always well-balanced, uplifting, and perfectly tailored to all levels..."
  },
  {
    id: 2,
    name: "A Rizvi",
    rating: 1,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=A+Rizvi",
    text: "I contacted but after one response didn’t receive answer to my query. Clear and timely communication is essential for good service. I was hoping to get some assistance regarding classes and timings."
  },
  {
    id: 3,
    name: "Afsheen Ashraf",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=Afsheen+Ashraf",
    text: "Thank you for being such a wonderful yoga teacher. You are very motivating and make everyone feel comfortable. I feel healthier and relaxed after every session."
  },
  {
    id: 4,
    name: "ammara kaleem",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=ammara+kaleem",
    text: ""
  },
  {
    id: 5,
    name: "anum khurram",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=anum+khurram",
    text: "Amazing experience! The instructor's guidance was top-notch, and the flow was perfect. Felt relaxed. Looking forward to the next session."
  },
  {
    id: 6,
    name: "Binish Umair",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=Binish+Umair",
    text: "Best best best yoga instructor. She sees you and makes sure you feel better at the end of the session!! Highly recommended"
  },
  {
    id: 7,
    name: "Bushra Waheed",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=Bushra+Waheed",
    text: "I began practicing yoga with Maha after attending one of her sessions at my gym. Although I’ve been working out for quite some time, her classes were equally challenging and refreshing in a completely different way."
  },
  {
    id: 8,
    name: "Erum Tariq",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=Erum+Tariq",
    text: "Maha’s yoga classes are absolutely superb! The atmosphere is so calming and the instructor is top notch . Highly recommended!"
  },
  {
    id: 9,
    name: "Ghazna Usman",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=Ghazna+Usman",
    text: "I have started yoga with Maha and I m loving every moment of it.. she is the best instructor focusing on every single person."
  },
  {
    id: 10,
    name: "Huma Mohiuddin",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=Huma+Mohiuddin",
    text: "Maha is an excellent teacher. I always look forward for her class she has eyes on all her students and takes good care of postures. We have a very healthy environment in our class 😍"
  },
  {
    id: 11,
    name: "Maheen Farhan",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=Maheen+Farhan",
    text: "We recently hosted a Chair Yoga session at our organization, and having her with us was an absolute delight! Not only was the session incredibly informative, but her energy and vibrant personality truly brought it to life."
  },
  {
    id: 12,
    name: "Mahnoor Ahsan",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=Mahnoor+Ahsan",
    text: "Yoga with Maha is a great choice for anyone from beginners to intermediate practitioners. Maha is skilled and professional, and she makes it easy to learn and improve."
  },
  {
    id: 13,
    name: "Misbah Lakhia",
    rating: 4,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=Misbah+Lakhia",
    text: "Maha .. your session was absolute therapy .. Rejuvenating experience .. Positive and calm vibes were another plus .."
  },
  {
    id: 14,
    name: "Nida Kizilbash",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=Nida+Kizilbash",
    text: "It's a place that allows me to set aside my usual routine tasks and responsibilities aside for an hour. In that hour I am just with myself; rejuvenating, relaxing and unwinding."
  },
  {
    id: 15,
    name: "Noshin Waseem",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=Noshin+Waseem",
    text: "Very calm and refreshing. Much needed after our monotonous routines. Well organised and highly recommended! 🌊🤍"
  },
  {
    id: 16,
    name: "Ruqya K",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=Ruqya+K",
    text: "Maha has been my yoga instructor for the past two years. Not only she is a good instructor, she also explains the anatomy behind every pose with its benefits."
  },
  {
    id: 17,
    name: "sharmeen hussain",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=sharmeen+hussain",
    text: "Yoga with Maha is a fantastic experience. I’m really enjoying the classes. Much needed me-time to break the demanding schedule of the week."
  },
  {
    id: 18,
    name: "Smart Upgrade Official",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=Smart+Upgrade+Official",
    text: "Maha’s yoga classes are deeply relaxing and truly rejuvenating. Her calm energy, thoughtful guidance, and soothing voice helps me release stress and feel more connected to my body."
  },
  {
    id: 19,
    name: "Warda Jawed",
    rating: 5,
    role: "",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=Warda+Jawed",
    text: "I love how Maha push my limits and motivate me I really never thought yoga would shape my body but it is all due to Maha mantra and I m glad how she works on my body ."
  },
];

const TestimonialsSection = () => {
    return (
        <section id="stories" className="py-20 sm:py-32 bg-secondary/20 relative overflow-hidden">

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
                                                    {review.text}
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
