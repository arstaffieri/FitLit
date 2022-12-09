// Your fetch requests will live here!
const fetchData = () => {
  return[
  fetch("https://fitlit-api.herokuapp.com/api/v1/users")
    .then((users) => users.json()),
  fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
    .then((sleepData) => sleepData.json()),
  fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
    .then((hydration) => hydration.json())]
        }
  
console.log('I will be a fetch request!', fetchData())

export default fetchData
// export {promiseAll}