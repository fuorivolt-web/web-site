import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1F] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <p className="text-sm text-white/60" data-testid="text-copyright">
              © {new Date().getFullYear()} FuoriVolt. Tutti i diritti riservati.
            </p>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://fuorivolt-web.github.io/fuorivolt-privacy/" 
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-privacy"
            >
              <button className="text-sm text-white/60 hover:text-white transition-colors hover-elevate px-3 py-2 rounded-md">
                Privacy Policy
              </button>
            </a>
            <Link href="/contatti" data-testid="link-contact">
              <button className="text-sm text-white/60 hover:text-white transition-colors hover-elevate px-3 py-2 rounded-md">
                Contatti
              </button>
            </Link>
          </div>

          <div className="flex justify-center md:justify-end">
            <p className="text-sm text-white/40">
              Monitora i guasti elettrici in Italia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
