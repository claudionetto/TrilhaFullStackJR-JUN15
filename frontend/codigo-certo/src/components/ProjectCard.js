import ProjectModal from './ProjectModal.js';

export default class ProjectCard {
  constructor(project) {
    this.project = project;
    this.element = document.createElement('div');
    this.element.classList.add('project-card');
  }

  render() {
    this.element.innerHTML = `
      <h3 class="project-card__name">${this.project.name}</h3>
      <p class="project-card__status">Status: ${this.project.projectStatus}</p>
    `;

    this.element.addEventListener('click', () => this.handleViewClick());

    return this.element;
  }

  handleViewClick() {
    const projectModal = new ProjectModal(this.project);
    document.body.appendChild(projectModal.render());
    projectModal.open();
  }
}