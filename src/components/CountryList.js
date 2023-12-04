import Country from "./Country";

const CountryList = ({title, countries, handleVisitButtonClick}) => {

    
    const countriesList = countries.map((country, i)=>{
        return <li><Country country = {country} key = {i} handleClick = {handleVisitButtonClick}></Country></li>
    })

    return (  

        <div>
            <h2>{title}</h2>
            <ul>
            {countries? countriesList:<p>Loading...</p>}
            </ul>
            
        </div>

    );
}

export default CountryList;