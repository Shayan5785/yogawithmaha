'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
    HelpCircle,
    LayoutGrid,
    Hand,
    Sparkles,
    FileText,
    PlusCircle,
    ChevronDown,
    SearchX,
    Mail,
    MessageCircle
} from 'lucide-react';

// --- Data Configuration ---
const categories = [
    { id: 'all', label: 'All Questions', icon: <LayoutGrid className="w-5 h-5" /> },
    { id: 'beginners', label: 'New Students', icon: <Hand className="w-5 h-5" /> },
    { id: 'classes', label: 'Classes & Styles', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'policies', label: 'Studio Policies', icon: <FileText className="w-5 h-5" /> },
];

const faqs = [
    {
        id: 1,
        question: "I’ve never done yoga before. Is that okay?",
        answer: "Absolutely! My classes are designed to be inclusive for all levels. For new students, I recommend starting with the 'Gentle Flow' or 'Hatha Basics' classes, where we break down poses slowly and focus on alignment. No prior experience is needed—just an open mind!",
        category: 'beginners'
    },
    {
        id: 2,
        question: "Do I need to be flexible to practice yoga?",
        answer: "Not at all. This is the most common myth about yoga! You don't do yoga because you are flexible; you do yoga to become flexible (and strong, and balanced). We work with where your body is today using props and modifications.",
        category: 'beginners'
    },
    {
        id: 3,
        question: "What should I wear to class?",
        answer: "Wear clothing that allows you to move freely and breathe easily. Leggings, joggers, or shorts coupled with a fitted t-shirt or tank top work best. You want to avoid anything too baggy that might get in the way during inversions (like Downward Dog).",
        category: 'beginners' // Also fits logistics, but putting here for simplicity
    },
    {
        id: 4,
        question: "What is the difference between Vinyasa and Yin?",
        answer: "Vinyasa is a dynamic, active practice where we link breath with movement, flowing from one pose to the next. It builds heat and strength. Yin is a slower, meditative practice where we hold passive poses for 3-5 minutes to target deep connective tissues and calm the nervous system.",
        category: 'classes'
    },
    {
        id: 5,
        question: "Do you offer private sessions?",
        answer: "Yes, I offer 1-on-1 private sessions tailored to your specific goals, injuries, or schedule. These can be held at the studio, in your home, or online via Zoom. Please contact me directly for rates and availability.",
        category: 'classes'
    },
    {
        id: 6,
        question: "How early should I arrive?",
        answer: "Please try to arrive 10-15 minutes before class starts. This gives you plenty of time to check in, set up your mat, use the restroom, and settle into the space without rushing.",
        category: 'policies'
    },
    {
        id: 7,
        question: "Do I need to bring my own mat?",
        answer: "I encourage you to bring your own mat for hygiene reasons. However, we do have high-quality studio mats available for rent ($2) if you forget yours. Blocks, straps, and bolsters are provided free of charge.",
        category: 'policies'
    },
    {
        id: 8,
        question: "What is your cancellation policy?",
        answer: "We require a 24-hour notice for cancellations to receive a full refund or class credit. Cancellations made within 24 hours of the class start time will be charged the full drop-in rate.",
        category: 'policies'
    },
    {
        id: 9,
        question: "I have an injury. Can I still come?",
        answer: "Usually, yes! However, please consult your doctor first. Before class begins, please inform me of your injury so I can provide safe modifications or tell you which poses to avoid. Listen to your body always.",
        category: 'policies'
    }
];

const FaqSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Filter Logic
    const filteredFaqs = activeCategory === 'all'
        ? faqs
        : faqs.filter(faq => faq.category === activeCategory);

    const toggleFaq = (id: number) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <section className='relative'>

            <div className="relative pt-32 pb-20 px-4 md:px-12 text-center overflow-hidden bg-background">
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 p-2 rounded-full bg-secondary text-primary mb-4 pr-4">
                        <span className="bg-primary/10 p-1 rounded-full">
                            <HelpCircle className="w-4 h-4" />
                        </span>
                        <span className="text-sm font-semibold tracking-wide uppercase">Help Center</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                        Frequently Asked <span className="text-primary underline decoration-secondary decoration-4 underline-offset-4">Questions</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                        Whether you're a complete beginner or an experienced yogi, find answers to common questions about my classes, philosophy, and studio policies.
                    </p>
                </div>

                {/* Decorative Background Element */}
                <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5 pointer-events-none">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                </div>
            </div>

            <div className="flex-grow w-full max-w-6xl mx-auto px-4 md:px-8 pb-24 grid md:grid-cols-12 gap-12">

                {/* Left Sidebar: Categories & Visual */}
                <aside className="md:col-span-4 lg:col-span-3 space-y-8">
                    {/* Filter Controls */}
                    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border sticky top-32">
                        <h3 className="text-foreground font-bold mb-4 text-lg">Browse Topics</h3>
                        <div className="space-y-2 flex flex-col">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`w-full text-left px-5 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 font-medium border border-transparent 
                    ${activeCategory === cat.id
                                            ? 'bg-secondary text-primary'
                                            : 'hover:bg-secondary/50 hover:text-primary text-muted bg-background'
                                        }`}
                                >
                                    {cat.icon}
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Right Content: Accordion */}
                <div className="md:col-span-8 lg:col-span-9">
                    <div className="space-y-4">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq) => {
                                const isOpen = openFaq === faq.id;

                                return (
                                    <div
                                        key={faq.id}
                                        className="group bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-border overflow-hidden"
                                    >
                                        {/* Header */}
                                        <button
                                            onClick={() => toggleFaq(faq.id)}
                                            className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                        >
                                            <div className="flex items-start gap-4">
                                                <PlusCircle
                                                    className={`mt-1 shrink-0 transition-colors ${isOpen ? 'text-primary' : 'text-muted-foreground'}`}
                                                    size={24}
                                                />
                                                <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                                                    {faq.question}
                                                </span>
                                            </div>
                                            <ChevronDown
                                                className={`text-muted shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                            />
                                        </button>

                                        {/* Content */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <div className="px-6 pb-6 pt-0 pl-16">
                                                <p className="text-muted leading-relaxed border-l-2 border-border pl-4">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            /* Empty State */
                            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in">
                                <SearchX className="w-16 h-16 text-muted mb-4" />
                                <p className="text-muted text-lg">No questions found in this category.</p>
                                <button
                                    onClick={() => setActiveCategory('all')}
                                    className="mt-4 text-primary font-semibold hover:underline"
                                >
                                    View all questions
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer / CTA */}
            <div className="bg-secondary/30 py-16 px-4">
                <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden border border-border">
                    <div className="w-full md:w-2/3 relative z-10">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-4">Still have questions?</h2>
                        <p className="text-muted mb-8">
                            I'm here to help you on your wellness journey. If you couldn't find what you were looking for, feel free to reach out directly.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition shadow-md flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                Contact Me
                            </a>
                            <a href="#" className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-secondary transition flex items-center gap-2">
                                <MessageCircle className="w-4 h-4" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 flex justify-center relative z-10">
                        <div className="w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-full flex items-center justify-center shadow-inner">
                            <Image src="/flowers.png" width={120} height={120} alt='' className='bg-red'/>

                            {/* <Sparkles className="w-16 h-16 text-primary opacity-80" /> */}
                        </div>
                    </div>

                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary to-transparent rounded-bl-full -z-0 pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;