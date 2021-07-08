const { I } = inject();

module.exports = {

  sidebar: {
    subPlan: '//span[contains(text(),"Subscription Plan")]',
    payment: '//body/div[1]/div[3]/div[1]/div[2]/aside[1]/ul[1]/section[1]/li[5]/a[1]/div[1]',
  },

  seeSubPlan() {
    I.click(this.sidebar.subPlan);
  },

  addPayment() {
    I.click(this.sidebar.payment);
    I.click('#new_payment_method_button')
  },
};
