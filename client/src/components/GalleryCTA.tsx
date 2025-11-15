import { Button } from "@/components/ui/button";
import { SiGoogleplay } from "react-icons/si";

export default function GalleryCTA() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Pronto a iniziare?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Scarica FuoriVolt e monitora i guasti elettrici nella tua zona
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.fuorivolt.app"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-download-gallery-cta"
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
