import HeroSection from "@/components/Hero";
import COllections from "@/components/Collections";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
// import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <COllections />
      <WhyChooseUs />
      {/* <ContactForm /> */}
      <FAQ />

      <Footer />
    </>
  );
}