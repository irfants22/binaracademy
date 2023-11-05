import "./../assets/styles/home.css";
import ProfileI from "./../assets/icons/photo.png";
import StarI from "./../assets/icons/rate.png";
import LeftButtonI from "./../assets/icons/left-btn.png";
import RightButtonI from "./../assets/icons/right-btn.png";

function TestimonialSection() {
  return (
    <>
      <section id="testimonial">
        <div className="testimonial__container container-lg mx-auto w-lg-75">
          <div className="testimonial__header">
            <div className="testimonial__title text-center">
              <h2 className="main__txt fw-bolder">Testimonial</h2>
              <p className="second__txt">
                Berbagai review positif dari para pelanggan kami
              </p>
            </div>
          </div>
          <div className="testimonial__body py-5 px-2 rounded-2">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel__content d-flex mx-auto w-75 gap-4 gap-lg-3">
                    <div className="my-auto">
                      <img src={ProfileI} alt="Profile" />
                    </div>
                    <div>
                      <img
                        src={StarI}
                        className="mb-3 mb-md-2 mb-lg-2"
                        alt="Star"
                      />
                      <p className="second__txt text-start">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p className="second__txt text-start fw-semibold">
                        John Dee 32, Bromo
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel__content d-flex mx-auto w-75 gap-4 gap-lg-3">
                    <div className="my-auto">
                      <img src={ProfileI} alt="Profile" />
                    </div>
                    <div>
                      <img
                        src={StarI}
                        className="mb-3 mb-md-2 mb-lg-2"
                        alt="Star"
                      />
                      <p className="second__txt text-start">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p className="second__txt text-start fw-semibold">
                        John Dee 32, Bromo
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel__content d-flex mx-auto w-75 gap-4 gap-lg-3">
                    <div className="my-auto">
                      <img src={ProfileI} alt="Profile" />
                    </div>
                    <div>
                      <img
                        src={StarI}
                        className="mb-3 mb-md-2 mb-lg-2"
                        alt="Star"
                      />
                      <p className="second__txt text-start">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p className="second__txt text-start fw-semibold">
                        John Dee 32, Bromo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev carousel__btn"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <img src={LeftButtonI} alt="Left Button" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next carousel__btn"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <img src={RightButtonI} alt="Right Button" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialSection;
