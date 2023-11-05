import MyNavbar from "../components/Navbar";
import HeroSection from "../layouts/Hero";
import FooterSection from "../layouts/Footer";
import MyCarFeature from "../components/CarFeature";
import CarResult from "../layouts/Result";

function Car() {
  return (
    <>
      <header>
        <MyNavbar></MyNavbar>
      </header>
      <main>
        <HeroSection></HeroSection>
        <MyCarFeature></MyCarFeature>
        <CarResult></CarResult>
      </main>
      <footer>
        <FooterSection></FooterSection>
      </footer>
    </>
  );
}

export default Car;
