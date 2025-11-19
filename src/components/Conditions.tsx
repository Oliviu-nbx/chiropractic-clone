import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import lowerBackPain from "@/assets/lower-back-pain.png";
import neckPain from "@/assets/neck-pain.png";
import hipPain from "@/assets/hip-pain.png";
import kneePain from "@/assets/knee-pain.png";
import upperBackPain from "@/assets/upper-back-pain.png";
import spineXray from "@/assets/spine-xray.jpg";

const conditions = [
  {
    title: "Dureri lombare recurente",
    symptoms: [
      "Greu să te apleci sau să te ridici din pat",
      "Durere surdă după mult timp pe scaun",
      "Blocaj când încerci să te întinzi"
    ],
    service: "Ajustări vertebrale",
    image: lowerBackPain
  },
  {
    title: "Rigiditate cervicală și cefalee",
    symptoms: [
      "Tensiune în ceafă la volan",
      "Durere care coboară spre umeri",
      "Cefalee la final de zi"
    ],
    service: "Terapie pentru gât și umeri",
    image: neckPain
  },
  {
    title: "Sciatică ușoară",
    symptoms: [
      "Disconfort fesier când stai mult jos",
      "Furnicături până la genunchi",
      "Greu să-ți îndrepți trunchiul dimineața"
    ],
    service: "Program de recuperare integrat",
    image: hipPain
  },
  {
    title: "Rigiditate umeri și scapulă",
    symptoms: [
      "Dificultate să ridici brațul peste cap",
      "Oboseală în zona omoplaților",
      "Instabilitate la mișcări rapide"
    ],
    service: "Terapie pentru umeri",
    image: upperBackPain
  },
  {
    title: "Postură la birou",
    symptoms: [
      "Durere între omoplați după lucru la laptop",
      "Cap dus înainte",
      "Rigiditate când rotești trunchiul"
    ],
    service: "Consiliere ergonomică practică",
    image: spineXray
  },
  {
    title: "Tensiuni musculare sportive",
    symptoms: [
      "Picioare rigide după alergare sau ciclism",
      "Recuperare lentă după antrenamente",
      "Dezechilibre între grupele musculare"
    ],
    service: "Program de recuperare sportivă",
    image: kneePain
  }
];

const Conditions = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Afecțiuni frecvente
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            De la dureri lombare până la tensiuni posturale la birou, folosim protocoale clare și recomandări ușor de urmat acasă.
          </p>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="https://wa.me/40750829116" target="_blank" rel="noopener noreferrer">
              Rezervă o evaluare posturală
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-colors group"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
                <img
                  src={condition.image}
                  alt={condition.title}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">{condition.title}</h3>
                <ul className="space-y-2 mb-6">
                  {condition.symptoms.map((symptom, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start gap-2 text-sm">
                      <span className="text-accent mt-1">•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="link"
                  className="text-accent hover:text-accent/80 p-0"
                  asChild
                >
                  <a href="#contact" className="flex items-center gap-2">
                    Află cum te ajută {condition.service}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
