import axios from "axios"

const createNewUser = async (data) => {

  const URL = "https://users-crud1.herokuapp.com/users/"
  const request = await axios.post(URL, data)

  return request

}

export default createNewUser