import React from 'react';

const DirectFlights = ({ directFlight, setdirectFlight }) => {
    return (
        <div>
            <input
                type="checkbox"
                id="directFlight"
                name="directFlight"
                value={directFlight}
                onChange={() => setdirectFlight(!directFlight)}
            />
            <label for="directFlight">Direct Flight</label>
        </div>
    );
};

export default DirectFlights;
