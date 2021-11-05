import React, { useState, useEffect } from 'react';
import Flights from './Components/Flights';
import './App.css';
import Reload from './Components/Reload';
import FilterFrom from './Components/FilterFrom';
import FilterTo from './Components/FilterTo';
import Button from './Components/Button';
import DirectFlights from './Components/DirectFlights';

function App() {
    const affilId = 'data4youcbp202106';
    const [flights, setFlights] = useState([]);
    const [directFlight, setdirectFlight] = useState(false);
    const [loading, setLoading] = useState(false);
    const [cityFrom, setCityFrom] = useState('PRG');
    const [cityTo, setCityTo] = useState('VLC');
    const [search, setSearch] = useState(
        `fly_from=${cityFrom}&fly_to=${cityTo}&partner=${affilId}`
    );
    const firstUrl = `https://api.skypicker.com/flights?${search}`;

    async function fetchFlights() {
        setLoading(true);
        const response = await fetch(firstUrl);
        const results = await response.json();
        console.log(results);
        setFlights(results.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchFlights();
    }, [search]);

    return (
        <div className="App">
            <FilterFrom cityFrom={cityFrom} setCityFrom={setCityFrom} />
            <FilterTo cityTo={cityTo} setCityTo={setCityTo} />
            <DirectFlights
                directFlight={directFlight}
                setdirectFlight={setdirectFlight}
            />
            <Button
                setSearch={setSearch}
                cityFrom={cityFrom}
                cityTo={cityTo}
                affilId={affilId}
                directFlight={directFlight}
            />
            {loading ? <Reload /> : <Flights flights={flights} />}
        </div>
    );
}

export default App;
