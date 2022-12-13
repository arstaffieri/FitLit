class Sleep {
    constructor(sleepData, userID) {
        this.sleepData = sleepData
        this.userID = userID
    }
    findSleepDataByUserId(userID) {
       const sleepDataByUserId = this.sleepData.filter(user => {
        if(userID === user.userID) {
            return user
        }
       })
    return sleepDataByUserId
    }
    findAverageSleepHours(userID) {
        const userSleep = this.findSleepDataByUserId(userID)
        const averageSleepHours = userSleep.reduce((bed, sleep) => {
            bed += sleep.hoursSlept
            return bed
        }, 0)
        return Number((averageSleepHours/userSleep.length).toFixed(1))
    }
    findAverageSleepQuality(userID) {
        const userSleep = this.findSleepDataByUserId(userID)
        const averageQuality = userSleep.reduce((acc, sleep) => {
            acc += sleep.sleepQuality
            return acc
        }, 0)
        return Number((averageQuality/userSleep.length).toFixed(1))
    }
    findHoursSleptByDate(userID, date) {
        const userSleep = this.findSleepDataByUserId(userID)
        const hoursSleptByDate = userSleep.find(user => {
            return user.date === date
        })
        return hoursSleptByDate.hoursSlept
    }
    findSleepQualityByDate(userID, date) {
        const userSleep = this.findSleepDataByUserId(userID)
        const sleepQualityByDate = userSleep.find(user => {
           return user.date === date
        })
        return sleepQualityByDate.sleepQuality
    }
    findWeeklySleepHours(userID, date) {
        const userSleep = this.findSleepDataByUserId(userID)
        const getDates = userSleep.map(user => {
            return user.date
        })
        const dateIndex = getDates.indexOf(date)
        const weeklyRange = userSleep.slice(dateIndex -6, dateIndex +1)
        const weeklySleepHours = weeklyRange.reduce((acc, hours) => {
            acc += hours.hoursSlept / 7
            return acc
        }, 0)
        return Number(weeklySleepHours.toFixed(1))
    }
    findWeeklySleepQuality(userID, date) {
        const userSleep = this.findSleepDataByUserId(userID)
        const getDates = userSleep.map(user => {
            return user.date
        })
        const dateIndex = getDates.indexOf(date)
        const weeklyRange = userSleep.slice(dateIndex -6, dateIndex +1)
        const sleepQuality = weeklyRange.map(sleep => sleep.sleepQuality)
        .reduce((sum, quality) => {
            sum += quality / 7
            return sum
        }, 0)
       return Number(sleepQuality.toFixed(1))
    }
    findAverageSleepQualityForAllUsers() {
        const avgSleepQuality = this.sleepData.reduce((bed, sleep) => {
            bed += sleep.sleepQuality
            return bed
          }, 0)
          return parseFloat((avgSleepQuality / this.sleepData.length).toFixed(1))
        }
}

module.exports = Sleep