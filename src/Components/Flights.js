import { DateTime } from 'luxon';

export default function Flights({flights}){
    return(
        flights.map((fly, i)=>(
            <div key={i}>
            <h3>Fly from : {fly.cityFrom} ({fly.flyFrom})</h3>
            <h3>Fly to : {fly.cityTo} ({fly.flyTo})</h3>
            <p >Time of departure : {DateTime.fromMillis(fly.aTime * 1000).toFormat('hh:mm')}</p>
            <p>Time of landing: {DateTime.fromMillis(fly.dTime * 1000).toFormat('hh:mm')}</p>
            <p>Departure : {fly.duration.departure}</p>
            <p>Price : {fly.price} €</p>

            </div>
        ))
    )
}