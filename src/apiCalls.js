// Your fetch requests will live here!
const fetchUserData = () => {
        return [fetch("https://fitlit-api.herokuapp.com/api/v1/users")
          .then((response) => response.json())]
        }
  
// console.log('I will be a fetch request!', fetchUserData())

export default fetchUserData
// export {promiseAll}