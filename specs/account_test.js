Feature('account');

const email =  'jatix_css@mail.ru';
const password = '789456123ctyz';

Scenario('Login', ({ I, mainPage}) => {
    I.amOnPage('/');
    mainPage.login(email, password);
    I.see('Logged In as Arsiniy Merelenko');
});

Scenario('See Subscription Plan', ({ I, mainPage, personal}) => {
    I.amOnPage('/');
    mainPage.login(email, password);
    personal.seeSubPlan();
    I.see('Your subscription: Free Plan');
});

Scenario('Ability to add payment method', ({ I, mainPage, personal}) => {
    I.amOnPage('/');
    mainPage.login(email, password);
    personal.addPayment();
    I.see('Add new payment method:');
});
