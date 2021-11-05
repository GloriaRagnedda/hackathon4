export default function Button({
    setSearch,
    cityFrom,
    cityTo,
    affilId,
    directFlight,
    setLoading
}) {
    let searchQuery = `fly_from=${cityFrom}&fly_to=${cityTo}&partner=${affilId}`;

    if (directFlight === true) {
        searchQuery += '&max_stopovers=0';
    }

    const handleButtton = () => {
        setLoading(true)
        setSearch(searchQuery)
    }
    return <div className="btn-container"><button className= "btn" onClick={() => setSearch(searchQuery)}>Submit</button></div>;
}
