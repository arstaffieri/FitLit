class Sleep {
    constructor(sleepData, userID) {
        this.sleepData = sleepData
        this.userID = userID
    }
    findSleepDataByUserId(userID) {
       const sleepDataByUserId = this.sleepData.find(user => {
        if(userID === user.userID) {
            return user
        }
       })
    return sleepDataByUserId
    }
}

module.exports = Sleep