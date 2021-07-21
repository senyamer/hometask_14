const { I } = inject();

module.exports = {

  fields: {
    email: '#email',
    password: '#password',
  },

  button: {
    login: '.submit'
  },

  login(email, password) {
    I.click(this.fields.email);
    I.fillField(this.fields.email, email);
    I.click(this.fields.password);
    I.fillField(this.fields.password, password);
    I.click(this.button.login);
  },
};
