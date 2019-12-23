import React, { useState, useEffect } from 'react';

import List from '../Components/SpellsList';

//My custom hook
const useFetch = (apiEndpoint, dataResponse) => {
    // Declare a new state variable to save data from API
    const [data, setData] = useState(dataResponse);

    useEffect(() => {
        async function getDataOfSpells() {
            try {
                const response = await fetch(apiEndpoint);
                const data = await response.json();
                setData({
                    isLoading: false,
                    data: data
                })
                console.log(data);
                return data;
            } catch (e) {
                console.log(e);
            }
        };
        getDataOfSpells()
    }, [apiEndpoint]);

    return data;

}

const Spells = () => {

    const key = '$2a$10$4tEN6D3D/FFAywchrprgNuppzyUXyGNtrfX3iiitvkT42GWuJhm0S';
    const apiEndpoint = `https://www.potterapi.com/v1/spells?key=${key}`;

    const useFetchResponse = useFetch(apiEndpoint, { isLoading: true, data: null })
    
    const spells = useFetchResponse.data;

    return (
        <div>
            {useFetchResponse.isLoading && <p>Holaaaa</p> }
            {!useFetchResponse.isLoading && <List
            spells={spells}
            /> }
        </div>
    )
}

export default Spells;

