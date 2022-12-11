import './css/styles.css';
import './images/turing-logo.png'
// import userData from './data/users';
import User from './User';
import UserRepository from './UserRepository';
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

let user
let userRepo
let currentUser
let users
let sleep
let hydrationData

const getData = () => {
  Promise.all(fetchData()) //pass an array into the args --> 
    .then(data => {
      users = data[0].userData 
      user = users[Math.floor(Math.random() * users.length)]
      currentUser = new User(user) 
      sleep = data[1].sleepData

      const sleepById = sleep.find(sleepLog => {
        // const userSleepLog = () =>{
           console.log( 'millerTime',sleepLog.userID)
        //   if (sleepLog.userID === currentUser.id){
        //     return 'currentUser'
        
      })
      console.log('user id?',sleepById)
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
   
}   

function displayUser() {
  userName.innerHTML = `Welcome, ${currentUser.showFirstName()}!`
    name.innerHTML = `Name: ${currentUser.name}`
    email.innerHTML = `Email: ${currentUser.email}`
    address.innerHTML = `Address: ${currentUser.address}`
    strideLength.innerHTML = `Your Stride Length: ${currentUser.strideLength}`
    userStepGoal.innerHTML = `Your Step Goal: ${currentUser.dailyStepGoal}`
  
    // friendNames()
  }

   function displaySleepData(){
    
    // sleepData.innerHTML += 
    // `<li> You slept ${hoursSlept()}hours! yout sleep quality was ${sleepQuality}</li>
    // <li>You slept ${hoursSlept}hours this week! yout sleep quality was ${sleepQuality}</li>
    // <li>$ Your all-time average sleep quality is ${allTimeQuality} and your all-time average number of hours slept is ${allTimeHoursSlept}</li>`
   }

function stepGoalDisplay() {     
  averageStepGoal.innerHTML = `Your step goal is ${currentUser.dailyStepGoal} steps. The average step goal is ${userRepo.getAverageStepGoal()}.`
}

// function friendNames() {
//   const userFriends = currentUser.friends
//   const findFriendsNames = userFriends.reduce((acc, friend) => {
//     const friendInfo = userRepo.getUserData(friend)
//     acc += `<p>${friendInfo.name}'s step goal: ${friendInfo.dailyStepGoal}</p>`
//     return acc
//   }, "")
//   friendsData.innerHTML = findFriendsNames
// }


