import { Metadata } from "next"
import { CityContent } from "@/components/city/city-content"
import { getCities } from "@/lib/cities"
import { generateLocalBusinessSchema } from "@/lib/schema"
import Script from "next/script"
import { notFound } from "next/navigation"

interface CityPageProps {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const cities = await getCities()
  const cityData = cities.find(city => city.city.toLowerCase() === params.city)
  
  if (!cityData) {
    return {
      title: "Stad niet gevonden | StayCool Airco Maastricht",
      description: "De opgevraagde stad kon niet worden gevonden."
    }
  }

  // SEO optimized titles and descriptions per city
  const seoData = getSEODataForCity(cityData.city)
  
  return {
    title: seoData.title || `Airco ${cityData.city} | Airconditioning Installatie & Service`,
    description: seoData.description || `Professionele airconditioning installatie en onderhoud in ${cityData.city} door StayCool Airco. ✓ Erkend ✓ Gecertificeerd ✓ Vakkundig. Vraag nu een vrijblijvende offerte aan!`,
    keywords: seoData.keywords,
    openGraph: {
      title: `Airco Installatie ${cityData.city} | StayCool Airco Maastricht`,
      description: `Professionele airconditioning installatie en onderhoud in ${cityData.city} door StayCool Airco. Erkend en gecertificeerd installateur.`,
      url: `https://aircoinstallatie-maastricht.nl/steden/${params.city}`,
      siteName: "StayCool Airco Maastricht",
      locale: "nl_NL",
      type: "website",
    },
  }
}

export async function generateStaticParams() {
  const cities = await getCities()
  return cities.map((city) => ({
    city: city.city.toLowerCase(),
  }))
}

// SEO data voor specifieke steden
function getSEODataForCity(city: string) {
  const cityLower = city.toLowerCase()
  
  const seoData: Record<string, any> = {
    heerlen: {
      title: "Airco Heerlen | Airconditioning Specialist Heerlen",
      description: "Airco Heerlen - Professionele airconditioning installatie en service in Heerlen. ✓ Erkend airco specialist ✓ Scherpe prijzen ✓ 24/7 service. Bel 046 202 1430",
      keywords: "airco heerlen, airconditioning heerlen, airco specialist heerlen, airco installateur heerlen"
    },
    brunssum: {
      title: "Airco Brunssum | Split Airco Brunssum - StayCool",
      description: "Split airco Brunssum & airco installatie Brunssum door erkend specialist. ✓ Alle topmerken ✓ Scherpe prijzen ✓ Snel geplaatst. Vraag gratis offerte aan!",
      keywords: "airco brunssum, split airco brunssum, airco installatie brunssum, airconditioning brunssum"
    },
    geleen: {
      title: "Airco Geleen | Airco Service Geleen - Direct Geregeld",
      description: "Airco Geleen & airco service Geleen door lokale specialist. ✓ Airco direct Geleen ✓ Installatie & onderhoud ✓ Alle merken. Bel voor snelle service!",
      keywords: "airco geleen, airco service geleen, airco direct geleen, airconditioning geleen"
    },
    landgraaf: {
      title: "Airco Landgraaf | Airconditioning Installateur Landgraaf",
      description: "Airco Landgraaf - Uw specialist voor airconditioning in Landgraaf. ✓ Professionele installatie ✓ Onderhoud ✓ Reparatie. Vraag vrijblijvend advies!",
      keywords: "airco landgraaf, airconditioning landgraaf, airco installateur landgraaf, airco service landgraaf"
    },
    sittard: {
      title: "Airco Sittard | Airconditioning Sittard - Service & Installatie",
      description: "Airco Sittard & airco service Sittard. Professionele airconditioning installatie in Sittard door erkend bedrijf. ✓ Snel ✓ Betrouwbaar ✓ Scherpe prijzen",
      keywords: "airco sittard, airconditioning sittard, airco service sittard, airco installateur sittard"
    },
    voerendaal: {
      title: "Airco Voerendaal | Airco Service Voerendaal",
      description: "Airco Voerendaal & airco service Voerendaal door lokale specialist. ✓ Installatie ✓ Onderhoud ✓ Reparatie. Vraag gratis offerte aan!",
      keywords: "airco voerendaal, airco service voerendaal, airconditioning voerendaal, airco installateur voerendaal"
    },
    hoensbroek: {
      title: "Airco Hoensbroek | Airconditioning Specialist Hoensbroek",
      description: "Airco Hoensbroek - Professionele airconditioning services in Hoensbroek. ✓ Installatie ✓ Onderhoud ✓ 24/7 service. Lokale specialist met scherpe prijzen!",
      keywords: "airco hoensbroek, airconditioning hoensbroek, airco installateur hoensbroek, airco service hoensbroek"
    },
    roermond: {
      title: "Airco Roermond | Airconditioning Installateur Roermond",
      description: "Airco Roermond - Uw specialist voor airconditioning in Roermond en omgeving. ✓ Alle merken ✓ Vakkundige installatie ✓ Service & onderhoud",
      keywords: "airco roermond, airconditioning roermond, airco installateur roermond, airco service roermond"
    },
    maastricht: {
      title: "Airco Maastricht | Airconditioning Installateur Maastricht",
      description: "Airco Maastricht - #1 specialist voor airconditioning in Maastricht. ✓ Installatie ✓ Onderhoud ✓ 24/7 service. Vraag gratis advies aan!",
      keywords: "airco maastricht, airconditioning maastricht, airco installateur maastricht, airco service maastricht"
    }
  }
  
  return seoData[cityLower] || {}
}

export default async function CityPage({ params }: CityPageProps) {
  const cities = await getCities()
  const cityData = cities.find(
    (city) => city.city.toLowerCase() === params.city
  )

  if (!cityData) {
    notFound()
  }

  const localBusinessSchema = generateLocalBusinessSchema(cityData.city)

  // Enhanced descriptions with local SEO keywords
  const cityDescriptions: Record<string, string> = {
    heerlen: `Zoekt u een <strong>airco in Heerlen</strong>? StayCool Airco is uw erkende airco specialist in Heerlen en omgeving. Wij installeren en onderhouden alle soorten airconditioners in Heerlen, van split-units tot multi-split systemen. Als lokale <strong>airco installateur Heerlen</strong> kennen wij de stad uitstekend en kunnen snel ter plaatse zijn.`,
    brunssum: `Op zoek naar een <strong>split airco in Brunssum</strong>? StayCool Airco is gespecialiseerd in de installatie van split airconditioners in Brunssum. Als erkende installateur leveren wij alle topmerken tegen scherpe prijzen. Onze monteurs zijn dagelijks actief in Brunssum voor installatie, service en onderhoud.`,
    geleen: `<strong>Airco Geleen</strong> nodig? StayCool biedt complete <strong>airco service in Geleen</strong> - van installatie tot onderhoud. Wij zijn uw airco specialist voor Geleen en directe omgeving. Met jarenlange ervaring en lokale kennis zorgen wij voor de perfecte klimaatoplossing in uw woning of bedrijf.`,
    landgraaf: `StayCool Airco is uw betrouwbare partner voor <strong>airco in Landgraaf</strong>. Als lokale airconditioning specialist verzorgen wij professionele installaties in heel Landgraaf. Van moderne nieuwbouwwijken tot karakteristieke woningen - wij hebben voor elke situatie de juiste oplossing.`,
    sittard: `Bent u op zoek naar <strong>airconditioning in Sittard</strong>? StayCool Airco biedt professionele <strong>airco service in Sittard</strong> en omgeving. Als erkend installateur plaatsen wij airconditioners van alle topmerken. Snelle service, vakkundige montage en scherpe prijzen - dat is StayCool in Sittard!`,
    voerendaal: `<strong>Airco Voerendaal</strong> - StayCool is uw lokale specialist voor airconditioning in Voerendaal. Wij bieden complete <strong>airco service in Voerendaal</strong>: van advies en installatie tot onderhoud en reparatie. Met onze centrale ligging zijn we snel ter plaatse voor al uw airco wensen.`,
    hoensbroek: `Op zoek naar een <strong>airco in Hoensbroek</strong>? StayCool Airco is al jaren de vertrouwde airconditioning specialist van Hoensbroek. Wij installeren, onderhouden en repareren alle merken airconditioners. Profiteer van onze lokale expertise en scherpe tarieven!`,
    roermond: `<strong>Airco Roermond</strong> - StayCool Airco is uw specialist voor airconditioning in Roermond en omstreken. Als erkend installateur verzorgen wij de complete installatie van uw airco systeem. Van eerste advies tot oplevering - wij regelen alles voor een perfect klimaat in Roermond.`,
    maastricht: `<strong>Airco Maastricht</strong> - Als toonaangevende <strong>airco installateur in Maastricht</strong> biedt StayCool Airco complete klimaatoplossingen. Van historische panden in het centrum tot moderne appartementen - wij hebben ruime ervaring met alle type gebouwen in Maastricht. Profiteer van lokale expertise en 24/7 service!`
  }
  
  let description = cityDescriptions[cityData.city.toLowerCase()] || 
    `Professionele airconditioning services in ${cityData.city} door StayCool Airco. Wij bieden complete airco-oplossingen voor zowel particulieren als bedrijven in ${cityData.city} en omgeving.`

  const city = {
    title: cityData.city,
    description: description,
    region: cityData.region,
    population: cityData.population,
    postal_codes: cityData.postal_codes
  }

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <CityContent city={city} />
    </>
  )
}
