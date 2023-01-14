import { useEffect, useState } from "react";
import { categories } from "../config/globalData";

const useCategories = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    setCategoriesList(categories);
  }, []);

  return { categoriesList };
};

export default useCategories;
