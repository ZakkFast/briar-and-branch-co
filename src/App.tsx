import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProcessSection } from "./components/ProcessSection";
import { QuoteSection } from "./components/QuoteSection";
import { ServicesSection } from "./components/ServicesSection";

export default function App() {
  return (
    <main className="min-h-screen bg-cream text-forest">
      <Header />
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <QuoteSection />
      <Footer />
    </main>
  );
}
