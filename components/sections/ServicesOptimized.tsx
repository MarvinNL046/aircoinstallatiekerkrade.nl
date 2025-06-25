import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Wrench, Shield, Settings, ArrowRight, Play } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Airco Installatie',
    description: 'Professionele airconditioning installatie Kerkrade van energiezuinige split-units. Erkende monteurs zorgen voor vakkundige plaatsing.',
    features: ['Gratis inmeting & advies', 'Alle topmerken beschikbaar', 'Nette afwerking gegarandeerd', 'Snelle plaatsing mogelijk'],
    link: '/diensten/airco-installatie',
  },
  {
    icon: Wrench,
    title: 'Airco Onderhoud',
    description: 'Professioneel airco onderhoud Kerkrade voor optimale prestaties. Regelmatige service verlengt de levensduur van uw systeem.',
    features: ['Onderhoudscontracten beschikbaar', 'Grondige filter reiniging', 'Koudemiddel controle', 'Volledige systeemcheck'],
    link: '/diensten/airco-onderhoud',
  },
  {
    icon: Shield,
    title: 'Airco Reparatie',
    description: 'Snelle airco reparatie service Kerkrade. Ervaren monteurs lossen elke airconditioning storing vakkundig op.',
    features: ['Spoedservice beschikbaar', 'Snelle diagnose', 'Transparante kostenopgave', 'Garantie op alle reparaties'],
    link: '/diensten/airco-reparatie',
  },
];

export function ServicesOptimized() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Airconditioning Services Kerkrade
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <strong>Professionele airco diensten in Kerkrade</strong> - Van installatie tot onderhoud en reparatie. Erkende F-gassen monteurs zorgen voor uw comfort.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-staycool group hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white group-hover:bg-orange-500 transition-colors">
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                <p className="mb-6 text-gray-600">{service.description}</p>
                
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-orange-500 mt-0.5">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={service.link}>
                  <Button className="w-full group-hover:bg-orange-500 group-hover:text-white">
                    Meer informatie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Product Showcase */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Premium Airconditioners</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Tosot Cosmo', image: '/images/787-cosmo-indoor-vooraanzicht.webp', badge: 'Beste Koop' },
              { name: 'Toshiba Haori', image: '/images/Haori-zwart-vooraanzicht_3_11zon.webp', badge: 'Textiel Design' },
              { name: 'Daikin Emura', image: '/images/daikin-emura-wit.webp', badge: 'Design Award' },
              { name: 'Toshiba Daiseikai', image: '/images/Daiseikai_10-Wit-vooraanzicht_4_11zon.webp', badge: 'Plasma Filter' }
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-semibold text-gray-900">{product.name}</h4>
                <p className="text-sm text-gray-600">🌟 {product.badge}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/offerte">
              <Button className="btn-primary">
                Ontdek Uw Ideale Airco
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Zie hoe wij te werk gaan
              </h3>
              <p className="text-gray-600 mb-6">
                Bekijk onze werkwijze en ontdek waarom klanten voor StayCool Airco kiezen. 
                Van de eerste inspectie tot de oplevering, wij zorgen voor een vlekkeloze installatie.
              </p>
              <Link href="/offerte">
                <Button className="btn-primary">
                  Start uw project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/9m-jkGgfLog"
                title="StayCool Airco Installatie Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
                <div className="bg-white/90 backdrop-blur rounded-full p-4">
                  <Play className="h-8 w-8 text-orange-500 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}