import { Metadata } from "next"
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, MapPin, Phone, Users, Zap, Shield, Award, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { generateLocalBusinessSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Airco Limburg | #1 Airco Specialist Limburg - Installatie & Service",
  description: "Airco Limburg ✓ Professionele airco installatie Limburg ✓ Airco service Limburg ✓ Alle merken ✓ Scherpe prijzen ✓ Erkend installateur. Bel 046 202 1430",
  openGraph: {
    title: "Airco Limburg | StayCool - Uw Aircospecialist in Heel Limburg",
    description: "Airco kopen in Limburg? StayCool is dé specialist voor airco installatie, onderhoud en reparatie in heel Limburg. Van Venlo tot Maastricht!",
    url: "https://aircoinstallatiekerkrade.nl/regio/limburg",
    siteName: "StayCool Airco Kerkrade",
    locale: "nl_NL",
    type: "website",
  },
  keywords: "airco limburg, airco service limburg, aircoservice limburg, airco specialist limburg, aircospecialist limburg, klimaatbeheersing limburg, airco installateur limburg, airco installatie limburg, airco bedrijf limburg, airco bedrijven limburg, airco kopen limburg, airco plaatsen limburg, airco montage limburg, airco onderhoud limburg",
}

const limburgRegions = [
  {
    name: "Zuid-Limburg",
    description: "Van Maastricht tot Kerkrade",
    cities: ["Maastricht", "Heerlen", "Sittard-Geleen", "Kerkrade"],
    features: ["500.000+ inwoners", "Heuvellandschap", "Grensregio"],
    link: "/regio/zuid-limburg"
  },
  {
    name: "Midden-Limburg",
    description: "Roermond en omgeving",
    cities: ["Roermond", "Weert", "Echt-Susteren", "Maasgouw"],
    features: ["230.000+ inwoners", "Maasplassen", "Outlet centrum"],
    link: "/steden/roermond"
  },
  {
    name: "Noord-Limburg",
    description: "Venlo, Venray en omstreken",
    cities: ["Venlo", "Venray", "Horst aan de Maas", "Peel en Maas"],
    features: ["280.000+ inwoners", "Greenport", "Logistiek centrum"],
    link: "/steden/venlo"
  }
]

const services = [
  {
    icon: Zap,
    title: "Airco Installatie Limburg",
    description: "Professionele airco installatie door heel Limburg. Van Venlo tot Maastricht.",
    features: ["Alle topmerken", "Vakkundige montage", "Snelle plaatsing", "Garantie"]
  },
  {
    icon: Shield,
    title: "Airco Service Limburg",
    description: "Complete airco service in Limburg. Onderhoud, reparatie en 24/7 storingsdienst.",
    features: ["Onderhoudscontracten", "Snelle service", "Alle merken", "24/7 bereikbaar"]
  },
  {
    icon: Award,
    title: "Airco Specialist Limburg",
    description: "Erkend aircospecialist voor heel Limburg met 10+ jaar ervaring.",
    features: ["F-gassen gecertificeerd", "STEK erkend", "Techniek Nederland", "Lokale kennis"]
  }
]

const benefits = [
  {
    title: "Airco Limburg Aanbieding",
    description: "Profiteer van onze scherpe Limburg tarieven en seizoensacties",
    highlight: "Tot 20% korting"
  },
  {
    title: "Mitsubishi Airco Limburg",
    description: "Officieel dealer van Mitsubishi Heavy Industries voor heel Limburg",
    highlight: "Premium kwaliteit"
  },
  {
    title: "Daikin Airco Limburg", 
    description: "Erkend Daikin installateur met volledige garantie",
    highlight: "Japanse topkwaliteit"
  }
]

export default function LimburgPage() {
  const localBusinessSchema = generateLocalBusinessSchema("Limburg")

  return (
    <>
      <Script
        id="limburg-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Airco Specialist voor Heel Limburg
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Airco Limburg
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Dé aircospecialist van Limburg - Van Venlo tot Maastricht, 
              wij installeren en onderhouden uw airconditioning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/offerte">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Airco Kopen in Limburg
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                  <Phone className="mr-2 h-4 w-4" />
                  Direct Contact: 046 202 1430
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> Airco service Limburg</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> Erkend installateur</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> 1000+ installaties</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> Heel Limburg</span>
            </div>
          </div>
        </div>
      </section>

      {/* Limburg Regions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Airco Installatie door Heel Limburg
              </h2>
              <p className="text-lg text-gray-600">
                Als <strong>airco bedrijf Limburg</strong> zijn wij actief in alle Limburgse regio's
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {limburgRegions.map((region) => (
                <Card key={region.name} className="hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{region.name}</CardTitle>
                        <CardDescription>{region.description}</CardDescription>
                      </div>
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Belangrijkste steden:</p>
                      <div className="flex flex-wrap gap-2">
                        {region.cities.map((city) => (
                          <Badge key={city} variant="secondary">{city}</Badge>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {region.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={region.link}>
                      <Button variant="outline" className="w-full">
                        Bekijk regio
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Complete Airco Services in Limburg
              </h2>
              <p className="text-lg text-gray-600">
                <strong>Airco plaatsen Limburg</strong> - Van advies tot installatie en onderhoud
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Onze Airco Merken voor Heel Limburg
              </h2>
              <p className="text-lg text-gray-600">
                Topmerken met landelijke dekking en lokale service
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-50 p-4">
                  <Image
                    src="/images/brands/daikin.svg"
                    alt="Daikin airco logo - officieel dealer voor heel Limburg"
                    width={200}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Daikin Airco Limburg</h3>
                  <p className="text-gray-600 text-sm mb-4">Japanse topkwaliteit met uitgebreid modelaanbod</p>
                  <Link href="/merken/daikin">
                    <Button variant="outline" size="sm" className="w-full">
                      Bekijk Daikin modellen
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-50 p-4">
                  <Image
                    src="/images/brands/mitsubishi.svg"
                    alt="Mitsubishi Heavy Industries airco logo - erkend installateur Limburg"
                    width={200}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Mitsubishi Airco Limburg</h3>
                  <p className="text-gray-600 text-sm mb-4">Betrouwbare Japanse technologie sinds 1884</p>
                  <Link href="/merken/mitsubishi-heavy-industries">
                    <Button variant="outline" size="sm" className="w-full">
                      Bekijk Mitsubishi modellen
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-50 p-4">
                  <Image
                    src="/images/brands/samsung.svg"
                    alt="Samsung airco logo - WindFree technologie voor Limburg"
                    width={200}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Samsung Airco Limburg</h3>
                  <p className="text-gray-600 text-sm mb-4">Innovatieve WindFree™ technologie</p>
                  <Link href="/merken/samsung">
                    <Button variant="outline" size="sm" className="w-full">
                      Bekijk Samsung modellen
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/producten">
                <Button className="btn-primary">
                  Bekijk alle airconditioners
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Waarom StayCool als Uw Airco Bedrijf in Limburg?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-orange-500 font-bold text-sm mb-2">{benefit.highlight}</div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Airco Kopen en Laten Installeren in Limburg?
                    </h3>
                    <p className="text-orange-100">
                      Profiteer nu van onze <strong>airco Limburg aanbieding</strong> en ontvang direct een offerte op maat!
                    </p>
                  </div>
                  <Link href="/offerte">
                    <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                      Vraag Offerte Aan
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Airco Montage Limburg - Overal Snel ter Plaatse
              </h2>
              <p className="text-lg text-gray-600">
                <strong>Airco onderhoud Limburg</strong> in alle grote steden en dorpen
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    Zuid-Limburg
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Maastricht</li>
                    <li>• Heerlen</li>
                    <li>• Sittard-Geleen</li>
                    <li>• Kerkrade</li>
                    <li>• Valkenburg</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    Parkstad
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Landgraaf</li>
                    <li>• Brunssum</li>
                    <li>• Hoensbroek</li>
                    <li>• Nuth</li>
                    <li>• Voerendaal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    Midden-Limburg
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Roermond</li>
                    <li>• Weert</li>
                    <li>• Echt</li>
                    <li>• Maasbracht</li>
                    <li>• Thorn</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    Noord-Limburg
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• <Link href="/steden/venlo" className="hover:text-blue-600 hover:underline">Venlo</Link></li>
                    <li>• <Link href="/steden/venray" className="hover:text-blue-600 hover:underline">Venray</Link></li>
                    <li>• <Link href="/steden/horst" className="hover:text-blue-600 hover:underline">Horst</Link></li>
                    <li>• <Link href="/steden/tegelen" className="hover:text-blue-600 hover:underline">Tegelen</Link></li>
                    <li>• <Link href="/steden/blerick" className="hover:text-blue-600 hover:underline">Blerick</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-4 text-blue-200" />
            <h2 className="text-3xl font-bold mb-4">
              Uw Betrouwbare Airco Partner in Limburg
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Als toonaangevend <strong>airco bedrijf in Limburg</strong> staan wij garant voor 
              kwaliteit, service en de beste prijs-kwaliteit verhouding!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/offerte">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  Start Uw Airco Project
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  Contact Opnemen
                </Button>
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm text-blue-200">Installaties</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-blue-200">Jaar ervaring</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.8★</div>
                <div className="text-sm text-blue-200">Klantbeoordeling</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}