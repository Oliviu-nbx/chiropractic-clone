import { ClipboardCheck, Target, Users, Hand, BookOpen, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: ClipboardCheck,
    title: "Evaluări după ghiduri",
    description: "Începem cu anamneză clară și teste validate, ca să știm dacă problema ține de chiropractie sau de investigații suplimentare."
  },
  {
    icon: Target,
    title: "Obiective ușor de urmărit",
    description: "Stabilim ținte simple — durere redusă, mobilitate, toleranță la efort — și le verificăm la fiecare vizită."
  },
  {
    icon: Users,
    title: "Colaborare cu specialiștii tăi",
    description: "Ținem legătura cu medicul, kinetoterapeutul sau antrenorul tău, astfel încât recomandările să nu se contrazică."
  },
  {
    icon: Hand,
    title: "Tehnici adaptate corpului tău",
    description: "Combinăm ajustări blânde, mobilizări, lucru pe țesuturi moi și exerciții scurte. Fără manevre bruște."
  },
  {
    icon: BookOpen,
    title: "Educație aplicată zilnic",
    description: "Îți arătăm cum să ajustezi pozițiile la birou, la volan și acasă, ca să păstrezi progresul obținut."
  },
  {
    icon: DollarSign,
    title: "Transparență la costuri și vizite",
    description: "Discutăm de la început câte ședințe estimăm, cât costă și când poți rări programările."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            De ce Chiropractor CBM?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Planul este realist și previzibil. Explicăm ce facem, de ce și cum urmărești progresul între ședințe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
