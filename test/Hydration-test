import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import userData from '../src/data/users.js'
import Hydration from '../src/Hydration';
import hydrationData from '../src/data/hydrationData'

describe('Hydration Data', function() {
    let hydration
    
    beforeEach(function() {
      hydration = new Hydration(hydrationData)
    });
    
    it('should be a function', function() {
      expect(Hydration).to.be.a('function')
    })

    it('should give back the right answer', function () {
      expect(hydration.getAverageOuncesForUserRounded()).to.be.equal(/*whatever is math*/)
    })
}