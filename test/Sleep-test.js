import { expect } from 'chai';
import Sleep from '../src/Sleep.js';
import UserRepository from '../src/UserRepository.js';
import User from '../src/User.js';
import userData from '../src/data/users.js'

describe('Sleep', () => {
    let sleep
    let sleepData
    let user1
    let user2
    let user3
    beforeEach(() => {
        // newUser = new User(userData)
        sleep = new Sleep(sleepData)
        sleepData = [
                {
                userID: 1,
                date: "2019/06/15",
                hoursSlept: 6.1,
                sleepQuality: 2.2
                },
                {
                userID: 2,
                date: "2019/06/15",
                hoursSlept: 7,
                sleepQuality: 4.7
                },
                {
                userID: 3,
                date: "2019/06/15",
                hoursSlept: 10.8,
                sleepQuality: 4.7
                },
                {
                userID: 4,
                date: "2019/06/15",
                hoursSlept: 5.4,
                sleepQuality: 3
                },
                {
                userID: 5,
                date: "2019/06/15",
                hoursSlept: 4.1,
                sleepQuality: 3.6
                },
                {
                userID: 5,
                date: "2019/06/16",
                hoursSlept: 4.1,
                sleepQuality: 3.6
                },
                {
                userID: 5,
                date: "2019/06/17",
                hoursSlept: 4.1,
                sleepQuality: 3.6
                },
                {
                userID: 5,
                date: "2019/06/18",
                hoursSlept: 4.1,
                sleepQuality: 3.6
                },
                {
                userID: 6,
                date: "2019/06/15",
                hoursSlept: 9.6,
                sleepQuality: 2.9
                },
                {
                userID: 7,
                date: "2019/06/15",
                hoursSlept: 5.1,
                sleepQuality: 2.6
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
    })
    it('Should be a function', function () {
        expect(Sleep).to.be.a('function')
    })
    it('Should be an instance of Sleep', function () {
        expect(sleep).to.be.an.instanceOf(Sleep)
    })
    it('Should have an array of user sleep data', function () {
        expect(sleep.sleepData).to.be.deep.equal(sleepData)
    })
    it('Should have user IDs', function () {
        expect(sleep.userID).to.equal(sleepData.userID)
    })
    it('Should have a method that returns the average sleep data of a user', function () {
        expect(sleep.findAverageSleepHours(2)).to.equal(7)
    })
    it('Should not return anything if the userID does not exisit', function () {
        expect(sleep.findAverageSleepHours(3.4)).to.be.NaN
    })
    it('Should have a method to find the average quality of sleep for a user', function () {
        expect(sleep.findAverageSleepQuality(3)).to.equal(4.7)
    })
    it('Should not be able to find the average quality of sleep if the user ID does not exist', function () {
        expect(sleep.findAverageSleepQuality(3.5)).to.be.NaN
    })
    it('Should have a method to find a user\'s hours slept by date', function () {
        expect(sleep.findHoursSleptByDate(2, "2019/06/15")).to.equal(7)
    })
    it('Should have a method to return the user\'s sleep quality on a given date', function () {
        expect(sleep.findSleepQualityByDate(7, "2019/06/15")).to.equal(2.6)
    })
    it('Should be able to find a user\'s sleep data for a given week', function () {
        expect(sleep.findWeeklySleepHours(5,"2019/06/15")).to.equal(0.6)
    })
    it('Should have a method to find the average sleep quality of a user for a given week', function () {
        expect(sleep.findWeeklySleepQuality(5, "2019/06/15")).to.equal(0.5)
    })
    it('Should have a method to find the average sleep quality for all users', function () {
        expect(sleep.findAverageSleepQualityForAllUsers()).to.equal(3.5)
    })
    
})