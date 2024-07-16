import LoginView from './views/LoginView.js';
import ProjectsView from './views/ProjectsView.js';
import RegisterView from './views/RegisterView.js';
import Navigo from 'navigo';

export const router = new Navigo('/');

router
  .on({
    '/': () => router.navigate('/login'),
    '/login': () => {
      renderView(LoginView);
    },
    '/projects': async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.navigate('/login');
        return;
      }
      renderView(ProjectsView);
    },
    '/register': () => {
      renderView(RegisterView);
    }
  })
  .resolve();

async function renderView(View) {
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = '';
  const view = new View();
  const element = await view.render();
  appContainer.appendChild(element);
}