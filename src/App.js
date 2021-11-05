import React, { useState, useEffect } from 'react'
import Flights from './Components/Flights'
import './App.css';

function App() {
  const affilId = 'data4youcbp202106';
  const [flights, setFlights] = useState([])
  const firstUrl = `https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&partner=${affilId}`;

  async function fetchFlights(){
    const response = await fetch(firstUrl);
    const results = await response.json();
    console.log(results.data.flyFrom);
    setFlights(results)
  }

  useEffect(() => {
    fetchFlights();
  }, [])

  return (
    <div className="App">
    <Flights flights={flights}/>
    </div>
  );
}

export default App;
