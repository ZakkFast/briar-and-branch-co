import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProcessSection } from "./components/ProcessSection";
import { QuoteSection } from "./components/QuoteSection";
import { ServicesSections } from "./components/ServicesSection";

export default function App() {
  return (
    <main className="min-h-screen bg-[#F7F1E3] text-[#10251D]">
      <Header />
      <Hero />
      <ServicesSections />
      <ProcessSection />
      <QuoteSection />
      <Footer />
    </main>
  );
}
