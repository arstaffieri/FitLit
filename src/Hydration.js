class Hydration{
    constructor(id, interpolationData){
        this.userID = id
        this.interpolationData = this.setUserHydration(interpolationData)
        this.date = interpolationData[0].date
        this.numOunces = interpolationData[0].numOunces
    }

    setUserHydration(interpolationData){

    }
}

export default Hydration