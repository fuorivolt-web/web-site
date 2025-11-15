import { Card, CardContent } from "@/components/ui/card";
import { Map, Search, Info, Zap } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Mappa interattiva delle interruzioni",
    description: "Visualizza tutti i guasti elettrici su una mappa dettagliata dell'Italia con aggiornamenti in tempo reale",
    color: "#00D4FF"
  },
  {
    icon: Search,
    title: "Ricerca e filtri geografici",
    description: "Filtra per regione, provincia o città per trovare velocemente le interruzioni nella tua area",
    color: "#5EFFC4"
  },
  {
    icon: Info,
    title: "Dettaglio dei guasti e interventi programmati",
    description: "Accedi a informazioni complete su ogni interruzione, inclusi tempi stimati di ripristino",
    color: "#9B59D6"
  },
  {
    icon: Zap,
    title: "Interfaccia semplice e immediata",
    description: "Design intuitivo e facile da usare, ottimizzato per una consultazione rapida ed efficace",
    color: "#FF6B7A"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="text-features-title"
          >
            Funzionalità principali
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tutto quello che ti serve per rimanere informato sui guasti elettrici
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-elevate active-elevate-2 border-card-border animate-scale-in hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              data-testid={`card-feature-${index + 1}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 space-y-4">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 hover:rotate-12 hover:scale-110"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon 
                    className="w-8 h-8 transition-all duration-300" 
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className="text-xl font-bold transition-colors duration-300 hover:text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
