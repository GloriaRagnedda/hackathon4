export default function FilterTo({cityTo, setCityTo}){
    return(
        <select  className="filter"
    value={cityTo} 
    onChange={(event) => setCityTo(event.target.value)}
        >
            <option value="PRG">Prague</option>
            <option value="BER">Berlin</option>
            <option value="WAW">Warsaw</option>
            <option value="PED">Pardubice</option>
        </select>
    )
}
