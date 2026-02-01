import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function PricingSection() {
  const plans = [
    {
      label: 'FLEXIBILITY',
      title: 'Drop-in',
      price: '2,000 PKR',
      period: '/class',
      features: ['Access to any session anytime', 'Not preneed'],
    },
    {
      label: 'MOST POPULAR',
      title: '6 Classes',
      price: '12,000 PKR',
      period: '/mo',
      features: ['Unlimited Classes', 'Unlimited Pass', 'Workshop Discount'],
      highlighted: true,
    },
    {
      label: 'BEST VALUE',
      title: '12 Classes',
      price: '12,000 PKR',
      period: '/mo',
      features: ['Unlimited Classes', '1 Guest Pass', 'Workshop Discount'],
    },
  ]
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Pricing</h2>
          <p className="text-foreground">Join Our Next Batch</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <button className="text-muted hover:text-primary transition text-sm flex items-center gap-2">
            🎯 Worth Non-Meditator?
          </button>
          <button className="text-muted hover:text-primary transition text-sm flex items-center gap-2">
            💰 Feminine Only
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 rounded-2xl border-2 ${plan.highlighted ? 'border-primary bg-primary/5 shadow-lg' : 'border-border hover:border-primary/30'}`}
            >
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{plan.label}</p>
              <h3 className="text-2xl font-bold text-foreground mb-1">{plan.title}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground text-sm">
                    <span className="text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full py-6 ${plan.highlighted
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  : 'border-2 border-primary text-primary hover:bg-primary/10'
                  }`}
              >
                Book Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
