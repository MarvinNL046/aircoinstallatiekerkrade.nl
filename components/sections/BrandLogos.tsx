'use client';

import Image from 'next/image';
import { useState } from 'react';

const brands = [
  { name: 'Tosot by Gree', logo: '/images/brands/tosot.svg' },
  { name: 'Daikin', logo: '/images/brands/daikin.svg' },
  { name: 'Samsung', logo: '/images/brands/samsung.svg' },
  { name: 'LG', logo: '/images/brands/lg.svg' },
  { name: 'Mitsubishi', logo: '/images/brands/mitsubishi.svg' },
  { name: 'Toshiba', logo: '/images/brands/toshiba.svg' },
];

export function BrandLogos() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
            Wij werken met topmerken
          </h2>
          <p className="text-gray-600">
            Alleen de beste airconditioning merken voor optimaal comfort en betrouwbaarheid
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 md:grid-cols-6 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="bg-white rounded-lg p-6 flex items-center justify-center h-24 transition-all duration-300 hover:shadow-lg hover:scale-105 grayscale hover:grayscale-0">
                {imageErrors.has(brand.name) ? (
                  <span className="text-gray-700 font-semibold text-lg">{brand.name}</span>
                ) : (
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain w-full h-full"
                    onError={() => {
                      setImageErrors(prev => new Set(prev).add(brand.name));
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            Gecertificeerd dealer en installateur van alle bovenstaande merken
          </p>
        </div>
      </div>
    </section>
  );
}