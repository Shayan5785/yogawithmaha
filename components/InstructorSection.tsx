import Image from "next/image"

export default function InstructorSection() {
    return (
        <section id="instructor" className="py-12 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-primary text-[32px] font-semibold uppercase tracking-wide mb-12">
                    Meet Maha
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="h-full flex flex-col items-center justify-between ">
                        <Image src="/instructor.png" alt="Instructor" width={300} height={300} className='mx-auto' />

                        <div className="flex flex-wrap justify-center gap-6 my-10 md:my-0">
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
                    </div>
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 text-balance">
                            The Heart Behind YogaWithMaha
                        </h3>
                        <p className="text-foreground leading-relaxed mb-4">
                            Maha Ashar is an internationally certified Yoga Trainer from Yoga Alliance, USA, and the soul behind YogaWithMaha—a space created to inspire balance, strength, and mindful living. A mother, professional, and lifelong learner, Maha brings real-life experience, empathy, and authenticity into her teaching.
                        </p>
                        <p className="text-foreground leading-relaxed mb-6">
                            With a strong background in banking and technology, Maha understands the pressures of modern life—the long hours, constant demands, and emotional fatigue that often disconnect us from our wellbeing. Yoga became her anchor, transforming not only her body but her mindset, energy, and purpose.
                            As a proud mother of two, Maha believes wellbeing starts at home and flows into every role we play in life. Her approach to yoga is practical, inclusive, and deeply human—designed for real people, real challenges, and real transformation.
                        </p>
                        <p className="text-foreground leading-relaxed mb-6">
                            Through YogaWithMaha, her mission is simple yet powerful:
                            to help individuals reconnect with themselves, improve their lifestyle, and cultivate physical, mental, and emotional wellbeing. Maha doesn’t just teach yoga, she guides people toward a healthier, more conscious, and more fulfilled way of living.
                        </p>
                        <button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6">
                            View Certificate
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
