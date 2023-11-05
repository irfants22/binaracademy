import "./../assets/styles/home.css";
import MyButton from "../components/Button";
import { Link } from "react-router-dom";

function BannerSection() {
  return (
    <>
      <section id="banner">
        <div className="banner__container container-lg"></div>
        <div className="row">
          <div className="col-10 offset-1 banner__content text-center">
            <div className="w-50 d-flex flex-column gap-2">
              <h2 className="main__txt-bold fw-semibold">
                Sewa Mobil di Bekasi Sekarang
              </h2>
              <p className="second__txt fw-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <Link to="/cars">
              <MyButton className="my__btn">Mulai Sewa Mobil</MyButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerSection;
