export default class GetBook {
    static getList = async function(url) {
        return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.works;
        })
    };

    static getDescription = async function(url) {
        return fetch(url)
        .then(response => response.json())
        .then(data => {
            if(typeof data.description == "object" || data.description == undefined){
                return "Description is not available for this book";
            }
            return data.description;
        })
    }
};