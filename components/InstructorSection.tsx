import Image from "next/image"
import { Check, CheckCircle, Flower2, Star, StarHalf } from "lucide-react"
import Link from "next/link"

const highlights = [
    "Personalized attention in every session",
    "Focus on breathwork, alignment, and mindfulness",
    "Holistic integration of yoga philosophy with daily life",
    "Special emphasis on stress management and emotional balance",
    "Beginner-friendly and progressive teaching structure",
]

export default function InstructorSection() {
    return (
        <section id="instructor" className="py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-primary text-xs font-bold uppercase tracking-widest font-sans mb-3">
                        MEET YOUR GUIDE
                    </p>
                    <h2 className="text-primary text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                        The Heart Behind YogaWithMaha
                    </h2>
                    <p className="text-muted text-lg font-sans leading-relaxed">
                        Led by internationally certified instructor Maha, creating a safe space where well-being starts on the mat and flows into every role we play.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="h-full flex flex-col items-center justify-between px-8">
                        <Image src="/about4.jpg" alt="Instructor" width={300} height={300} className='w-full rounded-4xl border-5 border-primary mb-6' />

                        <div className="flex flex-wrap justify-center md:justify-between gap-5 md:gap-0 w-full my-10 md:my-0 ">
                            <div className="text-center border-4 border-primary rounded-tl-[40px] rounded-br-[40px] px-4 py-2">
                                <p className="text-2xl font-bold text-primary">4+</p>
                                <p className="text-sm text-muted">Years Experience</p>
                            </div>
                            <div className="text-center border-4 border-primary rounded-tl-[40px] rounded-br-[40px] px-4 py-2">
                                <p className="text-2xl font-bold text-primary">5000+</p>
                                <p className="text-sm text-muted">Students Trained</p>
                            </div>
                            <div className="text-center border-4 border-primary rounded-tl-[40px] rounded-br-[40px] px-4 py-2">
                                <p className="text-2xl font-bold text-primary">1500+</p>
                                <p className="text-sm text-muted">Sessions Conducted</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 text-balance">
                            The Heart Behind YogaWithMaha
                        </h3> */}
                        <p className="text-foreground leading-relaxed mb-6">
                            YogaWithMaha is founded and led by Maha & Ashar, a dynamic couple dedicated to holistic wellness. As the lead guide, Maha is a passionate yoga practitioner and Internationally certified instructor (Yoga Alliance USA). She helps individuals reconnect with their body, mind, and breath. Her teaching philosophy blends traditional yogic wisdom with modern lifestyle needs, making yoga accessible, practical, and truly transformative. With a deep understanding of the pressures of modern life, Maha creates a safe space where well-being starts on the mat and flows into every role we play.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {highlights.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-foreground">
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-primary">
                                        <CheckCircle className="h-4 w-4" aria-hidden />
                                    </span>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-6 flex-col md:flex-row">
                            <button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 cursor-pointer w-full md:w-auto">
                                View Certificate
                            </button>
                            <Link href={''} className="text-primary hover:text-blue-500 hover:underline">View Yoga Alliance Registry</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
