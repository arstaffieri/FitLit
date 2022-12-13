import './css/styles.css';
import './images/turing-logo.png'
// import userData from './data/users';
import User from './User';
import UserRepository from './UserRepository';
// import hydrationData from './data/hydrationData';
// import Hydration from './Hydration.js';

import fetchUserData from "./apiCalls.js"
import Hydration from './Hydration.js'
import fetchData from './apiCalls.js'

import promiseAll from './apiCalls.js'
import Sleep from './Sleep.js'


const sleepData = document.querySelector('#sleep-data') 
const userName = document.querySelector('#username') 
const name = document.querySelector('#name') 
const email = document.querySelector('#email')
const address = document.querySelector('#address')
const strideLength = document.querySelector('#stride-length')
const userStepGoal = document.querySelector('#user-goal')
const averageStepGoal = document.querySelector('#average-goal')
const friendsData = document.querySelector('#friends')
const hydrationData = document.querySelector('#hydration-data')

let user
let userRepo
let currentUser
let currentDate
let users
let sleep
let sleepLog
let sleepID
let hydration
let hydrationLog
let water

const getData = () => {
  Promise.all(fetchData()) //pass an array into the args --> 
    .then(data => {
      users = data[0].userData 
      user = users[Math.floor(Math.random() * users.length)]
      currentUser = new User(user) 
      
      sleep = data[1].sleepData
      sleepID = sleep.find(log => {
        if(log.userID == currentUser.id){
          return log
        }
      })
      sleepLog = new Sleep(sleep, currentUser.id)
      currentDate = sleepLog.sleepData.slice(-1)[0].date 

      hydration = data[2].hydrationData
      hydrationLog = hydration.find(log => {
        if(log.userID == currentUser.id){
          return log
        }
      })
      water = new Hydration(hydration)
      
    displayInfoToDom()
    })}
     
window.addEventListener('load', () => {
  user
  promiseAll
  getData()
  displayInfoToDom()
})

function displayInfoToDom() {
  displayUser()
  stepGoalDisplay()
  displaySleepData()
  displayHydrationData()
}   

function displayUser() {
  userName.innerHTML = `Welcome, ${currentUser.showFirstName()}!`
    name.innerHTML = `Name: ${currentUser.name}`
    email.innerHTML = `Email: ${currentUser.email}`
    address.innerHTML = `Address: ${currentUser.address}`
    strideLength.innerHTML = `Your Stride Length: ${currentUser.strideLength}`
    userStepGoal.innerHTML = `Your Step Goal: ${currentUser.dailyStepGoal}`
    displaySleepData()
    friendNames()
  }

   function displaySleepData(){
    sleepData.innerHTML = ``
    sleepData.innerHTML += 
    `<li>You slept ${sleepLog.findHoursSleptByDate(currentUser.id, currentDate)} hours! your sleep quality was ${sleepLog.findSleepQualityByDate(currentUser.id, currentDate)} </li>
    <li>You slept ${sleepLog.findWeeklySleepHours(currentUser.id, currentDate)}hours this week! your sleep quality was ${sleepLog.findWeeklySleepQuality(currentUser.id, currentDate)}</li>
    <li> Your all-time average sleep quality is ${sleepLog.findAverageSleepQuality(currentUser.id)} and your all-time average number of hours slept is ${sleepLog.findAverageSleepHours(currentUser.id)}</li>`
   }

function stepGoalDisplay() {     
  averageStepGoal.innerHTML = `Your step goal is ${currentUser.dailyStepGoal} steps. The average step goal is ${userRepo.getAverageStepGoal()}.`
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

function displayHydrationData() {
  console.log('water', water)
  hydrationData.innerHTML = ``
  hydrationData.innerHTML += 
 `<li>You have drank ${water.getOuncesByDate(currentUser.id, currentDate)} water today</li>`
  // <li>You drank ${waterOverTheLastWeek}</li>`
 }

