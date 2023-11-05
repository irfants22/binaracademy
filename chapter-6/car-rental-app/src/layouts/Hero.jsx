import "./../assets/styles/home.css";
import CarImg from "./../assets/images/img_car.png";
import { Link } from "react-router-dom";

function HeroSection(props) {
  return (
    <>
      <section id="homepage" className="hero">
        <div className="hero__container container-xl">
          <div className="row hero__home">
            <div className="col-xl-6 col-lg-6 col-md-12 mt-5 d-flex flex-column justify-content-center gap-1">
              <h1 className="main__txt-bold fw-bolder">
                Sewa & Rental Mobil Terbaik di kawasan Bekasi
              </h1>
              <p className="second__txt">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Link to="/cars">{props.children}</Link>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 mt-5">
              <img className="img-fluid w-100" src={CarImg} alt="Car" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
