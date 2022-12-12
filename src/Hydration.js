import hydrationData from './data/hydrationData'; //test

class Hydration{
    constructor(apiData){ //data from the hydration array in data folder 
        //placeholder for the API data to replace with interpolation
        this.data = apiData //should the API information
    }
    // addData(userID, date, numOunces) { //I dont need this if/because when its being called has the data
    //     this.data.push({
    //       userID,
    //       date,
    //       numOunces
    //     });
    //   }
    
    //   getData() {
    //     return this.data
    //   }
    // userHydration(hydrationData){ //pass in the data
    //     const currentUserHydration = hydrationData.fliter(userHydrationData => { 
    //        if (userHydrationData.userID === this.userID){ //look through the data and find the ID so we can find the number of oz drank for days/ weeks.
    //         return userHydrationData
    //        }
    //     })
    //     currentUserHydration.reverse() //look from the bottom up 
    //     return currentUserHydration
    // }
    getAverageOuncesForUser(userID) {
        let totalOunces = 0
        let averageOunces = 0
        let userCount = 0
      
        hydrationData.forEach(data => { //change hydrationData to the API
          if (data.userID === userID) {
            totalOunces += data.numOunces
            userCount++
          }
        })
        averageOunces = totalOunces / userCount
        return Math.round(averageOunces)
    }

    // dailyHydrationAvg(){
        //find the date (day) find the number of oz drank by all users and get an avg of amount (oz drank / number of users or number of unique ids) .map make a copy of the array to use to collect all data for oz and users
    // }

    
    // OuncesDrankWeek(){
        //find the days and make a week worth of time add together all of the oz for the week. set a starting day and an ending day do some math to make a week +7? make an index? look at math functions, .split(separator, limiter) limiter can be used to tell it to stop at 7 days? separator tells it how to organize/ split the data. look up slice.
    // }

}

module.exports = Hydration