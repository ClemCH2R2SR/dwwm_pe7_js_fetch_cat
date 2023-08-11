"use strict";

function getCatFacts(number)
{    
    let encodedNbFacts = encodeURIComponent(number);
    
    let url = `https://cat-fact.herokuapp.com/facts/random?amount=${encodedNbFacts}`;
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((json) => {
        let catFactContainer = document.querySelector('#cat-fact-list');

        catFactContainer.innerHTML = '';
        
        if (Array.isArray(json)) {
            let i = 0;
            while (i < json.length) {
                let factElement = document.createElement('li');
                factElement.textContent = json[i].text;
                catFactContainer.appendChild(factElement);
                i++;
            }
        } else {
            let factElement = document.createElement('li');
            factElement.textContent = json.text;
            catFactContainer.appendChild(factElement);
        }
    })
    .catch((err) => console.error(`Fetch problem: ${err.message}`));
}

function onFormSubmit(event)
{
    event.preventDefault();
    /* ce qui doit être exécuté à la soumission du formulaire ici :
- aller lire la valeur dans le champ de formulaire
- déclencher la fonction getCatFacts en lui passant cette valeur en paramètre
    */

    let number = document.querySelector('#nb-facts').value;
    getCatFacts(number);
    return false;
}

window.addEventListener('load', function() {
    /* attacher l'eventListener du formulaire */
    document.querySelector('#fact-form').addEventListener('submit', onFormSubmit);
});