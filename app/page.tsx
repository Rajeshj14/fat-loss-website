
import AboutSection from "@/component/fat-about";
import ThreeImageCarousel from "@/component/fat-befor-after";
import VideoCarousel from "@/component/fat-before";
import ReviewSection from "@/component/fat-contactus";
import FAQ from "@/component/fat-faq";
import Footer from "@/component/fat-footer";
import SwakaayaHeroStats from "@/component/fat-hero";
import DoctorProfile from "@/component/fat-meet-expert";
import Navbar from "@/component/fat-navbar";
import SwakayaaFeatures from "@/component/fat-swakkaya-apart";
import TreatmentSolutions from "@/component/fat-target-program";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SwakaayaHeroStats />
      <VideoCarousel />
      <ThreeImageCarousel />
      <AboutSection />
      <TreatmentSolutions />
      <SwakayaaFeatures />
      <ReviewSection />
      <DoctorProfile />
      <FAQ />
      {/* <Commonmap /> */}
      <Footer />
    </div>
  );
}
