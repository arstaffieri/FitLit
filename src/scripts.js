import './css/styles.css';
import './images/turing-logo.png'
import userData from './data/users';
import User from './User';
import UserRepository from './UserRepository';
import fetchUserData from "./apiCalls.js"
import promiseAll from './apiCalls.js'

const userName = document.querySelector('#username') 
const name = document.querySelector('#name') 
const email = document.querySelector('#email')
const address = document.querySelector('#address')
const strideLength = document.querySelector('#stride-length')
const userStepGoal = document.querySelector('#user-goal')
const averageStepGoal = document.querySelector('#average-goal')
const friendsData = document.querySelector('#friends')

let user
let userRepo
let currentUser

// console.log('here', fetchUserData())
Promise.all(fetchUserData()) //pass an array into the args --> 
    .then(data => {
      console.log('data', data[0].userData) //
      const userDataArray = data[0].userData //array of data object --> class instance obj
      const usersArray = userDataArray.map(userObj => new User(userObj)) //

      user = new User(userData[Math.floor(Math.random() * userData.length)])
      userRepo = new UserRepository(usersArray)
      console.log('userRepo', userRepo)
    })

  window.addEventListener('load', () => {
    user
    displayName()
    displayInfo()
    stepGoalDisplay()
    friendNames()
  })

function displayName() {
  userName.innerHTML = `Welcome, ${user.showFirstName()}!`
   }

function displayInfo() {
    name.innerHTML = `Name: ${user.name}`
    email.innerHTML = `Email: ${user.email}`
    address.innerHTML = `Address: ${user.address}`
    strideLength.innerHTML = `Your Stride Length: ${user.strideLength}`
    userStepGoal.innerHTML = `Your Step Goal: ${user.dailyStepGoal}`
    // friendsData.innerHTML = `Your Friends: ${user.friends.showFirstName()}`

}

function stepGoalDisplay() {
    averageStepGoal.innerHTML = `Your step goal is ${user.dailyStepGoal} steps. The average step goal is ${userRepo.getAverageStepGoal()}.`
}

  function friendNames() {
    const userFriends = user.friends
    const findFriendsNames = userFriends.reduce((acc, friend) => {
      const friendInfo = userRepo.getUserData(friend)
      acc += `<p>${friendInfo.name}'s step goal: ${friendInfo.dailyStepGoal}</p>`
      return acc
    }, "")
    friendsData.innerHTML = findFriendsNames
  }


// const makeClasses = (users) => {
//   userRepository = new UserRepository(users);
//   if (currentUser === undefined){
//     getRandomUser();
//   }}
// const getRandomUser = () => {
//   currentUser = new User(userData]);
//   userRepository = new UserRepository(currentUser)
// }

//getrandomIndex  compare user Id
//userRepo has users