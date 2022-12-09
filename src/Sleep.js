class Sleep {
    constructor(sleepData, userID) {
        this.sleepData = sleepData
        this.userID = userID
    }
    findSleepDataByUserId(userID) {
       const sleepDataByUserId = sleepData.find(user => {
        if(userID === user.userID) {
            return user
        }
        return sleepDataByUserId
       })
    }
}

module.exports = Sleep