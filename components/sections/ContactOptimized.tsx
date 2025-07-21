'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  CheckCircle
} from 'lucide-react';
import { sendEmail } from '@/utils/email';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefoon',
    content: '046 202 1430',
    link: 'tel:0462021430',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    content: '06 3648 1054',
    link: 'https://wa.me/31636481054',
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: 'info@staycoolairco.nl',
    link: 'mailto:info@staycoolairco.nl',
  },
  {
    icon: MapPin,
    title: 'Werkgebied',
    content: 'Heel Limburg',
    link: null,
  },
];

export function ContactOptimized() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(formData);
      setIsSuccess(true);
      toast({
        title: 'Bericht verstuurd!',
        description: 'We nemen zo snel mogelijk contact met u op.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setTimeout(() => setIsSuccess(false), 5000);
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
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Contact Airco Specialist Kerkrade
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <strong>Direct contact</strong> met uw lokale airco installateur. Vragen over airconditioning? Gratis offerte nodig? Wij helpen u graag!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">📞 Direct Contact Airco Kerkrade</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.content}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-orange-500" />
                <h4 className="text-xl font-bold">Openingstijden</h4>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Maandag</span>
                  <span className="font-semibold text-gray-900">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dinsdag - Donderdag</span>
                  <span className="font-semibold text-gray-900">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Vrijdag</span>
                  <span className="font-semibold text-gray-900">09:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Zaterdag - Zondag</span>
                  <span className="font-semibold text-gray-900">Gesloten</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-orange-600 font-semibold">
                Spoedservice beschikbaar
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-staycool">
            <h3 className="text-2xl font-bold mb-6">✉️ Gratis Offerte Aanvragen</h3>
            
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-800 mb-2">
                  Bericht verstuurd!
                </h4>
                <p className="text-green-700">
                  We nemen binnen 24 uur contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Naam *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="input-staycool"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefoon *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="input-staycool"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-mailadres *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="input-staycool"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Uw bericht *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                    className="input-staycool"
                    placeholder="Vertel ons waar we u mee kunnen helpen..."
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
                      <Send className="mr-2 h-5 w-5" />
                      Verstuur Aanvraag →
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}