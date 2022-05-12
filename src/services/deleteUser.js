import axios from "axios";

const deleteUser = async (id) => {
    const URL = `https://users-crud1.herokuapp.com/users/${id}/`
    const request = await axios.delete(URL);
    return request
}

export default deleteUser