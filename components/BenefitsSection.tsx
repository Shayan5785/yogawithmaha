import Image from "next/image"

export default function BenefitsSection() {
  const benefitsPair1 = [
    {
      title: 'Mind-Body Connection',
      icon: '/Mind-Body Connection.png',
      desc: "The mind-body connection refers to the powerful link between mental processes and physical health."
    },
    {
      title: 'Stress Reduction',
      icon: '/Stress Reduction.png',
      desc: "Stress reduction focuses on calming the mind and body to lower tension and anxiety."
    }
  ];

  const benefitsPair2 = [
    {
      title: 'Improved Mental Health',
      icon: '/Improved Mental Health.png',
      desc: "Improved mental health involves nurturing emotional well-being and cognitive clarity."
    },
    {
      title: 'Increased Energy and Vitality',
      icon: '/Increased Energy and Vitality.png',
      desc: "Increased energy and vitality result from optimizing physiological and mental efficiency."
    }
  ];

  const benefitsPair3 = [
    {
      title: 'Enhanced Concentration and Focus',
      icon: '/Enhanced Concentration and.png',
      desc: "Enhanced concentration and focus involve improving the brain's ability to sustain attention."
    },
    {
      title: 'Enhanced Flexibility and Endurance',
      icon: '/Enhanced Flexibility and.png',
      desc: "Enhanced flexibility and physical strength refer to improving the body's range of motion."
    }
  ];

  return (
    <section id="benefits" className="pt-24 pb-68 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-primary text-[32px] font-semibold uppercase tracking-wide mb-16">
          Transform Your Life
        </h2>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="relative mx-auto w-[300px] mb-24">
            <Image src="/Transform Your Life.png" alt="Benefits" width={280} height={250} className='relative z-1' />
            <div className="w-[310px] h-[255px] rounded-[100%] bg-[#CCC6F8] absolute -bottom-10 -left-4" />
          </div>

          {[...benefitsPair1, ...benefitsPair2, ...benefitsPair3].map((benefit) => (
            <div key={benefit.title} className="flex gap-5 mb-8 items-center">
              <Image
                src={benefit.icon} alt={benefit.title}
                width={40} height={40}
                className="w-[55px] h-[55px]"
              />
              <div className="w-80">
                <h3 className="font-semibold text-primary text-xl ">{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:flex justify-center items-center relative">
          <div className="absolute flex gap-[250px] top-0">
            {benefitsPair1.map((benefit, index) => (
              <div key={benefit.title} className="flex gap-5 items-center">
                <Image
                  src={benefit.icon} alt={benefit.title}
                  width={40} height={40}
                  className={`w-[55px] h-[55px] ${index == 0 ? "order-1" : ""}`}
                />
                <div className={`w-80 ${index == 0 ? "text-end" : ""}`}>
                  <h3 className="font-semibold text-primary text-xl ">{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute flex gap-[450px] bottom-12">
            {benefitsPair2.map((benefit, index) => (
              <div key={benefit.title} className="flex gap-5 items-center">
                <Image
                  src={benefit.icon} alt={benefit.title}
                  width={40} height={40}
                  className={`w-[55px] h-[55px] ${index == 0 ? "order-1" : ""}`}
                />
                <div className={`w-80 ${index == 0 ? "text-end" : ""}`}>
                  <h3 className="font-semibold text-primary text-xl ">{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute flex gap-[250px] -bottom-36">
            {benefitsPair3.map((benefit, index) => (
              <div key={benefit.title} className="flex gap-5 items-center">
                <Image
                  src={benefit.icon} alt={benefit.title}
                  width={40} height={40}
                  className={`w-[55px] h-[55px] ${index == 0 ? "order-1" : ""}`}
                />
                <div className={`w-80 ${index == 0 ? "text-end" : ""}`}>
                  <h3 className="font-semibold text-primary text-xl ">{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-[300px]">
            <Image src="/Transform Your Life.png" alt="Benefits" width={280} height={250} className='relative z-1' />
            <div className="w-[310px] h-[255px] rounded-[100%] bg-[#CCC6F8] absolute -bottom-10 -left-4" />
          </div>
        </div>
      </div>
    </section >
  )
}
