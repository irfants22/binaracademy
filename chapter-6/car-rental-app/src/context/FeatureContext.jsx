import { createContext, useContext, useState } from "react";
import { CarContext } from "./CarContext";

export const FeatureContext = createContext();

const FeatureContextProvider = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passenger, setPassenger] = useState(0);
  const [dateAndTime, setDateAndTime] = useState("");
  const [result, setResult] = useState([]);

  const { cars } = useContext(CarContext);

  function handleSubmit() {
    const getDateAndTime = new Date(`${date} ${time}`).getTime();
    const normalizeValue =
      Math.floor((getDateAndTime % (100 * 60 * 60 * 1000)) / (60 * 60 * 1000)) +
      1;
    setDateAndTime(normalizeValue);

    const condition = (car) =>
      car.available == true &&
      car.capacity >= passenger &&
      Math.floor(
        (new Date(car.availableAt).getTime() % (100 * 60 * 60 * 1000)) /
          (60 * 60 * 1000)
      ) +
        1 >=
        dateAndTime;
    const filtered = cars.filter(condition);
    setResult(filtered);
  }

  function handleReset() {
    setDate("");
    setTime("");
    setPassenger(0);
    setResult([]);
  }

  return (
    <FeatureContext.Provider
      value={{
        date,
        setDate,
        time,
        setTime,
        passenger,
        setPassenger,
        dateAndTime,
        setDateAndTime,
        result,
        handleSubmit,
        handleReset,
      }}
    >
      {props.children}
    </FeatureContext.Provider>
  );
};

export default FeatureContextProvider;
