import projectService from '../services/projectService.js';
import { router } from '../router.js';

export default class ProjectModal {
  constructor(project) {
    this.project = project;
    this.element = document.createElement('div');
    this.isEditing = false;
  }

  async deleteProject() {
    const userId = this.project.projectUserResponse.userId;
    try {
      await projectService.deleteProject(userId, this.project.id);
      this.element.remove();
      router.navigate('/projects');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  }

  async saveProject() {
    const userId = this.project.projectUserResponse.userId;
    const updatedProject = {
      name: this.element.querySelector('#project-name').value,
      description: this.element.querySelector('#project-description').value,
      projectStatus: this.element.querySelector('#project-status').value
    };

    try {
      await projectService.updateProject(userId, this.project.id, updatedProject);
      this.project = { ...this.project, ...updatedProject };
      this.isEditing = false;
      this.render();
      window.location.reload();
    } catch (error) {
      console.error('Error updating project:', error);
    }
  }

  open() {
    this.element.style.display = 'block';
  }

  render() {
    this.element.className = 'modal';
    this.element.innerHTML = `
      <div class="modal-content">
        <span class="close">×</span>
        <form>
          <div class="form-group">
            <label for="project-name">Name</label>
            <input type="text" id="project-name" value="${this.project.name}" ${!this.isEditing ? 'disabled' : ''}> 
          </div>
          <div class="form-group">
            <label for="project-description">Description</label>
            <input type="text" id="project-description" value="${this.project.description}" ${!this.isEditing ? 'disabled' : ''}> 
          </div>
          <div class="form-group">
            <label for="status">Status:</label>
            <select id="project-status" name="status" required ${!this.isEditing ? 'disabled' : ''}>
              <option value="IN_PROGRESS" ${this.project.projectStatus === 'IN_PROGRESS' ? 'selected' : ''}>In Progress</option>
              <option value="CONCLUDED" ${this.project.projectStatus === 'CONCLUDED' ? 'selected' : ''}>Concluded</option>
              <option value="DISABLED" ${this.project.projectStatus === 'DISABLED' ? 'selected' : ''}>Disabled</option>
            </select>
          </div>
        </form>
        <button id="edit-project">${this.isEditing ? 'Save' : 'Edit'}</button>
        <button id="delete-project" ${this.isEditing ? 'disabled' : ''}>Delete</button> 
      </div>
    `;

    this.element.querySelector('.close').addEventListener('click', () => {
      this.element.remove();
    });

    this.element.querySelector('#delete-project').addEventListener('click', () => {
      this.deleteProject();
    });

    this.element.querySelector('#edit-project').addEventListener('click', () => {
      if (this.isEditing) {
        this.saveProject();
      } else {
        this.isEditing = true;
        this.render();
      }
    });

    return this.element;
  }

}