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
Promise.all(fetchData()) //pass an array into the args --> 
    .then(data => {
      users = data[0].userData 
      user = users[Math.floor(Math.random() * users.length)] 
      return
    })
      // return users
    
    window.addEventListener('load', () => {
      user
      promiseAll
      getRandomUser()
      displayName()
      displayInfoToDom()
      stepGoalDisplay()
      friendNames()
    })
    
    // user = new User(userData[Math.floor(Math.random() * userData.length)])
    // userRepo = new UserRepository(usersArray)
    // console.log('userRepo', userRepo)
    console.log('get data', user)
    function getRandomUser(){

    const newUser = users(user => new User(users[Math.floor(Math.random() * users.length)])) 

    userRepo = new UserRepository(usersArray)
    console.log('userRepo', userRepo)
    return newUser
  }

function displayName() {
  userName.innerHTML = `Welcome, ${user.showFirstName()}!`
   }

   function displaySleepData(){
    sleepData.innerHTML += 
    `<li> your average number of hours slept per day: ${ourUser.sleep.somthingConectiing}</li>
    <li>your average sleep quality per day over all time: ${ourUser.sleep.somthingConectiing}</li>
    <li>$ your average number of hours slept per day: ${ourUser.sleep.somthingConectiing}</li>
    <li>the numbuer of hours you slept slept on ${getDate} is: ${ourUser.sleep.somthingConectiing}</li> 
    <li>your sleep quality on the ${getDate} is: ${ourUser.sleep.somthingConectiing}</li>
    <li> the number of hours slept each day over a given week is: ${ourUser.sleep.somthingConectiing}</li>
    <li>your sleep quality for each day over the course of a week is: ${ourUser.sleep.somthingConectiing}</li>
    <li>For all users, the average sleep quality is: ${ourUser.sleep.somthingConectiing}</li>`
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



