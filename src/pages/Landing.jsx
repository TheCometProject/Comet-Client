import Hero from "../components/Landing/Hero";
import Navbar from "../components/Landing/Navbar";
import Features from "../components/Landing/Features";
import Community from "../components/Landing/Community";
import FAQ from "../components/Landing/FAQ";
import Footer from "../components/Landing/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Community />
      <FAQ />
      <Footer />
    </>
  );
}
