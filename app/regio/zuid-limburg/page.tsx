import { Metadata } from "next"
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, MapPin, Phone, Award, Mountain, Building } from 'lucide-react'
import { generateLocalBusinessSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Airco Zuid Limburg | Specialist in Klimaatbeheersing Zuid-Limburg",
  description: "Airco Zuid Limburg ✓ #1 Specialist voor airconditioning in Zuid-Limburg ✓ Installatie, service & onderhoud ✓ Maastricht, Heerlen, Sittard-Geleen ✓ 24/7 bereikbaar",
  openGraph: {
    title: "Airco Zuid Limburg | StayCool Airco - Uw Klimaatspecialist",
    description: "Professionele airco services in heel Zuid-Limburg. Van Maastricht tot Kerkrade, van Vaals tot Stein. Erkend installateur met 10+ jaar ervaring.",
    url: "https://aircoinstallatiekerkrade.nl/regio/zuid-limburg",
    siteName: "StayCool Airco Kerkrade",
    locale: "nl_NL",
    type: "website",
  },
  keywords: "airco zuid limburg, airco limburg, klimaatbeheersing limburg, airco specialist limburg, airco installateur limburg",
}

const zuidLimburgRegions = [
  {
    name: "Parkstad Limburg",
    cities: ["Heerlen", "Kerkrade", "Landgraaf", "Brunssum"],
    features: ["260.000+ inwoners", "Veel bedrijventerreinen", "Grensregio"],
    link: "/regio/parkstad"
  },
  {
    name: "Maastricht-Heuvelland", 
    cities: ["Maastricht", "Valkenburg", "Meerssen", "Eijsden-Margraten"],
    features: ["180.000+ inwoners", "Historische centra", "Toeristische regio"],
    link: "/steden/maastricht"
  },
  {
    name: "Westelijke Mijnstreek",
    cities: ["Sittard-Geleen", "Beek", "Stein", "Schinnen"],
    features: ["150.000+ inwoners", "Industriële zone", "Chemelot campus"],
    link: "/steden/sittard"
  }
]

const advantages = [
  {
    icon: Mountain,
    title: "Lokale Kennis Heuvelland",
    description: "Wij kennen de unieke klimaatuitdagingen van Zuid-Limburg - van de heuvels tot de Maasvallei"
  },
  {
    icon: Building,
    title: "Ervaring met Alle Woningtypen",
    description: "Van monumentale panden in Maastricht tot moderne villa's in het Heuvelland"
  },
  {
    icon: Award,
    title: "Erkend in Heel Zuid-Limburg",
    description: "Gecertificeerd voor alle gemeenten in Zuid-Limburg met lokale vergunningen"
  }
]

export default function ZuidLimburgPage() {
  const localBusinessSchema = generateLocalBusinessSchema("Zuid-Limburg")

  return (
    <>
      <Script
        id="zuid-limburg-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              #1 Airco Specialist Zuid-Limburg
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Airco Zuid Limburg
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-green-100">
              Professionele klimaatbeheersing voor heel Zuid-Limburg - 
              Van de Maas tot de Vaalserberg
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/offerte">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Gratis Offerte Zuid-Limburg
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
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> 500+ installaties in Zuid-Limburg</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> Alle gemeenten</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> 24/7 service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Zuid-Limburg Regions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Airco Services per Regio in Zuid-Limburg
              </h2>
              <p className="text-lg text-gray-600">
                Complete dekking van Zuid-Limburg - overal snel ter plaatse
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {zuidLimburgRegions.map((region) => (
                <Card key={region.name} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{region.name}</CardTitle>
                    <CardDescription>
                      {region.cities.join(", ")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
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

      {/* Featured Products for Zuid-Limburg */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Aanbevolen Airconditioners voor Zuid-Limburg
              </h2>
              <p className="text-lg text-gray-600">
                Perfect afgestemd op het Zuid-Limburgse klimaat en woningtypen
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/images/daikin-emura-wit.webp"
                    alt="Daikin Emura design airco - populair in Zuid-Limburg voor moderne interieurs"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">Voor Design Liefhebbers</h3>
                <p className="text-gray-600 mb-4">Daikin Emura - Bekroond design</p>
                <Link href="/merken/daikin">
                  <Button variant="outline" size="sm">
                    Meer over Daikin
                  </Button>
                </Link>
              </div>
              <div className="text-center">
                <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/images/Mitsubishi_heavy_indus/Mitsubishi-titanium-zs-wft-1.webp"
                    alt="Mitsubishi Heavy Industries Titanium airco - betrouwbare keuze voor Zuid-Limburgse woningen"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">Voor Maximale Betrouwbaarheid</h3>
                <p className="text-gray-600 mb-4">Mitsubishi Heavy - Japanse precisie</p>
                <Link href="/merken/mitsubishi-heavy-industries">
                  <Button variant="outline" size="sm">
                    Meer over Mitsubishi
                  </Button>
                </Link>
              </div>
              <div className="text-center">
                <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/images/787-cosmo-indoor-vooraanzicht.webp"
                    alt="Tosot Cosmo airco - uitstekende prijs-kwaliteit voor Zuid-Limburg"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">Voor Beste Prijs-Kwaliteit</h3>
                <p className="text-gray-600 mb-4">Tosot Cosmo - Innovatief & betaalbaar</p>
                <Link href="/merken/tosot">
                  <Button variant="outline" size="sm">
                    Meer over Tosot
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Complete Airco Services in Zuid-Limburg
              </h2>
              <p className="text-lg text-gray-600">
                Van Vaals tot Stein, van Eijsden tot Schinnen - overal dezelfde kwaliteit
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Waarom kiezen voor StayCool in Zuid-Limburg?
                  </h3>
                  <div className="space-y-4">
                    {advantages.map((advantage, index) => {
                      const Icon = advantage.icon
                      return (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                              <Icon className="w-5 h-5 text-green-600" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">{advantage.title}</h4>
                            <p className="text-gray-600 text-sm">{advantage.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-lg mb-4">Onze Zuid-Limburg Services:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <Link href="/diensten/airco-installatie" className="font-semibold text-green-700 hover:underline">Airco Installatie</Link>
                        <p className="text-sm text-gray-600">Vakkundige plaatsing door heel Zuid-Limburg</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <Link href="/diensten/airco-onderhoud" className="font-semibold text-green-700 hover:underline">Airco Onderhoud</Link>
                        <p className="text-sm text-gray-600">Regelmatig onderhoud voor optimale werking</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <Link href="/diensten/airco-reparatie" className="font-semibold text-green-700 hover:underline">Airco Reparatie</Link>
                        <p className="text-sm text-gray-600">24/7 storingsdienst in heel Zuid-Limburg</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Klimaatadvies</strong>
                        <p className="text-sm text-gray-600">Persoonlijk advies voor uw situatie</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Populaire Steden voor Airco in Zuid-Limburg
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Maastricht", "Heerlen", "Sittard", "Geleen", 
                "Kerkrade", "Brunssum", "Landgraaf", "Voerendaal",
                "Beek", "Stein", "Meerssen", "Valkenburg",
                "Hoensbroek", "Nuth", "Schinnen", "Vaals"
              ].map((city) => (
                <Link 
                  key={city} 
                  href={`/steden/${city.toLowerCase()}`}
                  className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-colors"
                >
                  <MapPin className="w-5 h-5 text-orange-500 mx-auto mb-2" />
                  <span className="font-medium">{city}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Direct een Airco in Zuid-Limburg?
            </h2>
            <p className="text-xl mb-8">
              Van Maastricht tot Kerkrade, van Vaals tot Stein - 
              wij zijn uw airco specialist voor heel Zuid-Limburg!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/offerte">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Vraag Offerte Aan
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  <Phone className="mr-2 h-4 w-4" />
                  Bel: 046 202 1430
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm">
              ✓ Gratis advies ✓ Scherpe Zuid-Limburg tarieven ✓ Binnen 24u reactie
            </p>
            <div className="mt-8">
              <p className="text-sm text-white/80 mb-2">Zie ook onze andere regio's:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Link href="/regio/parkstad" className="text-sm text-white/90 hover:text-white underline">Parkstad</Link>
                <span className="text-white/60">•</span>
                <Link href="/regio/limburg" className="text-sm text-white/90 hover:text-white underline">Heel Limburg</Link>
                <span className="text-white/60">•</span>
                <Link href="/kennisbank" className="text-sm text-white/90 hover:text-white underline">Kennisbank</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}