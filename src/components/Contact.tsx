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
                <p className="text-muted-foreground">Str. Exemplu Nr. 123, Turda, Cluj</p>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
