import axios from '../../node_modules/axios'

const AUTHOR_ENDPOINT = '/Author';
const BASE_URL        = 'https://parseapi.back4app.com/classes';

axios.defaults.baseURL = 'https://parseapi.back4app.com/classes';
axios.defaults.headers = {
        'X-Parse-Application-Id':'8pmsnEDQj7n9UYk6wg1VaBAUrBa3bJhoO18AARl4',
        'X-Parse-REST-API-Key'  :'K9n0EqjGl7RJhZe4o2RLYQeUvxFUUDhvKpjyuyFE',
        'Content-Type'          : 'application/json'
    }
 

export function setAuthor (name, email, pass){
    axios.post(`${BASE_URL}${AUTHOR_ENDPOINT}`, {
        name: name,
        email: email,
        password: pass        
    }).then((response) => {
        console.log(response);
    });
}

export function getAuthor (){
   let response = axios.get(
                    `${BASE_URL}${AUTHOR_ENDPOINT}`
                    ).then((r) => {
                         for(let i = 0; i < r.data.results.length; i++){
                            console.log(r.data.results);
                        }
                    });
    
    return response;
}