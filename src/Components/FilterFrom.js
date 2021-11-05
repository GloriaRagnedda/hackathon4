export default function FilterFrom({cityFrom, setCityFrom}){
    return(
        <select className="filter" 
    value={cityFrom} 
    onChange={(event) => setCityFrom(event.target.value)}
        >
            <option value="VLC">Valencia</option>
            <option value="BCN">Barcelona</option>
            <option value="MAD">Madrid</option>
            <option value="MXP">Milano</option>
            <option value="ATH">Athens</option>
        </select>
    )
}


/*<select >

    
</select>*/