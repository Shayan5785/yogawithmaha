import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function InstructorSection() {
    return (
        <section className="py-12 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-primary text-[32px] font-semibold uppercase tracking-wide mb-12">
                    Meet Your Guide
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <Image src="/instructor.png" alt="Instructor" width={300} height={300} className='mx-auto' />
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 text-balance">
                            Finding Stillness in a Moving World
                        </h3>
                        <p className="text-foreground leading-relaxed mb-4">
                            I am Maha, RYT-500 certified instructor dedicated to the art of Yoga and the philosophy behind it. It is not about touching your toes, but what you learn on the way down.
                        </p>
                        <p className="text-foreground leading-relaxed mb-6">
                            With over a decade of experience in Hatha and Vinyasa, I provide a sanctuary for students of all levels to breathe, restore, and realign their mind, body, and spirit.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 mb-8">
                            <div className="text-center border-4 border-primary rounded-tl-[60px] rounded-br-[60px] p-6">
                                <p className="text-2xl font-bold text-primary">10+</p>
                                <p className="text-sm text-muted">Years Experience</p>
                            </div>
                            <div className="text-center border-4 border-primary rounded-tl-[60px] rounded-br-[60px] p-6">
                                <p className="text-2xl font-bold text-primary">500+</p>
                                <p className="text-sm text-muted">Students Trained</p>
                            </div>
                            <div className="text-center border-4 border-primary rounded-tl-[60px] rounded-br-[60px] p-6">
                                <p className="text-2xl font-bold text-primary">100+</p>
                                <p className="text-sm text-muted">Classes Taught</p>
                            </div>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6">
                            View Certificate
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
