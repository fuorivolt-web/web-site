import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              Questa pagina contiene informazioni sulla privacy policy di FuoriVolt.
            </p>
            <p className="text-muted-foreground">
              Per maggiori informazioni, contattaci attraverso la pagina dei contatti.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
