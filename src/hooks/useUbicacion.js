import { usePosition } from "use-position";
import { useEffect, useState } from "react";

let url =
  "http://api.positionstack.com/v1/reverse?access_key=5e23d03aefeb28719b149564226e4ba9&query=";

export const useUbicacion = () => {
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [watch, setWatch] = useState(false)
  
  const { latitude, longitude } = usePosition(watch, {
    enableHighAccuracy: true,
  });

  useEffect(() => {
    if(latitude !== undefined && longitude !== undefined){
        mandaLocation()
    }
  }, [watch]);

  const mandaLocation = async (lat, lon) => {
    const rest = await fetch(`http://api.positionstack.com/v1/reverse?access_key=5e23d03aefeb28719b149564226e4ba9&query=${lat},${lon}`);
    const data = await rest.json();
    setPais(data.data[0].country);
    setCiudad(data.data[0].region)
    
  };

  return [ciudad, pais, watch, setWatch];
};
