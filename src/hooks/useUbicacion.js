import { usePosition } from "use-position";
import { useEffect, useState } from "react";



export const useUbicacion = () => {
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [watch, setWatch] = useState(false)
  let requestOptions = {
    method: 'GET',
  };
  
  const { latitude, longitude } = usePosition(watch, {
    enableHighAccuracy: true,
  });

  useEffect(() => {
    if(latitude !== undefined && longitude !== undefined){
        mandaLocation()
    }
  }, [watch]);

  const mandaLocation = (lat, lon) => {
    
    fetch("https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=8545f7326d4c4b58a17bddc2c9a7609c", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    
    
    
    
    // const rest = await fetch(`${lat},${lon}`);
    // const data = await rest.json();
    // setPais(data.data[0].country);
    // setCiudad(data.data[0].region)
    
  };

  return [ciudad, pais, watch, setWatch];
};
