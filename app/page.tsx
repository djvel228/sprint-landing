import Hero from "@/components/Hero";
import TrafficCounter from "@/components/TrafficCounter";
import OurStory from "@/components/OurStory";
import HowItWorks from "@/components/HowItWorks";
import ForWhom from "@/components/ForWhom";
import WhatYouLearn from "@/components/WhatYouLearn";
import PastResults from "@/components/PastResults";
import Pricing from "@/components/Pricing";
import LiveStream from "@/components/LiveStream";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrafficCounter />
        <OurStory />
        <HowItWorks />
        <ForWhom />
        <WhatYouLearn />
        <PastResults />
        <Pricing />
        <LiveStream />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
