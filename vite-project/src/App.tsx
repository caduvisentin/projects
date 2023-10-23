import './App.css'
import { useState, useEffect } from 'react'

function App() {
  
  const [latitude, setLatitude] = useState(0);

  useEffect(()=>{
    const fetchApi = async () => {
      const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
      const coordenates = await response.json();
      const cordLatitude = coordenates.latitude;
      setLatitude(cordLatitude);
      console.log(cordLatitude);
    }
    fetchApi()
  })
  return (
    <>
      <h1>{latitude}</h1>
    </>
  )
}

export default App
