class Hydration{
    constructor(hydrationData){ 
        this.data = hydrationData
    }
    
    getAverageOuncesForUser(userID) {
        let totalOunces = 0
        let averageOunces = 0
        let userCount = 0
      
        hydrationData.forEach(data => { 
          if (data.userID === userID) {
            totalOunces += data.numOunces
            userCount++
          }
        })
        averageOunces = totalOunces / userCount
        return Math.round(averageOunces)
    }

    getOuncesByDate(userID, date) {
        const userData = hydrationData.find(data => data.userID === userID && data.date === date)
        return userData.numOunces
    }

    getWeeklyOunces(startDate, userID) {
        const startDateObject = new Date(startDate)
        const oneDay = 24 * 60 * 60 * 1000 //24hrs,60mins, 60secs, 1000ms
        const week = [0, 1, 2, 3, 4, 5, 6].map(day => {
            const date = new Date(startDateObject.getTime() + (day * oneDay))
            return hydrationData.find(userHydrationInformation => 
            userHydrationInformation.userID === userID && userHydrationInformation.date === date.toISOString().split("Time")[0]
            ).numOunces
        })
        return week
    }
}

module.exports = Hydration