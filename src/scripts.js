import './css/styles.css';
import './images/turing-logo.png'
// import userData from './data/users';
import User from './User';
import UserRepository from './UserRepository';
import fetchData from "./apiCalls.js"
import promiseAll from './apiCalls.js'

const sleepData = document.querySelector('#sleep-data') 
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
let hydrationData

// console.log('here', fetchUserData())
const getData = () => {
  Promise.all(fetchData()) //pass an array into the args --> 
    .then(data => {
      users = data[0].userData 
      user = users[Math.floor(Math.random() * users.length)]
      currentUser = new User(user) 
      
    displayInfoToDom()
    })
  }
    
window.addEventListener('load', () => {
  user
  promiseAll
  getData()
  displayInfoToDom()
})
    
function displayInfoToDom() {
  displayUserInfo()
}

function displayUserInfo() {
  userName.innerHTML = `Welcome, ${currentUser.showFirstName()}!`
  name.innerHTML = `Name: ${currentUser.name}`
  email.innerHTML = `Email: ${currentUser.email}`
  address.innerHTML = `Address: ${currentUser.address}`
  strideLength.innerHTML = `Your Stride Length: ${currentUser.strideLength}`
  userStepGoal.innerHTML = `Your Step Goal: ${currentUser.dailyStepGoal}`

  stepGoalDisplay()
  friendNames()
}

  function displaySleepData(){
  // sleepData.innerHTML += 
  // `<li> You slept ${hoursSlept()}hours! yout sleep quality was ${sleepQuality(example)}</li>
  // <li>You slept ${hoursSlept(example)}hours this week! yout sleep quality was ${sleepQuality}</li>
  // <li>$ Your all-time average sleep quality is ${allTimeQuality(example)} and your all-time average number of hours slept is ${allTimeHoursSlept(example)}</li>
  }

function stepGoalDisplay() {     
  averageStepGoal.innerHTML = `Your step goal is ${currentUser.dailyStepGoal} steps. The average step goal is ${userRepo.getAverageStepGoal()}.`
}

function friendNames() {
  const userFriends = currentUser.friends
  const findFriendsNames = userFriends.reduce((acc, friend) => {
    const friendInfo = userRepo.getUserData(friend)
      acc += `<p>${friendInfo.name}'s step goal: ${friendInfo.dailyStepGoal}</p>`
      return acc
    }, "")
    friendsData.innerHTML = findFriendsNames
  }