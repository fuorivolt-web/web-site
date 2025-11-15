import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contatti() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Contatti</h1>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Per qualsiasi informazione o assistenza, non esitare a contattarci.
            </p>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3">Email</h2>
              <a 
                href="mailto:fuorivolt@gmail.com"
                className="text-lg text-primary hover:underline"
                data-testid="link-email"
              >
                fuorivolt@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
