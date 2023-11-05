import "./../assets/styles/home.css";
import ISocialMedia from "./../assets/icons/social.png";
import IRectangle from "./../assets/icons/rectangle.png";

function FooterSection() {
  return (
    <>
      <div
        id="footer"
        className="footer__container container-lg d-flex justify-content-evenly px-3 px-lg-0"
      >
        <div className="address">
          <p className="second__txt">
            Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
          </p>
          <p className="second__txt">binarcarrental@gmail.com</p>
          <p className="second__txt">081-233-334-808</p>
        </div>
        <div className="navigation">
          <a href="#services" className="second__txt fw-semibold">
            Our Services
          </a>
          <a href="#whyus" className="second__txt fw-semibold">
            Why Us
          </a>
          <a href="#testimonial" className="second__txt fw-semibold">
            Testimonial
          </a>
          <a href="#faq" className="second__txt fw-semibold">
            FAQ
          </a>
        </div>
        <div className="social">
          <p className="second__txt">Connect with us</p>
          <img src={ISocialMedia} alt="Social Media" />
        </div>
        <div className="copyright">
          <p className="second__txt">Copyright Binar 2022</p>
          <img src={IRectangle} alt="Logo" />
        </div>
      </div>
    </>
  );
}

export default FooterSection;
