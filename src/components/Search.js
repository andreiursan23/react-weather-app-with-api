import { ReactSearchAutocomplete } from "react-search-autocomplete";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    let history = useHistory();
    
    const items = [
        {
            id: 0,
            name: "Paris",
            country: "fr",
        },
        {
            id: 1,
            name: "Guangzhou",
            country: "guangdong",
        },
        {
            id: 2,
            name: "Toronto",
            country: "on",
        },
        {
            id: 5,
            name: "Mykonos",
            country: "gr",
        },
        {
            id: 6,
            name: "Milan",
            country: "it",
        },
        {
            id: 7,
            name: "Madrid",
            country: "es",
        },
        {
            id: 8,
            name: "Stockholm",
            country: "se",
        },
        {
            id: 9,
            name: "Copenhagen",
            country: "dk"
        }
    ];
    
    const handleOnHover = (result) => {
        setCity(result.name);
        setCountry(result.country);
    }

    const handleOnSelect = () => {
        history.push(`/city/${city},${country}`);
    }

    return (
        <div style={{ width: 300 }}>
            <ReactSearchAutocomplete 
                items={items}
                onSelect={handleOnSelect}
                onHover={handleOnHover}
            />
        </div>
    );
};

export default Search;