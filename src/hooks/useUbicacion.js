import { usePosition } from "use-position";
import { useEffect, useState } from "react";

export const useUbicacion = () => {
  const [donde, setDonde] = useState("");
  const [watch, setWatch] = useState(false);
  let requestOptions = {
    method: "GET",
  };

  const { latitude, longitude } = usePosition(watch, {
    enableHighAccuracy: true,
  });

  useEffect(() => {
    if (latitude !== undefined && longitude !== undefined) {
      mandaLocation();
    }
  }, [watch]);

  const mandaLocation = () => {
    fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=8545f7326d4c4b58a17bddc2c9a7609c`
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.features.length) {
          setDonde(result.features[0].properties.address_line2);
          console.log(latitude, longitude);
        } else {
          console.log("No address found");
        }
      });
  };

  return [donde, watch, setWatch];
};
