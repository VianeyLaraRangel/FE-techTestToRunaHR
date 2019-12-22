import React, { useState, useEffect } from 'react';

//My custom hook
const useFetch = (url, defaultResponse) => {
    // Declare a new state variable to save data from API
    const [data, setData] = useState(defaultResponse);

    //Function to ajax request
    const key = '$2a$10$4tEN6D3D/FFAywchrprgNuppzyUXyGNtrfX3iiitvkT42GWuJhm0S';
    const apiEndpoint = new URL('https://www.potterapi.com/v1/spells/'), params = { key: key };

    const getDataOfSpells = (key, url) => {

        Object.keys(params).forEach(key => apiEndpoint.searchParams.append(key, params[key]))

        return fetch(apiEndpoint, { key: key })
            .then((response) => response.json())
            .then((info) => {
                let spells = info;
                return spells;
            })
    }
    return getDataOfSpells(key, apiEndpoint);
}

const Spells = () => {
    // console.log(useFetch());
    // const userFetchResponse = useFetch(apiEndpoint);

    return (
        <div>
            <p>Hear Data from API</p>
            {/* <p>{spell}</p> */}
        </div>
    )
}

export default Spells;

