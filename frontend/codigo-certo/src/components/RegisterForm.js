import authService from '../services/authService.js';
import { router } from '../router.js';

export default class RegisterForm {
  constructor() {
    this.formElement = document.createElement('form');
    this.formElement.innerHTML = `
      <h2>Register</h2>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="surname">Surname:</label>
        <input type="text" id="surname" name="surname" required>
      </div>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button type="submit">Register</button>
      <div id="error-message"></div>
    `;

    this.formElement.addEventListener('submit', this.handleSubmit.bind(this));
  }

  async handleSubmit(event) {
    event.preventDefault();

    const name = this.formElement.querySelector('#name').value;
    const surname = this.formElement.querySelector('#surname').value;
    const username = this.formElement.querySelector('#username').value;
    const email = this.formElement.querySelector('#email').value;
    const password = this.formElement.querySelector('#password').value;

    try {
      await authService.register({ name, surname, username, email, password });
      router.navigate('/login');
    } catch (error) {
      const errorMessageElement = this.formElement.querySelector('#error-message');
      errorMessageElement.textContent = error.message;
    }
  }

  render() {
    return this.formElement;
  }
}