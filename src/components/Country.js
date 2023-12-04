import { useState } from "react"


const Country = ({country, key, handleClick}) => {

    // let visited = false

    const [visited, setVisited] = useState(false)

    const onButtonClick = (()=>{
        console.log(visited);
        let isVisited = visited? 1:0
        handleClick(country, key, isVisited)
        console.log(visited);
        let oppVisited = !(visited)
        
        setVisited(oppVisited)
        console.log(visited);
    })
    
    return (  
        <>
            <h3>{country.name.common}</h3>
            <button 
            onClick={onButtonClick}
            
            >{visited? "Unvisit":"Visited"}</button>
        </>
    );
}

export default Country;