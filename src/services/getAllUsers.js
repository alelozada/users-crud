import axios from "axios"

const getAllUsers = async () => {

  const URL = "https://users-crud1.herokuapp.com/users/"
  const request = await axios.get(URL)

  return request

}

export default getAllUsers