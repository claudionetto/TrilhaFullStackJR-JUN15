import authService from '../services/authService.js';
import projectService from '../services/projectService.js';
import ProjectCard from '../components/ProjectCard.js';
import AddProjectModal from '../components/AddProjectModal.js';

export default class ProjectsView {
  constructor() {
    this.element = document.createElement('main');
    this.element.classList.add('projects');
    this.user = null;
    this.projects = [];
  }

  async fetchUserData() {
    try {
      this.user = await authService.getUser();
    } catch (error) {
      console.error('Error fetching user data:', error);
      router.navigate('/login');
    }
  }

  async fetchProjects() {
    try {
      this.projects = await projectService.getUserProjects(this.user.id);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }

  async render() {
    try {
      await this.fetchUserData();
      await this.fetchProjects();

      this.element.innerHTML = `
        <h2>${this.user.name} ${this.user.surname} projects</h2>
        <button id="add-project-button">Add Project</button>
        <div id="projects-list"></div>
      `;

      const projectsList = this.element.querySelector('#projects-list');
      this.projects.forEach(project => {
        const projectCard = new ProjectCard(project);
        projectsList.appendChild(projectCard.render());
      });

      const addProjectButton = this.element.querySelector('#add-project-button');
      addProjectButton.addEventListener('click', () => {
        const addProjectModal = new AddProjectModal(this.user.id);
        addProjectModal.open();
      });

      return this.element;
    } catch (error) {
      console.error('Error rendering ProjectsView:', error);
      return document.createTextNode('Error loading projects.');
    }
  }
}