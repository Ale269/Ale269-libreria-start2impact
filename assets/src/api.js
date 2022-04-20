let inputContainer = document.querySelector('.input-container');
let button = document.getElementById('button');
let firstSearh = true;

button.addEventListener("click" , startOperation);

function startOperation() {
    let name = document.getElementById('search-for-city').value;
    getCorrectName(name);
}


function errorManagement(error) {

    // Gestione ed eliminazione dei risultati precedenti
    if(firstSearh === false){
        removeSearchResult();
    }

    // messaggio di errore
    let conteinerOfProperty = document.createElement('div');
    conteinerOfProperty.classList.add('result-container')
    inputContainer.after(conteinerOfProperty);

    let cityName = document.createElement('h2');
    cityName.setAttribute('id', 'city-name');
    conteinerOfProperty.prepend(cityName);
    cityName.textContent = "I can't find the city, please try again";

    // controllo
    firstSearh = false;
}


//fare una richiesta a walk score per avere il nome completo della città e il nome di ricerca
function getCorrectName(name) {
    fetch(`https://api.teleport.org/api/cities/?search=${name}`)
    .then((response) => {
        return response.json();        
    })
    .then((data) => {
        let fullName = data._embedded['city:search-results'][0]['matching_full_name'];
        let searchName = fullName.split(',', 1)[0].toLowerCase().replace(/\s/g, "-")
        getCityData(searchName,fullName);
    })
    .catch((error) => {
        errorManagement(error);
    })
}




// fare una richiesta per ottenere tutti i dati necessari
function getCityData(searchName, fullName){

    fetch(`https://api.teleport.org/api/urban_areas/slug:${searchName}/scores/`)
    .then((response) => {
        return response.json();         
    })
    .then((data) => {
        displayResult(fullName, data.categories, data.summary, data['teleport_city_score'])
    })
    .catch((error) => {
        errorManagement(error);
    })
}





// display dei dati 
function displayResult(fullName, categories, summary, cityScore) {

    // Gestione ed eliminazione dei risultati precedenti
    if(firstSearh === false){
        removeSearchResult();
    }

    // display dei dati a tabella
    let conteinerOfProperty = document.createElement('div');
    conteinerOfProperty.classList.add('result-container')
    inputContainer.after(conteinerOfProperty);

    let cityName = document.createElement('h2');
    cityName.setAttribute('id', 'city-name');
    conteinerOfProperty.prepend(cityName)


    categories.forEach((element) => {
        document.getElementById('city-name').textContent = fullName;

        let resultContainer = document.createElement('div');
        resultContainer.classList.add('results')
        cityName.after(resultContainer);
        
        let property = document.createElement('h3');
        property.textContent = element.name;
        resultContainer.prepend(property);

        let score = document.createElement('p');
        score.textContent = element['score_out_of_10'].toFixed(2) + '/10';
        property.after(score);
    })


    // display della descrizione 
    descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container')
    document.querySelector('.result-container').after(descriptionContainer);
    descriptionContainer.innerHTML = summary;


    // display dello score
    cityScoreContainer = document.createElement('div');
    cityScoreContainer.classList.add('score-container')
    descriptionContainer.after(cityScoreContainer);
    
    scoreProperty = document.createElement('h3');
    scoreProperty.textContent = 'City score:';
    cityScoreContainer.prepend(scoreProperty);

    scoreValue = document.createElement('p');
    scoreValue.textContent = cityScore.toFixed(2);
    scoreProperty.after(scoreValue);


    //controllo
    firstSearh = false;
}


function removeSearchResult() {
    let oldResult = document.querySelectorAll('.results');
    if(oldResult){
        oldResult.forEach((element) => {
            element.remove();
        })
    }

    let oldDescription = document.querySelector('.description-container'); 
    if (oldDescription){
        oldDescription.remove()
    }

    let resultContainer = document.querySelector('.result-container');
    if(resultContainer){
        resultContainer.remove();
    }

    let scoreConteiner = document.querySelector('.score-container');
    if (scoreConteiner){
        scoreConteiner.remove();
    }

}




