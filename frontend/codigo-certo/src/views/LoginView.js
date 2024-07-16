import LoginForm from '../components/LoginForm.js';

export default class LoginView{
  constructor() {
    this.element = document.createElement('main');
  }

  render() {
    this.element.innerHTML = ''; // Limpa o conteúdo anterior

    const loginForm = new LoginForm();
    this.element.appendChild(loginForm.render());

    // Adicione aqui outros elementos da página de login, como o link para registro
    const registerLink = document.createElement('p');
    registerLink.innerHTML = `Don't have an account? <a href="/register">Register</a>`;
    this.element.appendChild(registerLink);

    return this.element;
  }
}