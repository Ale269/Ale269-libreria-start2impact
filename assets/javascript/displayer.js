import domElement from "./domElement.js";

export default class DisplayResult {

    static displayBooks = function (arrayResult) {

        DisplayResult.clearPage();
        console.log(arrayResult);

        if(arrayResult === "error" || arrayResult.length === 0){

            let div = document.createElement("div");
            domElement.libraryContainer.append(div);

            let alert = document.createElement("h3");
            alert.classList.add("alert");
            alert.textContent = "No book matches";

            let suggestion = document.createElement("h5");
            suggestion.classList.add("suggestion");
            suggestion.textContent = "Please try looking for another category";       

            div.append(alert);
            alert.after(suggestion);

            return;
        }

        for(let i=0; i<arrayResult.length; i++){

            let div = document.createElement("div");
            div.classList.add("book-container");
            div.setAttribute("data-book", arrayResult[i].key);
            domElement.libraryContainer.append(div);

            let title = document.createElement("h3");
            title.textContent = arrayResult[i].title;
            div.append(title);

            let numberOfAuthor = arrayResult[i].authors.length;
            if(numberOfAuthor>8){numberOfAuthor=8};

            for(let j=0; j<numberOfAuthor; j++){
                let author = document.createElement("h5");
                author.textContent = arrayResult[i].authors[j].name;
                title.after(author);
                
                if(j == 7){
                    let endPoint = document.createElement("h5");
                    endPoint.textContent = "...";
                    div.append(endPoint);
                    break;
                }
            }
        }
    };

    static displayDescription = function (bookDescription) {
        let cover = document.createElement("div");
        cover.classList.add("cover");

        let descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("book-description-container");

        let descriptionTitle = document.createElement("h3");
        descriptionTitle.textContent = "Description";
        let description = document.createElement("p");

        if(bookDescription.length <= 1300){
            description.textContent = bookDescription;
        }else{
            const newDescritpion = bookDescription.substring(0, 1300);
            description.innerHTML = newDescritpion + "..." + '<a target="_blank" class="Open-library-link" href="https://openlibrary.org/">(read more on Open Library).</a>'
        }
    
        domElement.container.prepend(cover);
        domElement.body.classList.add("block");
        cover.before(descriptionContainer);
        descriptionContainer.append(descriptionTitle);
        descriptionTitle.after(description);
    };

    static resetDescription = function(event) {
        if(event.target.classList.contains("cover")){
            domElement.container.innerHTML = '<img class="background-image remove-image" src="./assets/image/background-image.svg">';
            domElement.body.classList.remove("block"); 
        }else{return};
        
    }


    static loading = function() {
        let loading = document.createElement("h5");
        loading.textContent = "Loading..."; 
        loading.classList.add("suggestion");
        domElement.libraryContainer.append(loading);
    }

    static clearPage = function () {
        domElement.libraryContainer.innerHTML = "";
    }

    static removeImage = function() {
        domElement.image.classList.add("remove-image");
    }

    static addImage = function() {
        domElement.getImage();
        domElement.image.setAttribute("class", "background-image");
    }
};