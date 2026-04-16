import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanyVideo from "@/components/CompanyVideo";
import About from "@/components/About";
import Services from "@/components/Services";
import Highlights from "@/components/Highlights";
import StoneSlider3D from "@/components/StoneSlider3D";
import Catalog from "@/components/Catalog";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <CompanyVideo />
      <About />
      <Services />
      <Highlights />
      <StoneSlider3D />
      <Catalog />
      <Portfolio />
      <Testimonials />
      <QuoteForm />
      <Contact />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
