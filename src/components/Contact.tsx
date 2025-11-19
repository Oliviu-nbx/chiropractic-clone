import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Programează-te astăzi
            </h2>
            <p className="text-lg text-muted-foreground">
              Confirmăm programarea în 24-48h și îți răspundem la toate întrebările
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Telefon</h3>
              <p className="text-muted-foreground mb-4">Sună-ne direct pentru programări urgente</p>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full" asChild>
                <a href="tel:+40750829116">+40 750 829 116</a>
              </Button>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Trimite-ne un mesaj când îți este convenabil</p>
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
                asChild
              >
                <a href="https://wa.me/40750829116" target="_blank" rel="noopener noreferrer">
                  Trimite mesaj
                </a>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Locație</h3>
                <p className="text-muted-foreground">Str. Doctor Ioan Ratiu nr. 5, Turda</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Program</h3>
                <p className="text-muted-foreground">Luni - Vineri: 09:00 - 19:00</p>
                <p className="text-muted-foreground">Sâmbătă: 09:00 - 14:00</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4490.850639536291!2d23.78299154897516!3d46.567574172619516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749691aa60f3a7d%3A0xf34174cc1f302d1!2sChiropractor%20CBM!5e0!3m2!1sen!2sro!4v1763547951039!5m2!1sen!2sro"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
