import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { HeroSection } from "@/components/HeroSection/hero-section";
import CarrosselSection from "@/components/carrosselSection/carrosselSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <CarrosselSection />
      <Footer />
    </div>
  );
}
