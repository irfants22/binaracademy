import "./../assets/styles/home.css";
import MyAccordion from "../components/Accordion";

function FaqSection() {
  return (
    <>
      <section id="faq">
        <div className="faq__container">
          <div className="row px-3 px-lg-0">
            <div className="col-12 col-lg-5 offset-lg-1 text-center text-lg-start">
              <h3 className="main__txt fw-bolder">Frequently Asked Question</h3>
              <p className="second__txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="col-12 col-lg-5">
              <MyAccordion></MyAccordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqSection;
