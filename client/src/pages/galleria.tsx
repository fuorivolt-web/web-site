import Navigation from "@/components/Navigation";
import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";
import GalleryCTA from "@/components/GalleryCTA";
import Footer from "@/components/Footer";

export default function Galleria() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <GalleryHero />
      <GalleryGrid />
      <GalleryCTA />
      <Footer />
    </div>
  );
}
