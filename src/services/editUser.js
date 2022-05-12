import axios from "axios";

const editUser = async (id, userObj) => {
    const URL = `https://users-crud1.herokuapp.com/users/${id}/`;
    const request = await axios.put(URL, userObj)
    return request
}

export default editUser