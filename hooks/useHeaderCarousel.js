import { useState, useEffect } from "react";
import { headerCarousel } from "../config/globalData";

const useHeaderCarousel = () => {
  const [headerCarouselList, setHeaderCarouselList] = useState([]);

  useEffect(() => {
    setHeaderCarouselList(headerCarousel);
  }, []);

  return { headerCarouselList };
};

export default useHeaderCarousel;
