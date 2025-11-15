import { Button } from "@/components/ui/button";
import { SiGoogleplay } from "react-icons/si";
import heroImage from "@assets/apertura app_1763196224934.jpeg";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0A0F1F] via-[#0F1528] to-[#141A30] pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                data-testid="text-hero-title"
              >
                FuoriVolt – Monitora guasti elettrici nella tua zona
              </h1>
              <p 
                className="text-lg md:text-xl text-white/70 leading-relaxed"
                data-testid="text-hero-subtitle"
                style={{ animationDelay: '0.1s' }}
              >
                Scopri in tempo reale le interruzioni elettriche nella tua area. 
                Mappa interattiva, filtri avanzati e dettagli completi sui guasti.
              </p>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.fuorivolt.app"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-download-hero"
              style={{ animationDelay: '0.2s' }}
            >
              <Button 
                size="lg"
                className="bg-[#00D4FF] hover:bg-[#00D4FF] text-white font-bold text-lg px-8 py-6 gap-3 animate-pulse-glow hover:scale-105 transition-all duration-300"
              >
                <SiGoogleplay className="h-6 w-6" />
                Scarica su Google Play
              </Button>
            </a>
          </div>

          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/20 to-[#5EFFC4]/20 blur-3xl rounded-full animate-pulse"></div>
              <img
                src={heroImage}
                alt="FuoriVolt App Screenshot"
                className="relative w-full max-w-sm lg:max-w-md rounded-3xl shadow-2xl transform lg:rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500"
                data-testid="img-hero-phone"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
