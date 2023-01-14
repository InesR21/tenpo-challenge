import { useState, useEffect } from "react";
import { restaurants } from "../config/globalData";

const useRestaurants = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    setRestaurantsList(restaurants);
  }, []);

  return { restaurantsList };
};

export default useRestaurants;
