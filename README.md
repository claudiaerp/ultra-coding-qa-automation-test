# ultra-coding-qa-automation-test
ultra-coding-qa-automation-test

## Purpose of the project:
The expected outcome is an automated test framework for the https://www.saucedemo.com/ dummy website.

## Manual test cases
I'll be brief in this section, since the test scenarios were written using BDD, their steps are very easy to follow and straightforward. 

* Logging into Swag Labs with a valid user
* Logging into Swag Labs with an invalid user should fail
* Add products to the cart
* Remove products from the cart
* Opening the cart (review cart content)
* Remove products from the cart
* Do a successful checkout
* Do a failed checkout using invalid personal information details
* Do a failed checkout using an empty cart

## Prerequisites:
To use this project you will need:
* Install [JavaSE-OracleJDK](https://www.oracle.com/java/technologies/javase-downloads.html) (v17.x.x or later)
* Install [Node](http://nodejs.org) 

#### Recommended Node and Npm versions
* ```nvm v16.15.0```
* ```npm v6.14.4```

## Setup:
* `git clone https://github.com/claudiaerp/ultra-challenge-wdio-interface-automation.git`
* `npm install` to install the project dependencies

## Running tests:
To run specific scenarios by tag, do:
```
npm run report:clean && npx wdio run config/wdio.chrome.conf.ts --cucumberOpts.tagExpression="@<tag>"
```

## Reporting:
You can generate the HTML report by running:
```
npm run report:sandwich
```

To clean up your reports/ folder, run
```
npm run report:clean
```

## Project Structure:
UI Automation Framework with Typescript and WebdriverIO using Page Object Model pattern. I chose this pattern because makes the solution cleaner and easy to understand. Test cases are easy to maintain, page objects can be added, modified an reused with no struggle.

```
│ WebdriverIO
├── ...
├── features
│ ├── login
│    ├── login.feature
├── pages
│    ├── login
│       ├── LoginPage.ts
├── reports
├── test-data
│   ├── users.json
├── step-definitions
│    ├── login
│       ├── LoginSteps.ts
└── ...
```

 `features` folder contains BDD tests
 `pages` folder contains the page classes that contain web elements
 `reports` folder contains test results in JSON and HTML reports
 `test-data` folder contains mock users and their information, to be used in tests
 `step-definitions` folder where map the Gherkin(BDD) to functions
 
## Debugging:
To debug scenarios using break points, use `run select by spec by tag` launch

## Circle CI:
https://app.circleci.com/pipelines/github/claudiaerp/ultra-coding-qa-automation-test

i. On the latest build, click `test` on `Workflow` column
ii. Click `test` job
iii. All Steps ran on this build will display
iv. Click `ARTIFACTS` tab
v. Click `reports/cucumber-html-reports/cucumber-html-reports/overview-features.html` link
vi. A Cucumber HTML report will display showing the test results
