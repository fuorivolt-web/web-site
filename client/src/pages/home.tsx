import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import VideoTutorial from "@/components/VideoTutorial";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <VideoTutorial />
      <Features />
      <Benefits />
      <Footer />
    </div>
  );
}
