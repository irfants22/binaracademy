import "./../assets/styles/result.css";
import carImg from "./../assets/images/carsitem.png";
import user from "./../assets/icons/fi_users.png";
import settings from "./../assets/icons/fi_settings.png";
import calender from "./../assets/icons/fi_calendar.png";
import { useContext } from "react";
import { FeatureContext } from "../context/FeatureContext";

function Card() {
  const { result } = useContext(FeatureContext);

  return (
    <>
      {result.map((item) => (
        <div className="cards" key={item.id}>
          <div className="card-img">
            <img src={carImg} alt={item.manufacture} className="car-img" />
          </div>
          <div className="card-desc">
            <p className="txt-format">
              {item.manufacture} {item.model}
            </p>
            <p className="txt-format_bold fw-bolder">
              RP {item.rentPerDay} / hari
            </p>
            <p className="txt-format">{item.description}</p>
            <ul>
              <li>
                <img src={user} alt={item.capacity} className="car-icon" />
                <p className="m-0 txt-format">{item.capacity} orang</p>
              </li>
              <li>
                <img
                  src={settings}
                  alt={item.transmission}
                  className="car-icon"
                />
                <p className="m-0 txt-format">{item.transmission}</p>
              </li>
              <li>
                <img src={calender} alt={item.year} className="car-icon" />
                <p className="m-0 txt-format">Tahun {item.year}</p>
              </li>
            </ul>
          </div>
          <div className="card-btn">
            <button type="button" className="car-btn">
              Pilih Mobil
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
