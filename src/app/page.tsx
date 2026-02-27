import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { About } from "@/components/sections/About";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { Footer } from "@/components/sections/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <Overview />
        <WhoThisIsFor />
        <Services />
        <HowItWorks />
        <About />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
