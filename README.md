### FitLit

The details of this project are outline in [this project spec](http://frontend.turing.io/projects/fitlit.html).

## Setup
1. Fork this repo - on the top right corner of this page, click the **Fork** button.
1. Clone down the _forked_ repo. `git clone [remote-address] [what you want to name the repo]`
1. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` to install project dependencies.
1. Run `npm start` in the terminal to see the HTML page (you should see some boilerplate HTML displayed on the page).  `Control + C` is the command to stop running the local server.  Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems. This command is not specific to Webpack; make note of it for future use.   
1. Set all collaborators on the forked repo.  
1. Do not run `npm audit fix --force`.  This will update to the latest version of packages.  We need to be using `webpack-dev-server@3.11.2` which is not the latest version.  If you start to run into Webpack errors, first check that all group members are using the correct version.  

# Description
This project is the first group project for Mod2 of Turing Coding School. The purpose of this project is to use API data and create different classes with methods to use the API data to to create functionality to be displayed to the DOM. This project is meant to be a mock-up for a fitness page that tracks a users information as well as their friends information. The page also includes data for the user's hydration, sleep, and activity.

# Gif of Working Project:

TBD

# Contributors
- Jocell Bautista [GitHub](https://github.com/baut-jc)
- Timothy Pendarvis [GitHub](https://github.com/Trpendarvis)
- Angie S [GitHub](https://github.com/arstaffieri)
- John Ammon [GitHub](https://github.com/Mortis78)

# Challenges:
- All members of the group were new to API, fetching, and handling promises. The group was able to over come the challenge of learning about APIs and complexities while still being able to write classes, methods, and functions.
- Members were able to collabrate together to overcome challenges and setbacks within the code.  

# Issues: 
Current issues to be addressed are:
- [ ] Hydration class test needs to be reworked and completed.
- [ ] API promise handling function needs to be cleaned up.
- [ ] Several variables need renaming for better understanging and tracking.
- [ ] Interpolation of class data needs to be completed for both Hydration.

## Type of change/ Goals:
- [X] Project Part 1: In Progess
- [ ] Project Part 2: Not Started
- [ ] Refactoring of code. 
- [ ] Needs to track down bugs and fix them after refactoring.
- [ ] Needs CSS polishing and rework.
- [ ] Add in Charts.js for further improve UX/UI

# How Has This Been Tested?
Using Mocha/Chai testing run "npm test" all test for tested classes has been completed and are passing.

- [X] Test A: User
- [X] Test B: UserRepository
- [X] Test C: Sleep
- [ ] Test D: Hydration

# Checklist:
- [X] All code follows the style guidelines of this project
- [X] The group has performed a group-review of the code.
- [X] Comments have been removed from code.
- [X] The group has followed our project outline for syntax.
- [X] All git workflow was reviewed by team members
- [X] The project group successfully used project boards and issue tracking to 
      help with organization and workflow.
- [X] Iteration 1: Data and HTML/ CSS set up
- [X] Iteration 2: API fetch data
- [ ] Iteration 3: Hydration Class and Test
- [X] Iteration 4: Sleep Class and Test
