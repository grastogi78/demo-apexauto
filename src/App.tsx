import { useEffect } from "react";
import ConceptBanner from "@/components/site/ConceptBanner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { DriverDetails } from "@/components/site/DriverDetails";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Builds } from "@/components/site/Builds";
import { Brands } from "@/components/site/Brands";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { BrandsPage } from "@/pages/BrandsPage";

// Lightweight pathname router — no router library needed for a two-route site.
const pathname = typeof window !== "undefined" ? window.location.pathname : "/";

function App() {
  // After the SPA loads (e.g. navigated here from /brands via /#builds),
  // the browser's native hash scroll fires before React paints the sections.
  // This effect re-triggers the scroll once the DOM is ready.
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  const page = pathname === "/brands" ? (
    <BrandsPage />
  ) : (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Trust />
      <DriverDetails />
      <Services />
      <Process />
      <Builds />
      <Brands />
      <Gallery />
      <Reviews />
      <FinalCTA />
      <Footer />
    </main>
  );

  return (
    <>
      <ConceptBanner />
      <div style={{ paddingTop: '30px' }}>
        {page}
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;
