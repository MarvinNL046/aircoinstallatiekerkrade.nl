import { Metadata } from "next"
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, MapPin, Phone, Clock, Euro, Award, Wrench, Shield, ArrowRight } from 'lucide-react'
import { generateLocalBusinessSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Airco Parkstad | Airconditioning Heerlen, Kerkrade, Landgraaf, Brunssum",
  description: "Airco specialist Parkstad Limburg ✓ Installatie & onderhoud in Heerlen, Kerkrade, Landgraaf, Brunssum ✓ Erkend installateur ✓ Scherpe prijzen ✓ 24/7 service",
  openGraph: {
    title: "Airco Parkstad | StayCool Airco - Uw Specialist in Parkstad Limburg",
    description: "Professionele airconditioning services in Parkstad: Heerlen, Kerkrade, Landgraaf en Brunssum. Erkend F-gassen installateur met 10+ jaar ervaring.",
    url: "https://aircoinstallatiekerkrade.nl/regio/parkstad",
    siteName: "StayCool Airco Kerkrade",
    locale: "nl_NL",
    type: "website",
  },
  keywords: "airco parkstad, airco heerlen, airco kerkrade, airco landgraaf, airco brunssum, airco specialist limburg, klimaatbeheersing parkstad",
}

const parkstadCities = [
  { name: "Heerlen", population: "86.832", features: ["Grootste stad Parkstad", "Veel appartementencomplexen", "Historisch centrum"] },
  { name: "Kerkrade", population: "45.744", features: ["Grensgemeente", "Veel vrijstaande woningen", "GaiaZOO omgeving"] },
  { name: "Landgraaf", population: "37.457", features: ["SnowWorld", "Moderne wijken", "Veel nieuwbouw"] },
  { name: "Brunssum", population: "27.821", features: ["Groene gemeente", "Veel villa's", "NATO-AFCENT"] }
]

const services = [
  {
    icon: Wrench,
    title: "Airco Installatie Parkstad",
    description: "Vakkundige installatie door F-gassen gecertificeerde monteurs in heel Parkstad",
    features: ["Gratis inmeting", "Alle topmerken", "Binnen 1 week geplaatst"]
  },
  {
    icon: Shield,
    title: "Airco Onderhoud Parkstad",
    description: "Regelmatig onderhoud voor optimale prestaties en langere levensduur",
    features: ["Onderhoudscontracten", "24/7 bereikbaar", "Preventief onderhoud"]
  },
  {
    icon: Phone,
    title: "Airco Service Parkstad",
    description: "Snelle service en reparatie door heel Parkstad Limburg",
    features: ["Spoedservice", "Alle merken", "Vaste tarieven"]
  }
]

export default function ParkstadPage() {
  const localBusinessSchema = generateLocalBusinessSchema("Parkstad")

  return (
    <>
      <Script
        id="parkstad-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Airco Specialist Parkstad Limburg
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Airco Parkstad
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Professionele airconditioning services in Heerlen, Kerkrade, Landgraaf en Brunssum
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/offerte">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Gratis Offerte Aanvragen
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                  <Phone className="mr-2 h-4 w-4" />
                  046 202 1430
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> Erkend F-gassen installateur</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> 10+ jaar ervaring</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> Lokale specialist</span>
            </div>
          </div>
        </div>
      </section>

      {/* Parkstad Cities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Airco Services in Parkstad Gemeenten
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {parkstadCities.map((city) => (
                <Card key={city.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-orange-500" />
                          {city.name}
                        </CardTitle>
                        <CardDescription>
                          {city.population} inwoners
                        </CardDescription>
                      </div>
                      <Link href={`/steden/${city.name.toLowerCase()}`}>
                        <Button variant="outline" size="sm">
                          Meer info
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {city.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Onze Airco Services in Parkstad
              </h2>
              <p className="text-lg text-gray-600">
                Complete airconditioning oplossingen voor particulieren en bedrijven
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Populaire Airconditioners in Parkstad
              </h2>
              <p className="text-lg text-gray-600">
                Topkwaliteit airconditioners speciaal geselecteerd voor woningen in Parkstad
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group cursor-pointer">
                <Link href="/producten">
                  <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/images/daikin-stylish-wit.webp"
                      alt="Daikin Stylish airco - populair in moderne appartementen Parkstad"
                      width={400}
                      height={400}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">Daikin Stylish</h3>
                  <p className="text-sm text-gray-600">Perfect voor appartementen</p>
                </Link>
              </div>
              <div className="group cursor-pointer">
                <Link href="/producten">
                  <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/images/Mitsubishi_heavy_indus/Mitsubishi-Heavy-SRF-35-ZS-W-Vloer-unit-35-kW-Exclusief-buiten-unit.webp"
                      alt="Mitsubishi Heavy vloermodel airco - ideaal voor vrijstaande woningen Parkstad"
                      width={400}
                      height={400}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">Mitsubishi Vloermodel</h3>
                  <p className="text-sm text-gray-600">Voor vrijstaande woningen</p>
                </Link>
              </div>
              <div className="group cursor-pointer">
                <Link href="/producten">
                  <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/images/samsung/windfreeComfort/WindFree_Comfort_S2_Front_Web_RGB.webp"
                      alt="Samsung WindFree Comfort airco - stil en energiezuinig voor Parkstad bewoners"
                      width={400}
                      height={400}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">Samsung WindFree</h3>
                  <p className="text-sm text-gray-600">Fluisterstil & zuinig</p>
                </Link>
              </div>
              <div className="group cursor-pointer">
                <Link href="/producten">
                  <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/images/LG-dualcool-indoor-premium.webp"
                      alt="LG DualCool Premium airco - betrouwbare keuze voor Parkstad"
                      width={400}
                      height={400}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">LG DualCool</h3>
                  <p className="text-sm text-gray-600">Uitstekende prijs-kwaliteit</p>
                </Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/producten">
                <Button variant="outline">
                  Bekijk alle airconditioners
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Waarom StayCool Airco in Parkstad?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Lokale Specialist Parkstad</h3>
                    <p className="text-gray-600">
                      Wij kennen Parkstad als geen ander. Van de historische panden in <Link href="/steden/heerlen" className="text-orange-600 hover:underline">Heerlen centrum</Link> 
                      tot moderne nieuwbouw in <Link href="/steden/landgraaf" className="text-orange-600 hover:underline">Landgraaf</Link> - wij hebben ervaring met alle type woningen.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Snelle Service</h3>
                    <p className="text-gray-600">
                      Vanuit onze centrale locatie in <Link href="/steden/kerkrade" className="text-orange-600 hover:underline">Kerkrade</Link> zijn we binnen 20 minuten overal in 
                      Parkstad. Voor spoedgevallen zelfs 24/7 bereikbaar via onze <Link href="/diensten/airco-reparatie" className="text-orange-600 hover:underline">24/7 storingsdienst</Link>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Euro className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Scherpe Parkstad Prijzen</h3>
                    <p className="text-gray-600">
                      Speciale tarieven voor Parkstad bewoners. Geen voorrijkosten binnen de regio 
                      en aantrekkelijke bundelprijzen voor meerdere units.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Award className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Erkend & Gecertificeerd</h3>
                    <p className="text-gray-600">
                      F-gassen gecertificeerd, STEK erkend en aangesloten bij Techniek Nederland. 
                      Uw garantie voor vakmanschap en kwaliteit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Direct een Airco in Parkstad?
            </h2>
            <p className="text-xl mb-8">
              Vraag nu een vrijblijvende offerte aan of bel direct voor advies. 
              Wij helpen u graag met de perfecte klimaatoplossing!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/offerte">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  Gratis Offerte Aanvragen
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  <Phone className="mr-2 h-4 w-4" />
                  Bel Direct: 046 202 1430
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm">
              ✓ Geen voorrijkosten in Parkstad ✓ Binnen 24u reactie ✓ Vrijblijvend advies
            </p>
            <div className="mt-8">
              <p className="text-sm text-white/80 mb-2">Ook actief in:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Link href="/regio/zuid-limburg" className="text-sm text-white/90 hover:text-white underline">Zuid-Limburg</Link>
                <span className="text-white/60">•</span>
                <Link href="/regio/limburg" className="text-sm text-white/90 hover:text-white underline">Heel Limburg</Link>
                <span className="text-white/60">•</span>
                <Link href="/steden/maastricht" className="text-sm text-white/90 hover:text-white underline">Maastricht</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}