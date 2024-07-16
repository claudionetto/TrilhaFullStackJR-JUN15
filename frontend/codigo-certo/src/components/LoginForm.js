import authService from '../services/authService.js';
import {router} from "../router.js"

export default class LoginForm {
    constructor() {
        this.formElement = document.createElement('form');
        this.formElement.innerHTML = `
        <h2>Login</h2>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="username" id="username" name="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Login</button>
        <div id="error-message"></div>
      `;

        this.formElement.addEventListener('submit', this.handleSubmit.bind(this));
    }

    async handleSubmit(event) {
        event.preventDefault();


        const username = this.formElement.querySelector('#username').value;
        const password = this.formElement.querySelector('#password').value;

        try {

            const token = await authService.login(username, password);
            localStorage.setItem('token', token);

            router.navigate('/projects');

        } catch (error) {

            const errorMessageElement = this.formElement.querySelector('#error-message');
            errorMessageElement.textContent = error.message;
        }

    }

    render() {
        return this.formElement;
    }
}