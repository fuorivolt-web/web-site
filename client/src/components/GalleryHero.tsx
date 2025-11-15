import { Button } from "@/components/ui/button";
import { SiGoogleplay } from "react-icons/si";

export default function GalleryHero() {
  return (
    <section className="min-h-[50vh] bg-gradient-to-b from-[#0A0F1F] via-[#0F1528] to-[#141A30] pt-32 pb-16 flex items-center">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 
              className="text-4xl md:text-5xl font-bold text-white"
              data-testid="text-gallery-hero-title"
            >
              Anteprime dell'app
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Esplora le funzionalità di FuoriVolt attraverso le schermate dell'applicazione
            </p>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.fuorivolt.app"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-download-gallery-hero"
          >
            <Button 
              size="lg"
              className="bg-[#00D4FF] hover:bg-[#00D4FF] text-white font-bold text-lg px-8 py-6 gap-3"
            >
              <SiGoogleplay className="h-6 w-6" />
              Scarica su Google Play
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
