import {
    User, Users, Briefcase, Sparkles,
    Clock, MapPin, Video, CheckCircle2
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const offerings = [
    {
        id: "personal",
        title: "Personal Coaching",
        description: "One-on-one tailored sessions focused entirely on your unique body, fitness level, and personal wellness goals. We move at your pace to ensure deep healing and alignment.",
        icon: User,
        femaleOnly: true,
        features: [
            "Highly customized to your health conditions",
            "Flexible scheduling options",
            "Private Practice Room environment",
        ],
    },
    {
        id: "group",
        title: "Group Classes",
        description: "Small, intimate classes designed to ensure personalized attention while building a supportive, uplifting community. Perfect for all levels.",
        icon: Users,
        femaleOnly: true,
        features: [
            "Limited to 5-15 students per class",
            "Batch-based structured courses available",
            "Drop-in sessions (limited availability)",
        ],
    },
    {
        id: "corporate",
        title: "Corporate Wellness",
        description: "Bring mindfulness to the workplace. Tailored sessions designed to reduce stress, improve posture, and boost team morale in high-pressure environments.",
        icon: Briefcase,
        femaleOnly: false,
        features: [
            "For corporate teams & organizations",
            "Stress & anxiety management focus",
            "On-site or virtual sessions",
        ],
    },
    {
        id: "workshops",
        title: "Workshops & Retreats",
        description: "Deepen your practice with our specialized events, designed for intensive healing, learning, and lifestyle balance.",
        icon: Sparkles,
        femaleOnly: false,
        features: [
            "Weekend wellness workshops",
            "Corporate wellness retreats",
            "Special meditation intensives & seasonal programs",
        ],
    },
]

export default function OfferingsTabs() {
    return (
        <section id="offerings" className="py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-primary text-xs font-bold uppercase tracking-widest font-sans mb-3">
                        FIND YOUR FLOW
                    </p>
                    <h2 className="text-primary text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                        Our Offerings
                    </h2>
                    <p className="text-muted text-lg font-sans leading-relaxed">
                        Whether you are a complete beginner or looking for holistic fitness, we have a structured practice designed to help you reconnect with yourself.
                    </p>
                </div>

                <Tabs defaultValue="personal" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-secondary/50 rounded-xl h-auto!">
                        {offerings.map((offering) => (
                            <TabsTrigger
                                key={offering.id}
                                value={offering.id}
                                className="py-3 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-lg"
                            >
                                {offering.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {offerings.map((offering) => {
                        const Icon = offering.icon
                        return (
                            <TabsContent key={offering.id} value={offering.id} className="mt-0 outline-none">
                                <Card className="border-border/50 shadow-sm overflow-hidden !py-0">
                                    <div className="md:flex">
                                        {/* Left Info Panel */}
                                        <div className="md:w-1/2 p-8 md:p-10 bg-secondary/30">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="p-3 bg-primary/10 rounded-xl">
                                                    <Icon className="w-6 h-6 text-primary" />
                                                </div>
                                                {offering.femaleOnly && (
                                                    <Badge variant="secondary" className="bg-fuchsia-100 text-fuchsia-800 hover:bg-fuchsia-100 border-none font-semibold">
                                                        Female Only
                                                    </Badge>
                                                )}
                                            </div>
                                            <h3 className="text-3xl font-serif mb-4">{offering.title}</h3>
                                            <p className="text-foreground/70 leading-relaxed mb-8">
                                                {offering.description}
                                            </p>

                                            {/* Quick Facts */}
                                            <div className="space-y-3 pt-6 border-t border-border/50">
                                                <div className="flex items-center gap-3 text-sm text-foreground/80">
                                                    <Clock className="w-4 h-4 text-primary" />
                                                    <span>35–40 Min Sessions</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm text-foreground/80">
                                                    <MapPin className="w-4 h-4 text-primary" />
                                                    <span>In-Studio (North Nazimabad)</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm text-foreground/80">
                                                    <Video className="w-4 h-4 text-primary" />
                                                    <span>Online via Zoom/Meet</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Features Panel */}
                                        <div className="md:w-1/2 p-8 md:p-10 bg-background flex flex-col justify-center">
                                            <h4 className="font-semibold text-lg mb-6">What to expect:</h4>
                                            <ul className="space-y-4">
                                                {offering.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-foreground/80">
                                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Card>
                            </TabsContent>
                        )
                    })}
                </Tabs>

            </div>
        </section>
    )
}








































// import {
//     User,
//     Users,
//     Briefcase,
//     Sparkles,
//     Clock,
//     MapPin,
//     Video,
//     CheckCircle2
// } from "lucide-react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { cn } from "@/lib/utils"

// const offerings = [
//     {
//         id: "personal",
//         title: "Personal Coaching",
//         description: "One-on-one tailored sessions focused entirely on your unique body, fitness level, and personal wellness goals.",
//         icon: User,
//         femaleOnly: true,
//         features: [
//             "Highly customized to your health conditions",
//             "Flexible scheduling options",
//             "Private Practice Room environment",
//         ],
//     },
//     {
//         id: "group",
//         title: "Group Classes",
//         description: "Small, intimate classes designed to ensure personalized attention while building a supportive community.",
//         icon: Users,
//         femaleOnly: true,
//         features: [
//             "Limited to 5–15 students per class",
//             "Batch-based structured courses available",
//             "Drop-in sessions (limited availability)",
//         ],
//     },
//     {
//         id: "corporate",
//         title: "Corporate Wellness",
//         description: "Bring mindfulness to the workplace. Tailored sessions designed to reduce stress, improve posture, and boost team morale.",
//         icon: Briefcase,
//         femaleOnly: false,
//         features: [
//             "For corporate teams & organizations",
//             "Stress & anxiety management focus",
//             "On-site or virtual sessions",
//         ],
//     },
//     {
//         id: "workshops",
//         title: "Workshops & Retreats",
//         description: "Deepen your practice with our specialized events, designed for intensive healing, learning, and lifestyle balance.",
//         icon: Sparkles,
//         femaleOnly: false,
//         features: [
//             "Weekend wellness workshops",
//             "Corporate wellness retreats",
//             "Special meditation intensives & seasonal programs",
//         ],
//     },
// ]

// const stylesAndFocus = [
//     "Hatha Yoga", "Vinyasa Flow", "Power Yoga", "Pranayama (Breathwork)",
//     "Beginner Programs", "Meditation & Mindfulness", "Stress & Anxiety Relief",
//     "Women's Wellness & Hormonal Balance", "Back Pain & Posture Correction"
// ]

// export default function OfferingsSection() {
//     return (
//         <section id="offerings" className="py-24 bg-background">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                 {/* Section Header */}
//                 <div className="text-center max-w-3xl mx-auto mb-16">
//                     <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Find Your Flow</p>
//                     <h2 className="text-4xl font-serif text-foreground mb-6">Our Offerings</h2>
//                     <p className="text-muted-foreground text-lg">
//                         Whether you are a complete beginner or looking for holistic fitness, we have a structured practice designed to help you reconnect with yourself.
//                     </p>
//                 </div>

//                 {/* Global Highlights Bar */}
//                 <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
//                     <div className="flex items-center gap-3 text-foreground/80">
//                         <Clock className="w-5 h-5 text-primary" />
//                         <span className="font-medium">35–40 Min Sessions</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-foreground/80">
//                         <MapPin className="w-5 h-5 text-primary" />
//                         <span className="font-medium">In-Studio (North Nazimabad)</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-foreground/80">
//                         <Video className="w-5 h-5 text-primary" />
//                         <span className="font-medium">Online via Zoom/Meet</span>
//                     </div>
//                 </div>

//                 {/* Offerings Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
//                     {offerings.map((offering) => {
//                         const Icon = offering.icon
//                         return (
//                             <Card key={offering.id} className="border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
//                                 <CardHeader className="pb-4">
//                                     <div className="flex justify-between items-start mb-4">
//                                         <div className="p-3 bg-primary/10 rounded-xl">
//                                             <Icon className="w-6 h-6 text-primary" />
//                                         </div>
//                                         {offering.femaleOnly && (
//                                             <Badge variant="secondary" className="bg-fuchsia-100 text-fuchsia-800 hover:bg-fuchsia-100 border-none font-semibold">
//                                                 Female Only
//                                             </Badge>
//                                         )}
//                                     </div>
//                                     <CardTitle className="text-2xl font-serif">{offering.title}</CardTitle>
//                                     <CardDescription className="text-base text-foreground/70 mt-2 leading-relaxed">
//                                         {offering.description}
//                                     </CardDescription>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <ul className="space-y-3">
//                                         {offering.features.map((feature, i) => (
//                                             <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
//                                                 <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
//                                                 <span>{feature}</span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </CardContent>
//                             </Card>
//                         )
//                     })}
//                 </div>

//                 {/* Styles & Focus Areas Cloud */}
//                 <div className="text-center bg-secondary/50 rounded-3xl p-8 md:p-12">
//                     <h3 className="text-xl font-serif mb-6 text-foreground">Styles & Focus Areas</h3>
//                     <div className="flex flex-wrap justify-center gap-3">
//                         {stylesAndFocus.map((style) => (
//                             <Badge key={style} variant="outline" className="text-sm py-1.5 px-4 bg-background/50 border-primary/20 text-foreground/80">
//                                 {style}
//                             </Badge>
//                         ))}
//                     </div>
//                     <p className="text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
//                         *Students with serious medical conditions should consult a physician before joining. Modifications are always provided, but yoga is a supportive wellness practice, not a replacement for medical treatment.
//                     </p>
//                 </div>

//             </div>
//         </section>
//     )
// }