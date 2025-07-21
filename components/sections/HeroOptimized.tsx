'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AirVent, Phone, Star, CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import { sendEmail } from '@/utils/email';
import { useToast } from '@/hooks/use-toast';

const rotatingTexts = [
  'Koel blijven in de zomer',
  'Verwarmen in de winter',
  'Energie besparen het hele jaar',
  'Gezonde lucht in uw woning',
];

export function HeroOptimized() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'Ik wil graag een gratis offerte voor airconditioning',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(formData);
      toast({
        title: 'Aanvraag verstuurd!',
        description: 'We nemen binnen 24 uur contact met u op.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: 'Ik wil graag een gratis offerte voor airconditioning',
      });
    } catch (error) {
      toast({
        title: 'Er ging iets mis',
        description: 'Probeer het later opnieuw of bel ons direct.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden gradient-hero py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-8" />
      
      {/* Urgency Ribbon */}
      <div className="absolute top-0 right-0 bg-orange-500 text-white px-8 py-2 transform rotate-12 translate-x-6 translate-y-6 shadow-lg">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span className="font-semibold">Binnen 24u reactie</span>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            <div className="mb-6 flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
              ))}
              <span className="ml-2 font-semibold">4.8/5 (127 reviews)</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Airco Installatie Kerkrade
              <span className="block mt-2 text-orange-500 h-16">
                <span key={currentTextIndex} className="typewriter-text inline-block">
                  {rotatingTexts[currentTextIndex]}
                </span>
              </span>
            </h1>

            <p className="mb-8 text-lg text-blue-100 sm:text-xl">
              <strong>Airconditioning specialist Kerkrade</strong> - Professionele airco installatie, onderhoud en reparatie. 
              Erkende F-gassen monteurs met 15+ jaar ervaring in heel Limburg.
            </p>

            {/* Trust Badges */}
            <div className="mb-8 grid grid-cols-2 gap-4 text-sm">
              {[
                'Gratis offerte binnen 24u',
                'Erkend airco installateur',
                'F-gassen gecertificeerd',
                '2 jaar volledige garantie',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="tel:0462021430">
                <Button 
                  size="lg" 
                  className="btn-primary w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Bel Nu: 046 202 1430
                </Button>
              </Link>
              <Link href="#form" className="scroll-smooth">
                <Button 
                  size="lg" 
                  className="btn-secondary w-full sm:w-auto"
                >
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Gratis Offerte Binnen 24u
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Form */}
          <div id="form" className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <h2 className="mb-6 text-2xl font-bold text-white">
              🎯 Gratis Offerte Binnen 24 Uur
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Uw naam"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="input-staycool bg-white/90 backdrop-blur"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="E-mailadres"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="input-staycool bg-white/90 backdrop-blur"
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Telefoonnummer"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="input-staycool bg-white/90 backdrop-blur"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Uw vraag of opmerking"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="input-staycool bg-white/90 backdrop-blur"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Verzenden...'
                ) : (
                  <>
                    <AirVent className="mr-2 h-5 w-5" />
                    Verstuur Aanvraag →
                  </>
                )}
              </Button>
            </form>

            <p className="mt-4 text-sm text-white/80 text-center">
              Of WhatsApp: <a href="https://wa.me/31636481054" className="font-semibold hover:text-white">06 3648 1054</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}