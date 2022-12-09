import './css/styles.css';
import './images/turing-logo.png'
// import userData from './data/users';
import User from './User';
import UserRepository from './UserRepository';
import fetchData from "./apiCalls.js"
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
let users
let sleepData
let hydrationData

// const getData = () => {
  Promise.all(fetchData()) //pass an array into the args --> 
  .then(data => {
    console.log('data', data[0].userData) 
    users = [data[0].userData]
    //  sleepData = [data[1]]
    //  hydrationData = [data[2]] //array of data object --> class instance obj
    console.log('user = ', users)
    return [data]
    })//}

  window.addEventListener('load', () => {
    user
    promiseAll
    displayName()
    displayInfoToDom()
    stepGoalDisplay()
    friendNames()
  })

  // console.log('get data',getData)
  function getRandomUser(){
    const newUser = users(user => new User(users[Math.floor(Math.random() * users.length)])) 

    userRepo = new UserRepository(usersArray)
    console.log('userRepo', userRepo)
    return newUser
  }

function displayName() {
  userName.innerHTML = `Welcome, ${user.showFirstName()}!`
   }

function displayInfoToDom() {
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



