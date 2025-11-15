import { Card, CardContent } from "@/components/ui/card";
import homeImg from "@assets/home_1763196224935.jpeg";
import mappeImg from "@assets/mappe_1763196224934.jpeg";
import statisticheImg from "@assets/statistiche_1763196224935.jpeg";
import filtriImg from "@assets/filtri avanzati_1763196224935.jpeg";
import impostazioniImg from "@assets/impostazioni_1763196224935.jpeg";
import aperturaImg from "@assets/apertura app_1763196224934.jpeg";

const screenshots = [
  {
    image: homeImg,
    title: "Mappa Italia",
    description: "Visualizza tutti i guasti elettrici su una mappa interattiva dell'Italia in tempo reale"
  },
  {
    image: mappeImg,
    title: "Selezione Mappa Base",
    description: "Scegli tra diverse tipologie di mappe per una visualizzazione ottimale dei dati"
  },
  {
    image: statisticheImg,
    title: "Dashboard Statistiche",
    description: "Consulta statistiche dettagliate su guasti totali, attivi e zone più colpite"
  },
  {
    image: filtriImg,
    title: "Filtri Avanzati",
    description: "Filtra i guasti per località, regione, tipo di causa e durata stimata"
  },
  {
    image: impostazioniImg,
    title: "Impostazioni Notifiche",
    description: "Personalizza le notifiche per ricevere avvisi sui guasti nella tua area"
  },
  {
    image: aperturaImg,
    title: "Schermata di Avvio",
    description: "Interfaccia moderna e intuitiva con sistema di monitoraggio elettrico avanzato"
  }
];

export default function GalleryGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate active-elevate-2 border-card-border animate-scale-in hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              data-testid={`card-screenshot-${index + 1}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[9/16] overflow-hidden bg-muted">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  data-testid={`img-screenshot-${index + 1}`}
                />
              </div>
              <CardContent className="p-6 space-y-2">
                <h3 className="font-bold text-lg transition-colors duration-300 hover:text-primary" data-testid={`text-screenshot-title-${index + 1}`}>
                  {screenshot.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {screenshot.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
