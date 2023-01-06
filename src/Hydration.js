class Hydration{
    constructor(userHydrationData, userID){ 
        this.hydrationData = userHydrationData
        this.userID = userID
    }

    findhydrationDataByUserId(userID) {
        const hydrationDataByUserId = this.hydrationData.filter(user => {
         if(userID === user.userID) {
             return user
         }
        })
    return hydrationDataByUserId
    }

    getAverageOuncesForUser(userID) {
        let totalOunces = 0
        let averageOunces = 0
        let userCount = 0
        this.hydrationData.forEach(hydrationData => { 
          if (hydrationData.userID === userID) {
            totalOunces += hydrationData.numOunces
            userCount++
          }
        })
        averageOunces = totalOunces / userCount
        return Math.round(averageOunces)
    }

    getOuncesByDate(userID, date) {
        const userhydrationData = userHydrationData.find(hydrationData => hydrationData.userID === userID && hydrationData.date === date)
        return userhydrationData.numOunces
    }

    getWeeklyOunces(startDate, userID) {
        const startDateObject = new Date(startDate)
        const oneDay = 24 * 60 * 60 * 1000 //24hrs,60mins, 60secs, 1000ms
        const week = [0, 1, 2, 3, 4, 5, 6].map(day => {
            const date = new Date(startDateObject.getTime() + (day * oneDay))
            return userHydrationData.find(userHydrationInformation => 
            userHydrationInformation.userID === userID && userHydrationInformation.date === date.toISOString().split("Time")[0]
            ).numOunces
        })
        return week
    }
}

module.exports = Hydration