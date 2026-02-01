import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className="bg-secondary py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div>
                        <p className="text-primary text-[12px] font-extrabold uppercase tracking-wide mb-2 py-1 px-4 bg-primary/10 rounded-full inline-block font-roboto!">
                            Your Sanctuary for Peace & Wellness
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-4">
                            Prioritize Your <span className="text-primary italic">Well-being—</span>
                            <br />
                            <span className="text-foreground">Step Onto the Mat.</span>
                        </h1>
                        <p className="text-foreground text-lg mb-8 max-w-lg leading-relaxed">
                            Certified Yoga Alliance Teacher offering Online & In-studio classes designed to help you reconnect with your body and mind.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base">
                                View Class Schedule
                            </Button>
                            <Button
                                variant="outline"
                                className="border-2 border-primary text-primary hover:bg-primary/10 rounded-full px-8 py-6 text-base bg-transparent"
                            >
                                Corporate Inquiries
                            </Button>
                        </div>
                        <p className="text-muted text-sm mt-6 flex items-center gap-2">
                            <MapPin className='text-primary' /> South Koramangala, Kharadi
                        </p>
                    </div>
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-lg">
                            <Image src="/hero.png" width={500} height={450} alt='hero image' className='w-full' />
                            {/* <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"> */}
                                {/* <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition">
                  <span className="text-primary ml-1">▶</span>
                </div> */}
                            {/* </div> */}
                        </div>
                        <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                            <p className="text-sm font-semibold text-foreground">New Batches</p>
                            <p className="text-xs text-muted">Starting this week</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
