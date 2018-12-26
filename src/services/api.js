import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://s3-us-west-1.amazonaws.com/fbx-fed-homework/fed_home_assignment_api.json`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
