# ultra-coding-qa-automation-test
ultra-coding-qa-automation-test

## Purpose of the project:
The expected outcome is an automated test framework for the https://www.saucedemo.com/ dummy website.

## Prerequisites:
To use this project you will need:
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
UI Automation Framework with Typescript and WebdriverIO using Page Object Model pattern.

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
 
## Debugging:
To debug scenarios using break points, use `run select by spec by tag` launch