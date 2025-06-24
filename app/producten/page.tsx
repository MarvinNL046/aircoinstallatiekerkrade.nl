import { Metadata } from 'next';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { ContactOptimized } from '@/components/sections/ContactOptimized';
import { CTABanner } from '@/components/sections/cta-banner';

export const metadata: Metadata = {
  title: 'Premium Airconditioners | Tosot, Toshiba, Daikin, Samsung, LG | StayCool Airco Kerkrade',
  description: 'Ontdek onze complete airconditioning collectie ✓ Tosot by Gree ✓ Toshiba Haori & Daiseikai ✓ Daikin Emura ✓ Samsung WindFree™ ✓ LG ArtCool ✓ Professionele installatie ✓ Gratis offerte',
  keywords: 'airconditioners kerkrade, tosot by gree, toshiba haori, toshiba daiseikai, daikin emura, samsung windfree, lg artcool, premium airco, design airconditioners, stille airco, energiezuinige airco',
  openGraph: {
    title: 'Premium Airconditioners | Tosot, Toshiba, Daikin | StayCool Airco',
    description: 'Ontdek onze complete collectie met Tosot by Gree, Toshiba Haori, Daikin Emura en meer. Professionele installatie in Kerkrade.',
    type: 'website',
  }
};

export default function ProductenPage() {
  return (
    <main>
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Premium Airconditioners Kerkrade
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Ontdek de nieuwste airconditioners van <strong>Tosot by Gree, Toshiba, Daikin, Samsung en LG</strong>. 
            Van betaalbare kwaliteit tot premium design iconen - wij hebben de perfecte airco voor uw woning of bedrijf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#producten" className="btn-primary inline-flex items-center px-6 py-3 rounded-lg">
              Bekijk Collectie
            </a>
            <a href="tel:0462021430" className="btn-secondary inline-flex items-center px-6 py-3 rounded-lg">
              Bel voor Advies: 046 202 1430
            </a>
          </div>
        </div>
      </section>

      <div id="producten">
        <ProductShowcase />
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Waarom Kiezen Voor Premium Airconditioners?</h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">🎨 Award-Winning Design</h3>
                <p className="text-gray-600">
                  Daikin Emura en Samsung WindFree™ hebben internationale design awards gewonnen. 
                  Uw airco wordt een stijlvol onderdeel van uw interieur.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-green-600">⚡ Ultra Energiezuinig</h3>
                <p className="text-gray-600">
                  A+++ energielabels en geavanceerde inverter technologie zorgen voor minimaal energieverbruik 
                  en maximaal comfort.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">🔇 Whisper Quiet</h3>
                <p className="text-gray-600">
                  Samsung WindFree™ en LG ArtCool draaien zo stil dat u ze nauwelijks hoort. 
                  Perfect voor slaapkamers en werkruimtes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-orange-600">📱 Smart Control</h3>
                <p className="text-gray-600">
                  Bedien uw airco vanaf elke locatie via smartphone apps. 
                  Slimme sensoren passen automatisch aan op uw aanwezigheid.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-red-600">🛡️ Gezonde Lucht</h3>
                <p className="text-gray-600">
                  Advanced filter systemen met UV-technologie elimineren bacteriën, virussen 
                  en allergenen voor een gezonder binnenklimaat.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-indigo-600">🔧 Professionele Service</h3>
                <p className="text-gray-600">
                  Erkende F-gassen monteurs zorgen voor perfecte installatie en jarenlang 
                  zorgeloos gebruik van uw premium airconditioning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactOptimized />
      <CTABanner theme="dark" />
    </main>
  );
}