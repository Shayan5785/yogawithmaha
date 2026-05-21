import Image from "next/image"
import {
  Wind,
  Move,
  Dumbbell,
  Moon,
  Scale,
  Brain,
  Heart,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

const benefits: {
  title: string
  desc: string
  icon: LucideIcon
}[] = [
    {
      title: "Stress Relief",
      desc: "Reduce anxiety and bring emotional balance through breathwork.",
      icon: Wind,
    },
    {
      title: "Improved Flexibility",
      desc: "Enhance body mobility and reduce stiffness with guided stretching.",
      icon: Move,
    },
    {
      title: "Strength & Posture",
      desc: "Build core strength and improve spinal alignment.",
      icon: Dumbbell,
    },
    {
      title: "Better Sleep Quality",
      desc: "Calm the nervous system for deeper, restful sleep.",
      icon: Moon,
    },
    {
      title: "Weight Management",
      desc: "Promote healthy metabolism through active yoga flows.",
      icon: Scale,
    },
    {
      title: "Mindfulness & Focus",
      desc: "Improve concentration and mental clarity in daily life.",
      icon: Brain,
    },
    {
      title: "Emotional Healing",
      desc: "Release stored stress and improve inner balance.",
      icon: Heart,
    },
    {
      title: "Energy Boost",
      desc: "Feel more active, refreshed, and energized throughout the day.",
      icon: Zap,
    },
  ]

// Manually plotted coordinates for perfect visual spacing
const positions = [
  { x: 0, y: -290 },    // 0: Top
  { x: 310, y: -150 },  // 1: Top Right
  { x: 420, y: 0 },     // 2: Right
  { x: 310, y: 150 },   // 3: Bottom Right
  { x: 0, y: 290 },     // 4: Bottom
  { x: -310, y: 150 },  // 5: Bottom Left
  { x: -420, y: 0 },    // 6: Left
  { x: -310, y: -150 }, // 7: Top Left
]

function getBenefitAlignment(index: number) {
  // Top
  if (index === 0) {
    return { container: "flex-col-reverse items-center", text: "text-center mb-3" }
  }
  // Bottom
  if (index === 4) {
    return { container: "flex-col items-center", text: "text-center mt-3" }
  }
  // Right side
  if (index > 0 && index < 4) {
    return { container: "flex-row items-center", text: "text-left" }
  }
  // Left side
  return { container: "flex-row-reverse items-center", text: "text-right" }
}

function BenefitIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    // <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10">
    <Icon className="h-16 w-16 text-primary" aria-hidden />
    // </div>
  )
}

export default function BenefitsSection() {
  return (
    <section id="benefits" className="bg-secondary py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary text-xs font-bold uppercase tracking-widest font-sans mb-3">
            HOLISTIC BENEFITS
          </p>
          <h2 className="text-primary text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
            Transform Your Life
          </h2>
          <p className="text-muted text-lg font-sans leading-relaxed">
            Discover how a consistent yoga practice can elevate your physical strength, mental clarity, and emotional resilience.
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="relative mx-auto w-[300px] mb-24">
            <Image
              src="/Transform Your Life.jpg"
              alt="Benefits"
              width={225}
              height={200}
              className="relative bottom-5 z-10 mx-auto"
            />
            <div className="w-[310px] h-[255px] rounded-[100%] bg-[#CCC6F8] absolute -bottom-10 -left-4" />
          </div>

          <div className="space-y-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="flex gap-5 items-center">
                  <BenefitIcon icon={Icon} />
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary text-xl leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground/80 mt-1">{benefit.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Desktop Layout — Perfect Visual Circle */}
        <div className="hidden md:block relative mx-auto h-[720px] max-w-6xl">
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[300px]">
              <Image
                src="/Transform Your Life.jpg"
                alt="Benefits"
                width={225}
                height={200}
                className="relative bottom-5 z-10 mx-auto"
              />
              <div className="h-[150px] rounded-[100%] bg-[#CCC6F8] absolute bottom-0 w-full" />
            </div>
          </div>

          {benefits.map((benefit, index) => {
            const x = positions[index].x
            const y = positions[index].y
            const alignment = getBenefitAlignment(index)
            const Icon = benefit.icon

            return (
              <div
                key={benefit.title}
                className="absolute z-20 w-72 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                <div className={cn("flex gap-4", alignment.container)}>
                  <BenefitIcon icon={Icon} />
                  <div className={cn("min-w-0", alignment.text)}>
                    <h3 className="font-semibold text-primary text-lg leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed mt-1">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}