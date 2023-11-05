import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CarContext = createContext();

const CarContextProvider = (props) => {
  const [cars, setCars] = useState([]);

  const getListCars = async () => {
    try {
      const car = await axios.get(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      );
      setCars(car.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getListCars();
  }, []);

  return (
    <CarContext.Provider value={{ cars, getListCars }}>
      {props.children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;
