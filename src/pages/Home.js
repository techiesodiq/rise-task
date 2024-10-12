import React from "react";
import AssetClassesSection from "../components/AssetClassesSection";
import CommunitySection from "../components/CommunitySection";
import DownloadAppSection from "../components/DownloadAppSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PartnersSection from "../components/PartnersSection";
import RegulationSection from "../components/RegulationSection";
import SavingSection from "../components/SavingSection";
import ServiceSection from "../components/ServiceSection";
import TestimonialSection from "../components/TestimonialSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <ServiceSection />
      <AssetClassesSection />
      <SavingSection />
      <RegulationSection />
      <TestimonialSection />
      <CommunitySection />
      <DownloadAppSection />
      <Footer />
    </div>
  );
};

export default Home;
