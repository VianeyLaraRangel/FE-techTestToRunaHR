import React, { useState, useEffect } from 'react';

//My custom hook
const useFetch = (dataResponse) => {
    // Declare a new state variable to save data from API
    const [data, setData] = useState(dataResponse);

    const key = process.env.API_KEY;

    const apiEndpoint = `https://www.potterapi.com/v1/spells?key=${key}`;

    const getDataOfSpells = async () => {
        try {
            const response = await fetch(apiEndpoint);
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.log('erroooor');
        }
    };


    // const apiEndpoint = new URL('https://www.potterapi.com/v1/spells/'), params = { key: key }

    // Object.keys(params).forEach(key => apiEndpoint.searchParams.append(key, params[key]))

    //Function to ajax request
    //     const getDataOfSpells = () => {

    //         // return fetch(apiEndpoint, { key: key })
    //         //     .then((response) => response.json())
    //         //     .then((info) => {
    //         //         let spells = info;
    //         //         console.log(spells);
    //         //         setData({
    //         //             isLoading: false,
    //         //             data: spells
    //         //         })
    //         //         return spells;
    //         //     })
    // }

    useEffect(() => {
        getDataOfSpells()
    }, []);

    return data;

}


const Spells = () => {
    const useFetchResponse = useFetch({ isLoading: true, data: null })

    const { spells } = useFetchResponse;
    console.log(spells);

    return (
        <div>
            <p>Hear Data from API</p>
            <p></p>
            <p>{spells}</p>
        </div>
    )
}

export default Spells;

