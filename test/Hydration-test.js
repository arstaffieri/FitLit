import { expect } from 'chai';
import Hydration from '../src/Hydration';
import User from '../src/User.js';
import userData from '../src/data/users.js'
import UserRepository from '../src/UserRepository.js';

describe('Hydration', () => {
    let hydration
    let hydrationData
    let user1
    let user2
    let user3
    beforeEach(() => {
      hydration = new Hydration(hydrationData)
      hydrationData = [ 
        {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
        },
        {
        "userID": 2,
        "date": "2019/06/15",
        "numOunces": 75
        },
        {
        "userID": 3,
        "date": "2019/06/15",
        "numOunces": 47
        },
        {
        "userID": 1,
        "date": "2019/07/15",
        "numOunces": 33
        },
        {
        "userID": 2,
        "date": "2019/07/15",
        "numOunces": 73
        },
        {
        "userID": 3,
        "date": "2019/07/15",
        "numOunces": 43
        },
        {
        "userID": 1,
        "date": "2019/08/15",
        "numOunces": 17
        },
        {
        "userID": 2,
        "date": "2019/08/15",
        "numOunces": 55
        },
        {
        "userID": 3,
        "date": "2019/08/15",
        "numOunces": 17
        },
        {
        "userID": 1,
        "date": "2019/09/15",
        "numOunces": 12
        },
        {
        "userID": 2,
        "date": "2019/09/15",
        "numOunces": 19
        },
        {
        "userID": 3,
        "date": "2019/09/15",
        "numOunces": 12
        },
        {
        "userID": 1,
        "date": "2019/10/15",
        "numOunces": 30
        },
        {
        "userID": 2,
        "date": "2019/10/15",
        "numOunces": 55
        },
        {
        "userID": 3,
        "date": "2019/10/15",
        "numOunces": 18
        },
        {
        "userID": 1,
        "date": "2019/11/15",
        "numOunces": 22
        },
        {
        "userID": 2,
        "date": "2019/11/15",
        "numOunces": 60
        },
        {
        "userID": 3,
        "date": "2019/11/15",
        "numOunces": 50
        },
        {
        "userID": 1,
        "date": "2019/12/15",
        "numOunces": 42
        },
        {
        "userID": 2,
        "date": "2019/12/15",
        "numOunces": 55
        },
        {
        "userID": 3,
        "date": "2019/12/15",
        "numOunces": 44
        },
        {
        "userID": 1,
        "date": "2019/13/15",
        "numOunces": 17
        },
        {
        "userID": 2,
        "date": "2019/13/15",
        "numOunces": 12
        },
        {
        "userID": 3,
        "date": "2019/13/15",
        "numOunces": 46
        },
        {
        "userID": 1,
        "date": "2019/14/15",
        "numOunces": 75
        },
        {
        "userID": 2,
        "date": "2019/14/15",
        "numOunces": 61
        },
        {
        "userID": 3,
        "date": "2019/14/15",
        "numOunces": 37
        }
      ]
      user1 = new User({
          id: 1,
          name: "Luisa Hane",
          address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
          email: "Diana.Hayes1@hotmail.com",
          strideLength: 4.3,
          dailyStepGoal: 10000,
          friends: [
          16,
          4,
          8
          ]
          })
      user2 = new User({
          id: 2,
          name: "Jarvis Considine",
          address: "30086 Kathryn Port, Ciceroland NE 07273",
          email: "Dimitri.Bechtelar11@gmail.com",
          strideLength: 4.5,
          dailyStepGoal: 5000,
          friends: [
          9,
          18,
          24,
          19
          ]
          })
      user3 = new User({
          id: 3,
          name: "Herminia Witting",
          address: "85823 Bosco Fork, East Oscarstad MI 85126-5660",
          email: "Elwin.Tromp@yahoo.com",
          strideLength: 4.4,
          dailyStepGoal: 5000,
          friends: [
          19,
          11,
          42,
          33
          ]
          })
        //   console.log("this is data #1", hydrationData)
    })
    it('should be a function', () => {
        expect(Hydration).to.be.a('function')
    })
    it('Should be an instance of Hydration', () => {
        expect(hydration).to.be.an.instanceOf(Hydration)
    })
//this shouldnt be passing? but the hydrationData is now showing here
    it('Should have an array of user hydration data', function () {
        expect(hydration.hydrationData).to.be.deep.equal(hydrationData)

        // console.log("this is data #2 = user obj data", hydrationData)
    })

    it('Should have user IDs', function () {
        expect(hydration.userID).to.equal(hydrationData.userID)
    })

    it('should correctly store hydration data for each user', function() {
        expect(hydration.hydrationData).to.deep.equal(hydrationData)

        console.log("this is data #3 = user obj data", hydrationData)
    })

    it('should calculate the average ounces of water consumed by a given user', function() {
        expect(hydration.getAverageOuncesForUser(1)).to.equal(32)
        expect(hydration.getAverageOuncesForUser(2)).to.equal(52)
    })


})