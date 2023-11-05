import "./../assets/styles/home.css";
import ServiceImg from "./../assets/images/img_service.png";
import CheckI from "./../assets/icons/check.png";

function ServiceSection() {
  return (
    <>
      <section id="services">
        <div className="services__container container-xl">
          <div className="row services__items">
            <div className="col-xl-6 col-lg-6 col-md-12 d-flex justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-center mb-md-5 mb-5">
              <img
                className="img-fluid"
                src={ServiceImg}
                style={{ width: 459 + "px" }}
                alt="Girl"
              />
            </div>
            <div className="col-xl-5 col-lg-5 col-md-7 d-flex flex-column justify-content-center">
              <h2 className="main__txt fw-bolder">
                Best Car Rental for any kind of trip in Bekasi!
              </h2>
              <p className="second__txt">
                Sewa mobil di Bekasi bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul className="p-0">
                <li className="mb-3">
                  <img src={CheckI} style={{ width: 24 + "px" }} />
                  <p className="second__txt m-0">
                    Sewa Mobil Dengan Supir di Bali 12 Jam
                  </p>
                </li>
                <li className="mb-3">
                  <img src={CheckI} style={{ width: 24 + "px" }} />
                  <p className="second__txt m-0">
                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                  </p>
                </li>
                <li className="mb-3">
                  <img src={CheckI} style={{ width: 24 + "px" }} />
                  <p className="second__txt m-0">
                    Sewa Mobil Jangka Panjang Bulanan
                  </p>
                </li>
                <li className="mb-3">
                  <img src={CheckI} style={{ width: 24 + "px" }} />
                  <p className="second__txt m-0">
                    Gratis Antar - Jemput Mobil di Bandara
                  </p>
                </li>
                <li className="mb-3">
                  <img src={CheckI} style={{ width: 24 + "px" }} />
                  <p className="second__txt m-0">
                    Layanan Airport Transfer / Drop In Out
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceSection;
