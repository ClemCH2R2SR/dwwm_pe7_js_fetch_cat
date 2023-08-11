"use strict";

window.addEventListener('load', (e) => {
    
    let url = `https://date.nager.at/api/v3/CountryInfo/FR`;
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((json) => {
        console.log(json);
    })
    .catch((err) => console.error(`Fetch problem: ${err.message}`));
});