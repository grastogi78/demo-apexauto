import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Builds } from "@/components/site/Builds";
import { Brands } from "@/components/site/Brands";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Trust />
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
}
