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
    const authorSet = axios.post(`${BASE_URL}${AUTHOR_ENDPOINT}`, {
                    name: name,
                    email: email,
                    password: pass        
                });
    return authorSet;
}

export function getAuthor (){
    const authorResponse = axios.get(
                    `${BASE_URL}${AUTHOR_ENDPOINT}`
                    );
    return authorResponse;
}