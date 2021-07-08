const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './specs/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://weatherstack.com/login',
      show: false,
      browser: 'chromium'
    },
    REST: {
      endpoint: "http://api.weatherstack.com",
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/main.js',
    personal: './pages/personal.js',
  },
  bootstrap: null,
  mocha: {
    "reporterOptions": {
      "reportDir": "output"
    }
  },
  name: 'codeceptJS',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}