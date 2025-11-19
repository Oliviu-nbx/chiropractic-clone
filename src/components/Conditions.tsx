import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const conditions = [
  {
    title: "Dureri lombare recurente",
    symptoms: [
      "Greu să te apleci sau să te ridici din pat",
      "Durere surdă după mult timp pe scaun",
      "Blocaj când încerci să te întinzi"
    ],
    service: "Ajustări vertebrale"
  },
  {
    title: "Rigiditate cervicală și cefalee",
    symptoms: [
      "Tensiune în ceafă la volan",
      "Durere care coboară spre umeri",
      "Cefalee la final de zi"
    ],
    service: "Terapie pentru gât și umeri"
  },
  {
    title: "Sciatică ușoară",
    symptoms: [
      "Disconfort fesier când stai mult jos",
      "Furnicături până la genunchi",
      "Greu să-ți îndrepți trunchiul dimineața"
    ],
    service: "Program de recuperare integrat"
  },
  {
    title: "Rigiditate umeri și scapulă",
    symptoms: [
      "Dificultate să ridici brațul peste cap",
      "Oboseală în zona omoplaților",
      "Instabilitate la mișcări rapide"
    ],
    service: "Terapie pentru umeri"
  },
  {
    title: "Postură la birou",
    symptoms: [
      "Durere între omoplați după lucru la laptop",
      "Cap dus înainte",
      "Rigiditate când rotești trunchiul"
    ],
    service: "Consiliere ergonomică practică"
  },
  {
    title: "Tensiuni musculare sportive",
    symptoms: [
      "Picioare rigide după alergare sau ciclism",
      "Recuperare lentă după antrenamente",
      "Dezechilibre între grupele musculare"
    ],
    service: "Program de recuperare sportivă"
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
            <a href="#programare">Rezervă o evaluare posturală</a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{condition.title}</h3>
              <ul className="space-y-2 mb-6">
                {condition.symptoms.map((symptom, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-start gap-2">
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
                <a href="#servicii" className="flex items-center gap-2">
                  Află cum te ajută {condition.service}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
