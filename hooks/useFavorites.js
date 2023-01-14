import { useState, useEffect } from "react";
import { favorites } from "../config/globalData";

const useFavorites = () => {
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    setFavoritesList(favorites);
  }, []);

  return { favoritesList };
};

export default useFavorites;
