import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Conditions from "@/components/Conditions";
import FirstSession from "@/components/FirstSession";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Conditions />
        <FirstSession />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
