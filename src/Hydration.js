import hydrationData from './data/hydrationData';

class Hydration{
    constructor(id, hydrationData){ //data from the hydration array in data folder 
        //placeholder for the API data to replace with interpolation
        this.userID = id
        this.hydrationData = this.userHydration(hydrationData)
        // this.date = hydrationData[0].date //get the date from the data
        // this.numOunces = hydrationData[0].numOunces //get the num of oz from data
        // this.data = hydrationData 
    }

    userHydration(hydrationData){ //pass in the data
        const currentUserHydration = hydrationData.fliter(userHydrationData => { 
           if (userHydrationData.userID === this.userID){ //look through the data and find the ID so we can find the number of oz drank for days/ weeks.
            return userHydrationData
           }
        })
        currentUserHydration.reverse() //look from the bottom up 
        return currentUserHydration
    }

    // dailyHydrationAvg(){
        //find the date (day) find the number of oz drank by all users and get an avg of amount (oz drank / number of users or number of unique ids) .map make a copy of the array to use to collect all data for oz and users
    // }

    // OuncesDrankDay(){
        //find the day and the oz .find?
    // }

    // OuncesDrankWeek(){
        //find the days and make a week worth of time add together all of the oz for the week. set a starting day and an ending day do some math to make a week +7? make an index? look at math functions, .split(separator, limiter) limiter can be used to tell it to stop at 7 days? separator tells it how to organize/ split the data. look up slice.
    // }

}

module.exports = Hydration