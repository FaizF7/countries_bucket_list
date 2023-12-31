import React, { useState, useEffect } from 'react';

import CountryList from '../components/CountryList';

const CountryContainer = () => {

    const [allCountries, setAllCountries] = useState([])
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    const loadCountries = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all')
        const countries = await response.json()
        console.log(countries)
        setCountries(countries)
        setAllCountries(countries)
    }

    const onVisitButtonClick = (country, countryId,visited)=>{
        if (countries.includes(country)){
        let UpdatedVisitedCountries = [...visitedCountries,country]
        setVisitedCountries(UpdatedVisitedCountries)
        countries.splice(countries.indexOf(country),1)
        setCountries(countries)
        }
        else{
            let updatedCountries = [...countries,country]
            setCountries(updatedCountries)
            visitedCountries.splice(visitedCountries.indexOf(country),1)
            setVisitedCountries(visitedCountries)
        }
    }

    useEffect(()=>{
        loadCountries()
    },[])

    const filterCountries=(event) =>{
        console.log(event);
        const filteredCountries = allCountries.filter((country)=> country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))

        if (event.target.value.length>0) {setCountries(filteredCountries)}//:setCountries(countries)
    }

    // useEffect((event)=>{
    //     filterCountries(event.target.value)
    // })

    return (  
        <>  
            <h2>Countries Bucket List</h2>
            <input 
            type='text' 
            placeholder='search you country'
            onChange={filterCountries}
            ></input>
            <section>
                <CountryList 
                title = "Countries"
                countries = {countries? countries:<p>Loading...</p>}
                handleVisitButtonClick = {onVisitButtonClick}
                />
                <CountryList 
                title = "Visited Countries"
                countries = {visitedCountries? visitedCountries:<p>Loading...</p>}
                handleVisitButtonClick = {onVisitButtonClick}
                />  
            </section>

        </>
    );
}

export default CountryContainer;