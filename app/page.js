import AllConfessionsPage from "./components/ConfessionsPage/AllConfessionsPage";
import SingleConfessionCard from "./components/ConfessionsPage/SingleConfessionCard";
import FooterSection from "./components/Footer/FooterSection";
import LandingHeroSection from "./components/LandingPage/LandingHeroSection";

export default function Home() {
  return (
    <>
      <LandingHeroSection />
      {/* All confessions would be displayed here one by one with compressed text */}
      <AllConfessionsPage />

      {/* Footer */}
      <FooterSection />
    </>
  );
}
