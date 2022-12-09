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
        return averageSleepHours/this.sleepData.length

    }
}

module.exports = Sleep