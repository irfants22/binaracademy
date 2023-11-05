import "./../assets/styles/car.css";
import { useContext, useState } from "react";
import { FeatureContext } from "../context/FeatureContext";

function MyCarFeature() {
  const {
    date,
    time,
    passenger,
    setDate,
    setTime,
    setPassenger,
    handleSubmit,
    handleReset,
  } = useContext(FeatureContext);

  function submitBtn(e) {
    e.preventDefault();
    handleSubmit();
  }

  function resetBtn() {
    handleReset();
  }

  return (
    <>
      <section id="features" className="position-relative">
        <div className="features__ position-absolute start-50 translate-middle">
          <div className="features__container row">
            <div className="features__cont-items p-3">
              <form className="wrapper" action="" onSubmit={submitBtn}>
                <div className="features__items">
                  <label htmlFor="driversType">Tipe Driver</label>
                  <select name="" id="driversType" className="feat-i">
                    <option value="">Pilih Tipe Driver</option>
                    <option value="">Dengan Sopir</option>
                    <option value="">Tanpa Sopir (Lepas Kunci)</option>
                  </select>
                </div>
                <div className="features__items">
                  <label htmlFor="rentalDates">Tanggal</label>
                  <input
                    type="date"
                    id="rentalDates"
                    className="feat-i"
                    placeholder="Tanggal"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                </div>
                <div className="features__items">
                  <label htmlFor="rentalTimes">Waktu Jemput/Ambil</label>
                  <select
                    name=""
                    id="rentalTimes"
                    className="feat-i"
                    value={time}
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                  >
                    <option value="none">Pilih Waktu</option>
                    <option value="08:00">08.00 WIB</option>
                    <option value="09:00">09.00 WIB</option>
                    <option value="10:00">10.00 WIB</option>
                    <option value="11:00">11.00 WIB</option>
                    <option value="12:00">12.00 WIB</option>
                  </select>
                </div>
                <div className="features__items">
                  <label htmlFor="passangersInput">
                    Jumlah penumpang (Optional)
                  </label>
                  <input
                    type="number"
                    id="passangersInput"
                    className="feat-i"
                    placeholder="Jumlah Penumpang"
                    min="1"
                    max="10"
                    value={passenger}
                    onChange={(e) => {
                      setPassenger(e.target.value);
                    }}
                  />
                </div>
                <div className="features__items">
                  <button className="nav__btn">Cari Mobil</button>
                </div>
                <div className="features__items">
                  <button
                    type="button"
                    className="nav__btn-clear"
                    onClick={resetBtn}
                  >
                    Hapus
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyCarFeature;
