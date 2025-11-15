import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { SiGoogleplay } from "react-icons/si";
import logoImage from "@assets/fuorivolt-logo-new_1763196208843.png";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1F]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 hover-elevate rounded-md px-3 py-2">
              <img 
                src={logoImage} 
                alt="FuoriVolt" 
                className="h-8 w-auto"
              />
            </div>
          </Link>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 md:gap-6">
              <Link href="/" data-testid="link-nav-home">
                <button 
                  className={`text-sm font-medium transition-colors hover-elevate px-2 md:px-3 py-2 rounded-md ${
                    location === "/" 
                      ? "text-[#00D4FF]" 
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Home
                </button>
              </Link>
              <Link href="/galleria" data-testid="link-nav-gallery">
                <button 
                  className={`text-sm font-medium transition-colors hover-elevate px-2 md:px-3 py-2 rounded-md ${
                    location === "/galleria" 
                      ? "text-[#00D4FF]" 
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Galleria
                </button>
              </Link>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.fuorivolt.app"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-download-nav"
            >
              <Button 
                className="bg-[#00D4FF] hover:bg-[#00D4FF] text-white font-semibold gap-2"
              >
                <SiGoogleplay className="h-5 w-5" />
                <span className="hidden sm:inline">Scarica su Google Play</span>
                <span className="sm:hidden">Scarica</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
