import axios from 'axios'

const baseURL = "http://localhost:3001/persons";

const getAll = () => {
    console.log("Getting data");
    const request = axios.get(baseURL);
    return (request.then(resolve => resolve.data));
}
const create = (newObject) => {
    console.log("post data");
    const request = axios.post(baseURL, newObject);
    return (request.then(resolve => resolve.data));
}

const deleteObject = (id) => {
    console.log("Delete data")
    const request = axios.delete(`${baseURL}/${id}`);
    return request;
    
}

const update = (newObject) => {
    const url = `${baseURL}/${newObject.id}`;
    const request = axios.put(url, newObject);
    return (
        request.then(resolve => resolve.data)
    )
}


    
export default { getAll, create, deleteObject, update };