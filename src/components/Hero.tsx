import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/spine-pain-hero.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Programări confirmate în 24–48h
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Chiropractor CBM Turda — Coloană în echilibru, pași clari mai departe
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Echipa noastră certificată combină ajustările chiropractice cu explicații clare,
              ca să știi ce urmează după fiecare vizită și cum păstrezi rezultatele acasă.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base"
                asChild
              >
                <a href="https://wa.me/40750829116" target="_blank" rel="noopener noreferrer">
                  Programează-te
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary text-base"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  Vezi pașii pentru programare
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <Button
              variant="link"
              className="text-muted-foreground hover:text-accent p-0"
              asChild
            >
              <a href="tel:+40750829116" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Preferi să suni? +40 750 829 116
              </a>
            </Button>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">Evaluare clară</h3>
                <p className="text-sm text-muted-foreground">
                  Identificăm cauza principală a durerii și îți explicăm în termeni simpli traseul terapeutic.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">Plan ghidat</h3>
                <p className="text-sm text-muted-foreground">
                  Primești recomandări scrise pentru acasă și momentele-cheie când reluăm ședințele.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-secondary">
              <img
                src={heroImage}
                alt="Chiropractor CBM Turda - Evaluare profesională"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
