import { MapPin, Filter, FileText } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Apri la mappa",
    description: "Visualizza la mappa interattiva dell'Italia con tutti i guasti elettrici in tempo reale",
    color: "#00D4FF"
  },
  {
    icon: Filter,
    title: "Filtra l'area",
    description: "Seleziona la tua regione o città per trovare rapidamente le interruzioni nella tua zona",
    color: "#5EFFC4"
  },
  {
    icon: FileText,
    title: "Visualizza dettagli guasto",
    description: "Accedi a informazioni complete su ogni interruzione e interventi programmati",
    color: "#FF6B7A"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="text-how-it-works-title"
          >
            Come funziona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Inizia a monitorare i guasti elettrici in tre semplici passi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center space-y-4 animate-fade-in-up hover-elevate active-elevate-2 rounded-xl p-6 transition-all duration-300 hover:scale-105"
              data-testid={`card-step-${index + 1}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 hover:rotate-12 hover:scale-110"
                  style={{ backgroundColor: `${step.color}20` }}
                >
                  <step.icon 
                    className="w-10 h-10 transition-transform duration-300" 
                    style={{ color: step.color }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
