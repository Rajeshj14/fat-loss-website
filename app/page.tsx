import About from "@/component/About";
import VideoCarousel from "@/component/before";
import ReviewSection from "@/component/Contactus";
import Contact from "@/component/Contactus";
import CTA from "@/component/CTA";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import Commonmap from "@/component/map";
import Navbar from "@/component/Navbar";
import Process from "@/component/Preccess";
import TreatmentSolutions from "@/component/Program";
import Programs from "@/component/Program";
import FAQ from "@/component/Testinominal";
// import Testimonials from "@/component/Testinominal";
import WhyChooseUs from "@/component/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VideoCarousel />
      <CTA />
      <About />
      <TreatmentSolutions />
      <Process />
      <ReviewSection />
      <WhyChooseUs />
      <FAQ />
      <Commonmap />
      <Footer />

      
      
      
    </div>
  );
}
