import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  BadgeCheck, 
  Users, 
  Clock3, 
  ShieldCheck, 
  ThumbsUp,
  Award,
  Zap,
  HeadphonesIcon
} from 'lucide-react';

const benefits = [
  {
    icon: BadgeCheck,
    title: 'Gratis Offerte & Advies',
    description: 'Vrijblijvende offerte binnen 24u, inclusief vakkundig advies op maat',
  },
  {
    icon: Users,
    title: 'Erkende F-gassen Monteurs',
    description: 'Gecertificeerde airco specialisten met 15+ jaar ervaring in Limburg',
  },
  {
    icon: Clock3,
    title: 'Snelle Service',
    description: 'Spoedservice beschikbaar voor urgente storingen',
  },
  {
    icon: ShieldCheck,
    title: '2 Jaar Garantie',
    description: 'Uitgebreide garantie op alle installaties en reparaties',
  },
];

const extraBenefits = [
  {
    icon: Award,
    stat: '4.8/5',
    label: 'Klantbeoordeling',
  },
  {
    icon: Zap,
    stat: '1000+',
    label: 'Installaties',
  },
  {
    icon: HeadphonesIcon,
    stat: '24u',
    label: 'Response tijd',
  },
  {
    icon: ThumbsUp,
    stat: '98%',
    label: 'Tevreden klanten',
  },
];

export function WhyUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Waarom Kiezen Voor Onze Airco Service?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <strong>Erkende airco specialist Kerkrade</strong> - Met jarenlange expertise, betrouwbare service en volledige garanties bent u verzekerd van de beste airconditioning oplossing.
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {extraBenefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{item.stat}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            <strong>Klaar voor comfort?</strong> Start vandaag nog met uw airco project in Kerkrade.
          </p>
          <Link href="/offerte">
            <Button size="lg" className="btn-primary">
              🚀 Gratis Offerte Binnen 24u
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}