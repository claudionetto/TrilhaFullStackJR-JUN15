import RegisterForm from '../components/RegisterForm.js';

export default class RegisterView {
  constructor() {
    this.element = document.createElement('main');
  }

  render() {
    this.element.innerHTML = '';
    const registerForm = new RegisterForm();
    this.element.appendChild(registerForm.render());

    const loginLink = document.createElement('p');
    loginLink.innerHTML = `Already have an account? <a href="/login">Login</a>`;
    this.element.appendChild(loginLink);

    return this.element;
  }
}