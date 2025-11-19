import treatmentImage from "@/assets/treatment-image.jpg";

const steps = [
  {
    number: "01",
    title: "Anamneză și Istoric",
    description: "Discutăm în detaliu despre simptome, istoric medical și obiectivele tale de sănătate."
  },
  {
    number: "02",
    title: "Examinare Fizică",
    description: "Evaluăm postura, mobilitatea și zonele de disconfort pentru a identifica cauza principală."
  },
  {
    number: "03",
    title: "Plan de Tratament",
    description: "Îți prezentăm un plan personalizat cu număr estimat de ședințe și recomandări pentru acasă."
  },
  {
    number: "04",
    title: "Prima Ajustare",
    description: "Dacă este cazul, începem tratamentul în aceeași ședință cu tehnici blânde și eficiente."
  }
];

const FirstSession = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Cum decurge prima ședință
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Prima vizită durează aproximativ 45-60 de minute și include o evaluare completă pentru a înțelege exact de ce ai nevoie.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={treatmentImage}
                alt="Ședință de chiropractie - Tratament profesional"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSession;
