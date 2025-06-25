'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Star, Zap } from 'lucide-react';
import Link from 'next/link';

const productCategories = {
  tosot: {
    name: 'Tosot by Gree',
    description: 'Innovatieve klimaattechnologie met uitstekende prijs-kwaliteit',
    color: 'green',
    products: [
      {
        name: 'Cosmo',
        series: 'Premium Line',
        images: [
          '/images/787-cosmo-indoor-vooraanzicht.webp',
          '/images/788-cosmo-indoor.webp',
          '/images/789-cosmo-indoor.webp'
        ],
        features: ['Ultra Quiet', 'I-Feel Functie', 'Self-Clean Technology'],
        cta: 'Stille kracht voor uw comfort',
        popular: true
      },
      {
        name: 'Pular',
        series: 'Design Series',
        images: [
          '/images/568-Pular-indoor-vooraanzicht.webp',
          '/images/570-Pular-indoor-right.webp'
        ],
        features: ['Elegant Design', 'Energy Saving', 'Turbo Mode'],
        cta: 'Moderne technologie, tijdloos design'
      },
      {
        name: 'Clivia',
        series: 'Color Edition',
        images: [
          '/images/724-clivia-wit-vooraanzicht.webp',
          '/images/723-clivia-wit-schuin.webp',
          '/images/712-clivia-zwart-vooraanzicht.webp'
        ],
        features: ['Verkrijgbaar in Wit & Zwart', 'Compact Design', 'Smart Control'],
        cta: 'Kies uw favoriete kleur'
      },
      {
        name: 'WTS Console',
        series: 'Vloermodel',
        images: [
          '/images/374-WTS-indoor-console-vloernmodel-tosot.webp',
          '/images/375-WTS-remote-console-tosot.webp'
        ],
        features: ['Vloermodel', 'Krachtige Verwarming', 'Breed Bereik'],
        cta: 'Ideaal voor grote ruimtes'
      }
    ]
  },
  daikin: {
    name: 'Daikin',
    description: 'Premium Japanse technologie met unieke features',
    color: 'blue',
    products: [
      {
        name: 'Daikin Emura',
        series: 'Premium Design',
        images: [
          '/images/daikin-emura-wit.webp',
          '/images/daikin-emura-zilver.webp', 
          '/images/daikin-emura-zwart.webp'
        ],
        features: ['Design Award Winner', '3D Airflow', 'Flash Streamer'],
        cta: 'Bespaar tot 30% op energie',
        popular: true
      },
      {
        name: 'Daikin Stylish',
        series: 'Design & Efficiency',
        images: [
          '/images/daikin-stylish-wit.webp',
          '/images/daikin-stylish-silver.webp',
          '/images/daikin-stylish-zwart.webp'
        ],
        features: ['Coanda Effect', 'Eye Sensor', 'WiFi Ready'],
        cta: 'Ontdek uw voordeel'
      },
      {
        name: 'Daikin Perfera',
        series: 'All-in-One Comfort',
        images: [
          '/images/daikin-perfera-wit.webp',
          '/images/Perfera-vloermodel-left.webp',
          '/images/Perfera_vloermodel-right.webp'
        ],
        features: ['Vloer & Wand Montage', 'Warmtepomp', 'R32 Koudemiddel'],
        cta: 'Vraag uw persoonlijke prijs aan'
      }
    ]
  },
  toshiba: {
    name: 'Toshiba',
    description: 'Japanse precisie met innovatieve luchtzuiveringstechnologie',
    color: 'red',
    products: [
      {
        name: 'Daiseikai 10',
        series: 'Premium Performance',
        images: [
          '/images/Daiseikai_10-Wit-vooraanzicht_4_11zon.webp',
          '/images/Daiseikai_10-Wit-rechts_3_11zon.webp',
          '/images/Daiseikai_10-Hout-vooraanzicht_2_11zon.webp'
        ],
        features: ['Plasma Ionizer', 'Ultra Pure Filter', 'Magic Coil'],
        cta: 'Zuiverste lucht voor uw gezin',
        popular: true
      },
      {
        name: 'Haori',
        series: 'Design Collection',
        images: [
          '/images/Haori-zwart-vooraanzicht_3_11zon.webp',
          '/images/Haori-grijs-links_19_11zon.webp',
          '/images/Haori-creme-links_18_11zon.webp'
        ],
        features: ['5 Kleuren Beschikbaar', 'Textiel Design', 'Fluisterstil 19dB'],
        cta: 'Japans design voor uw interieur'
      },
      {
        name: 'Kazumi Plus',
        series: 'Smart Series',
        images: [
          '/images/Kazumi-plus-white-vooraanzicht_8_11zon.webp',
          '/images/Kazumi-plus-Black-vooraanzicht_6_11zon.webp',
          '/images/Kazumi-plus-white-rechts_7_11zon.webp'
        ],
        features: ['WiFi Control', 'Eco Mode', 'Self-Cleaning Plus'],
        cta: 'Slimme klimaatbeheersing'
      },
      {
        name: 'Seiya Plus',
        series: 'Efficient Line',
        images: [
          '/images/Seiya-plus-wit-vooraanzicht_12_11zon.webp',
          '/images/Seiya-plus-wit-rechts_11_11zon.webp',
          '/images/Seiya-plus-wit-onderaanzicht-open_10_11zon.webp'
        ],
        features: ['A++ Energie Label', 'R32 Koudemiddel', '3D Airflow'],
        cta: 'Efficiënt comfort voor elke dag'
      },
      {
        name: 'Console Vloermodel',
        series: 'Floor Standing',
        images: [
          '/images/toshiba-console-vloermodel-wit_13_11zon.webp',
          '/images/toshiba-console-vloermodel-wit-reacht_15_11zon.webp',
          '/images/toshiba-console-vloermodel-wit-linksboven_14_11zon.webp'
        ],
        features: ['Vloermodel', 'Dubbele Luchtstroom', 'Krachtige Verwarming'],
        cta: 'Perfecte warmteverdeling'
      }
    ]
  },
  samsung: {
    name: 'Samsung',
    description: 'Innovatieve WindFree™ technologie voor optimaal comfort',
    color: 'purple',
    products: [
      {
        name: 'WindFree™ Elite',
        series: 'Premium Wind-Free',
        images: [
          '/images/samsung/windfreeElite/WindFree_Elite_S2_Front_Web_RGB.webp',
          '/images/samsung/windfreeElite/Samsung_RAC_WindFree_Elite_Sfeerbeeld_001.webp',
          '/images/samsung/windfreeElite/Samsung_RAC_WindFree_Elite_Sfeerbeeld_002.webp'
        ],
        features: ['WindFree™ Cooling', 'SmartThings', '8-weg luchtstroom'],
        cta: 'Premium comfort op maat',
        popular: true
      },
      {
        name: 'WindFree™ Comfort',
        series: 'Comfort Series',
        images: [
          '/images/samsung/windfreeComfort/WindFree_Comfort_S2_Front_Web_RGB.webp',
          '/images/samsung/windfreeComfort/Samsung_RAC_WindFree_Comfort_Sfeerbeeld_001.webp'
        ],
        features: ['WindFree™ Mode', 'Digital Inverter', 'Fast Cooling'],
        cta: 'Gratis adviesgesprek'
      },
      {
        name: 'Luzon',
        series: 'Essential Comfort',
        images: [
          '/images/samsung/luzon/Luzon_S2_Front_Web_RGB.webp',
          '/images/samsung/luzon/Samsung_RAC_Luzon_Sfeerbeeld_001.webp'
        ],
        features: ['Tri-Care Filter', 'Good Sleep Mode', 'Easy Filter'],
        cta: 'Maatwerk offerte binnen 24u'
      }
    ]
  },
  lg: {
    name: 'LG',
    description: 'Kunstzinnige designs met geavanceerde technologie',
    color: 'red',
    products: [
      {
        name: 'ArtCool Mirror',
        series: 'Design Premium',
        images: [
          '/images/lg-artcool-mirror.webp',
          '/images/rac-eu-lg-artcool-black.webp'
        ],
        features: ['Spiegel Design', 'UV Nano', 'WiFi Smart Inverter'],
        cta: 'Exclusieve voorwaarden',
        popular: true
      },
      {
        name: 'DualCool Premium',
        series: 'High Performance',
        images: [
          '/images/LG-dualcool-indoor-premium.webp',
          '/images/LG-dualcool-indoor-premium-1.webp'
        ],
        features: ['Dual Inverter', 'Plasmaster Ionizer', '10-jaar garantie compressor'],
        cta: 'Bereken uw besparing'
      }
    ]
  }
};

export function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('tosot');
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  const currentProducts = productCategories[selectedCategory as keyof typeof productCategories].products;
  const currentProduct = currentProducts[selectedProduct];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-100 text-orange-800">Premium Airconditioners</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Onze Premium Airco Collectie
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ontdek de nieuwste airconditioners van topmerken. Van design iconen tot innovatieve technologieën.
          </p>
        </div>

        {/* Brand Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            {Object.entries(productCategories).map(([key, category]) => (
              <TabsTrigger key={key} value={key} className="text-lg font-semibold">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(productCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <div className="grid gap-8 lg:grid-cols-2 items-start">
                {/* Product Gallery */}
                <div className="space-y-4">
                  {/* Main Image */}
                  <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden">
                    <Image
                      src={currentProduct.images[selectedImage]}
                      alt={`${currentProduct.name} - ${currentProduct.series}`}
                      width={600}
                      height={600}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                  
                  {/* Thumbnail Images */}
                  <div className="flex gap-2 overflow-x-auto">
                    {currentProduct.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === index ? 'border-orange-500' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${currentProduct.name} variant ${index + 1}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{category.name}</Badge>
                      {currentProduct.popular && (
                        <Badge className="bg-orange-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Populair
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {currentProduct.name}
                    </h3>
                    <p className="text-lg text-gray-600">{currentProduct.series}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-orange-500" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {currentProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800">
                          🌱 Tot 70% energiebesparing
                        </Badge>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">
                        {currentProduct.cta}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link href="/offerte" className="flex-1">
                          <Button className="btn-primary w-full">
                            Gratis Offerte Op Maat
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href="tel:0462021430" className="flex-1">
                          <Button variant="outline" className="w-full border-orange-300 text-orange-700 hover:bg-orange-50">
                            📞 Direct Advies
                          </Button>
                        </Link>
                      </div>
                      <p className="text-sm text-gray-600 text-center">
                        ✓ Binnen 24u reactie ✓ Vrijblijvend advies ✓ Maatwerk
                      </p>
                    </div>
                  </div>

                  {/* Product Navigation */}
                  <div className="flex gap-2 overflow-x-auto">
                    {currentProducts.map((product, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedProduct(index);
                          setSelectedImage(0);
                        }}
                        className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedProduct === index
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {product.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl">
          <Badge className="mb-4 bg-orange-100 text-orange-800">🎁 Exclusieve Actie</Badge>
          <h3 className="text-2xl font-bold mb-4">Uw Persoonlijke Airco Advies + Maatwerk Offerte</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Elke woning is anders. Daarom krijgt u van ons <strong>gratis persoonlijk advies</strong> met een 
            <strong>offerte op maat</strong> - aangepast aan uw situatie, wensen en budget.
          </p>
          
          <div className="bg-white/80 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto mb-6">
            <h4 className="font-semibold mb-3 text-gray-900">Wat krijgt u van ons?</h4>
            <div className="grid gap-2 text-left sm:grid-cols-2">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-sm">Gratis inmeting bij u thuis</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-sm">Berekening ideale capaciteit</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-sm">Vergelijking beste modellen</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-sm">Transparante all-in prijs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-sm">Besparing energiekosten</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-sm">Garanties & service opties</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/offerte">
              <Button size="lg" className="btn-primary">
                🎯 Start Uw Gratis Advies
              </Button>
            </Link>
            <Link href="tel:0462021430">
              <Button size="lg" variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
                📞 Bel Nu: 046 202 1430
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            <strong>Let op:</strong> Wij werken met vaste installatietarieven. Geen verrassingen achteraf!
          </p>
        </div>
      </div>
    </section>
  );
}