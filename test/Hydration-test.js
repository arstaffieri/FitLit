import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import userData from '../src/data/users.js'
import Hydration from '../src/Hydration';
import hydrationData from '../src/data/hydrationData'

describe('Hydration Data', function() {
    let hydration
    
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
        },
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
  })
//   it('should be a function', () => {
//     expect(Hydration).to.be.a('function')
//   })

//     it.skip('Should be an instance of Hydration', () => {
//       expect(hydration).to.be.an.instanceOf(Hydration)
//     })

//     it.skip('Should have an array of user hydration data', () => {
//         expect(hydration.hydrationData).to.be.deep.equal(hydrationData)
//     })

//     it.skip('Should have user IDs', () => {
//         expect(hydration.userID).to.equal(hydrationData.userID)
//     })
//     it.skip('should give back the average number of ounces of a user', () => {
//       expect(hydration.getAverageOuncesForUser()).to.be.equal(/*whatever is math*/)
//     })
})