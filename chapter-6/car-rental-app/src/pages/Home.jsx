import MyNavbar from "../components/Navbar";
import HeroSection from "../layouts/Hero";
import ServiceSection from "../layouts/Service";
import TestimonialSection from "../layouts/Testimonial";
import WhyusSection from "../layouts/Whyus";
import BannerSection from "../layouts/Banner";
import FaqSection from "../layouts/Faq";
import FooterSection from "../layouts/Footer";
import MyButton from "../components/Button";

function Home() {
  return (
    <>
      <header>
        <MyNavbar></MyNavbar>
      </header>
      <main>
        <HeroSection>
          <MyButton className="my__btn">Mulai Sewa Mobil</MyButton>
        </HeroSection>
        <ServiceSection></ServiceSection>
        <WhyusSection></WhyusSection>
        <TestimonialSection></TestimonialSection>
        <BannerSection></BannerSection>
        <FaqSection></FaqSection>
      </main>
      <footer>
        <FooterSection></FooterSection>
      </footer>
    </>
  );
}

export default Home;
