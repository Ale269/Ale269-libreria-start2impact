import axios from "axios";

export default class GetBook {
    static getList = async function(url) {
        return axios.get(url)
        .then(response => response.data.works)
        .catch(error => "error");
    };

    static getDescription = async function(url) {
        return axios.get(url)
        .then((response) => {
            if(typeof response.data.description == "object" || response.data.description == undefined){
                return "Description is not available for this book";
            }
            return response.data.description;
        })
    }
};
