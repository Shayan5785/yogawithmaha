import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <section id="home" className="bg-secondary py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Text Content */}
                    <div>
                        <p className="text-primary text-[12px] font-extrabold uppercase tracking-wide mb-2 py-1 px-4 bg-primary/10 rounded-full inline-block font-sans">
                            Your Sanctuary for Peace & Wellness
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-4 font-heading">
                            Prioritize Your <span className="text-primary italic">Well-being—</span>
                            <br />
                            <span className="text-foreground">Step Onto the Mat.</span>
                        </h1>
                        <p className="text-foreground text-lg mb-8 max-w-lg leading-relaxed font-sans">
                            Certified Yoga Alliance Teacher offering Online & In-studio classes designed to help you reconnect with your body and mind.
                        </p>

                        {/* Buttons with Links */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#offerings">
                                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base shadow-md hover:translate-y-[-2px] transition-all">
                                    View Class Schedule
                                </Button>
                            </a>
                            <a href="#contact">
                                <Button
                                    variant="outline"
                                    className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/10 rounded-full px-8 py-6 text-base bg-transparent"
                                >
                                    Corporate Inquiries
                                </Button>
                            </a>
                        </div>

                        {/* Location Tag */}
                        <p className="text-muted text-sm mt-6 flex items-center gap-2 font-medium">
                            <MapPin className='text-primary w-5 h-5' />
                            Block F, North Nazimabad, Karachi, Pakistan.
                        </p>
                    </div>

                    {/* Hero Image */}
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                            <Image
                                src="/hero.jpg"
                                width={500}
                                height={450}
                                alt='Yoga Instructor Maha in a pose'
                                className='w-full h-[450px] object-cover object-center'
                                priority // Vital for loading speed
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 right-[-10px] md:right-[-20px] bg-white rounded-xl p-4 shadow-xl border border-primary/10 animate-in slide-in-from-bottom-4 duration-1000">
                            <p className="text-sm font-bold text-primary">New Batches</p>
                            <p className="text-xs">Starting this week</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}