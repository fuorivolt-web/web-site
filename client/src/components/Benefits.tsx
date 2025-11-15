import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Bell, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Risparmia tempo",
    description: "Non perdere più tempo a cercare informazioni sui guasti. Trova tutto in un'unica app.",
    color: "#00D4FF"
  },
  {
    icon: Shield,
    title: "Pianifica in anticipo",
    description: "Scopri in anticipo le interruzioni programmate e organizza le tue attività di conseguenza.",
    color: "#5EFFC4"
  },
  {
    icon: Bell,
    title: "Resta sempre aggiornato",
    description: "Ricevi notifiche immediate sui guasti nella tua zona e aggiornamenti in tempo reale.",
    color: "#FF6B7A"
  },
  {
    icon: TrendingUp,
    title: "Dati sempre aggiornati",
    description: "Accedi a statistiche dettagliate e informazioni sempre aggiornate sui guasti elettrici.",
    color: "#9B59D6"
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="text-benefits-title"
          >
            Perché scegliere FuoriVolt
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I vantaggi concreti per la tua vita quotidiana
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="hover-elevate active-elevate-2 border-card-border animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-testid={`card-benefit-${index + 1}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4 text-center">
                <div className="flex justify-center">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 hover:rotate-12 hover:scale-110"
                    style={{ backgroundColor: `${benefit.color}20` }}
                  >
                    <benefit.icon 
                      className="w-7 h-7 transition-transform duration-300" 
                      style={{ color: benefit.color }}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold transition-colors duration-300 hover:text-primary">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
