import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../Utils/constants';

const useFetch = (url, defaultResponse) => {
    const [data, setData] = useState(defaultResponse);

    async function getDataFromAPI(url) {
        try {
            const response = await fetch(url, {key:key});
            const data = await response.json();
            setData({
                isLoading: false,
                data
            })
        } catch (e) {
            console.error(e);
        }
    }
    
    useEffect(() => {
        getDataFromAPI(url);
    }, [url]);
    
    return data;
}

const key = '$2a$10$4tEN6D3D/FFAywchrprgNuppzyUXyGNtrfX3iiitvkT42GWuJhm0S';

const urlSpells = new URL('https://www.potterapi.com/v1/spells'),
params = {key: key}

Object.keys(params).forEach(key => urlSpells.searchParams.append(key, params[key]))

console.log(urlSpells);

const Spells = () => {
    // const apiEndpoint = (`${BASE_URL}`);
    const userFetchResponse = useFetch(urlSpells, {isLoading:true, data: null});
    
    if (!userFetchResponse.data || userFetchResponse.isLoading) {
        return console.log('Loading...');
    } else {
        console.log('erroooor');
    }

    const spell  = userFetchResponse.data.data;
    
    console.log(spell);
    return (
    <ul>Name: {spell}</ul>
    );
}

export default Spells;

