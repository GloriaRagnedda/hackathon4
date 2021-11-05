export default function Button({
    setSearch,
    cityFrom,
    cityTo,
    affilId,
    directFlight,
}) {
    let searchQuery = `fly_from=${cityFrom}&fly_to=${cityTo}&partner=${affilId}`;

    if (directFlight === false) {
        searchQuery += 'max_stopovers=0';
    }

    return <button onClick={() => setSearch(searchQuery)}>Submit</button>;
}
