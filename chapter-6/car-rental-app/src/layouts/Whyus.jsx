import "./../assets/styles/home.css";
import ThumbsUpI from "./../assets/icons/icon1.png";
import PriceTagI from "./../assets/icons/icon2.png";
import ClockI from "./../assets/icons/icon3.png";
import AwardI from "./../assets/icons/icon4.png";

function WhyusSection() {
  return (
    <>
      <section id="whyus">
        <div className="why-us__container container-lg">
          <div className="why-us__header">
            <div className="why-us__title text-center text-lg-start">
              <h2 className="main__txt fw-bolder">Why Us?</h2>
              <p className="second__txt">
                Mengapa harus pilih Binar Car Rental?
              </p>
            </div>
          </div>
          <div className="why-us__card mt-4">
            <div className="row row-gap-4">
              <div className="col-12 col-md-6 col-lg-3">
                <div
                  className="card"
                  style={{ minWidth: 268 + "px", height: 196 + "px" }}
                >
                  <div className="card-body">
                    <img
                      src={ThumbsUpI}
                      style={{ width: 32 + "px" }}
                      alt="Thumbs Up"
                    />
                    <h3 className="second__txt-bold m-0 fw-bolder">
                      Mobil Lengkap
                    </h3>
                    <p className="second__txt m-0">
                      Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                      dan terawat
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div
                  className="card"
                  style={{ minWidth: 268 + "px", height: 196 + "px" }}
                >
                  <div className="card-body">
                    <img
                      src={PriceTagI}
                      style={{ width: 32 + "px" }}
                      alt="Price Tag"
                    />
                    <h3 className="second__txt-bold m-0 fw-bolder">
                      Harga Murah
                    </h3>
                    <p className="second__txt m-0">
                      Harga murah dan bersaing, bisa bandingkan harga kami
                      dengan rental mobil lain
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div
                  className="card"
                  style={{ minWidth: 268 + "px", height: 196 + "px" }}
                >
                  <div className="card-body">
                    <img
                      src={ClockI}
                      style={{ width: 32 + "px" }}
                      alt="Clock"
                    />
                    <h3 className="second__txt-bold m-0 fw-bolder">
                      Layanan 24 Jam
                    </h3>
                    <p className="second__txt m-0">
                      Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                      juga tersedia di akhir minggu
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div
                  className="card"
                  style={{ minWidth: 268 + "px", height: 196 + "px" }}
                >
                  <div className="card-body">
                    <img
                      src={AwardI}
                      style={{ width: 32 + "px" }}
                      alt="Award"
                    />
                    <h3 className="second__txt-bold m-0 fw-bolder">
                      Sopir Profesional
                    </h3>
                    <p className="second__txt m-0">
                      Sopir yang profesional, berpengalaman, jujur, ramah dan
                      selalu tepat waktu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyusSection;
