export default function Button({setSearch, cityFrom, cityTo, affilId}){
    return(
        <button onClick={() => setSearch(`fly_from=${cityFrom}&fly_to=${cityTo}&partner=${affilId}`)}>Submit</button>
    )
}