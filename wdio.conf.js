export const config = {
  runner: 'local',

  specs: [
    './tests/**/*.js'
  ],

  maxInstances: 1,

  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--headless=new', '--disable-gpu', '--window-size=1920,1080'],
    }
  }],

  logLevel: 'error',

  bail: 0,

  baseUrl: 'https://automationexercise.com',

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: 'mocha',

  reporters: [
    'spec',
    ['allure', {
      outputDir: 'reports/allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
    }],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};