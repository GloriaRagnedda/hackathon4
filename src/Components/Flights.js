export default function Flights({flights}){
    return(
        flights.map((fly, i)=>(
            <h3 key={i}>{fly.data.flyFrom}</h3>
        ))
    )
}