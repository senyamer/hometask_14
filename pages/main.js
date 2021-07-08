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
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.button.login);
  },
};
