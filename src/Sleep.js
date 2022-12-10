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
        return averageSleepHours/userSleep.length
    }
    findAverageSleepQuality(userID) {
        const userSleep = this.findSleepDataByUserId(userID)
        const averageQuality = userSleep.reduce((acc, sleep) => {
            acc += sleep.sleepQuality
            return acc
        }, 0)
        return averageQuality/userSleep.length
    }
}

module.exports = Sleep