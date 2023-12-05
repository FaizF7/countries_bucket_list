import { useState } from "react"


const Country = ({country, handleClick}) => {

    // let visited = false

    const [visited, setVisited] = useState(false)

    const onButtonClick = (()=>{
        console.log(visited);
        let isVisited = visited? 1:0
        handleClick(country, isVisited)
        // console.log(visited);
        let oppVisited = !(visited)
        console.log(oppVisited);
        setVisited(oppVisited)
        console.log(visited);
    })
    
    return (  
        <>
            <h3>{country.name.common}</h3>
            <button 
            type="checkbox"
            onClick={onButtonClick}
            >Visited</button>
        </>
    );
}

export default Country;