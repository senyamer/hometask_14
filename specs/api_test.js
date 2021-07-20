Feature('api');

const expect = require('chai').expect;
const accsess_key = 'access_key=fde4847c49d9b35da5ed6527bd21ca2d'

Scenario('See weather', async ({ I }) => {
    let response = await I.sendGetRequest(`/current?${accsess_key}&query=New York`);
    expect(200).to.be.equal(response.status);
});

Scenario('Can`t see historical weather, if current subscription plan does not support it', async ({ I }) => {
    let response = await I.sendGetRequest(`/historical?${accsess_key}&query=London&historical_date=2020-08-07&hourly=1`);
    let data = JSON.stringify(response.data);
    expect(data).to.have.string('Your current subscription plan does not support historical weather data');
});
