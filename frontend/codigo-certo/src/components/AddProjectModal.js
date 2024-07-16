import projectService from '../services/projectService.js';
import { router } from '../router.js';

export default class AddProjectModal {
  constructor(userId) {
    this.userId = userId;
    this.modalElement = document.createElement('div');
    this.modalElement.classList.add('modal');
    this.modalElement.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <h2>Add Project</h2>
        <form id="add-project-form">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="description">Description:</label>
            <textarea id="description" name="description" required></textarea>
          </div>
          <div class="form-group">
            <label for="status">Status:</label>
            <select id="status" name="status" required>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="CONCLUDED">Concluded</option>
              <option value="DISABLED">Disabled</option>
            </select>
          </div>
          <button type="submit">Add Project</button>
          <div id="error-message"></div>
        </form>
      </div>
    `;

    this.formElement = this.modalElement.querySelector('#add-project-form');
    this.closeButton = this.modalElement.querySelector('.close-button');

    this.formElement.addEventListener('submit', this.handleSubmit.bind(this));
    this.closeButton.addEventListener('click', this.close.bind(this));
  }

  async handleSubmit(event) {
    event.preventDefault();

    const name = this.formElement.querySelector('#name').value;
    const description = this.formElement.querySelector('#description').value;
    const status = this.formElement.querySelector('#status').value;

    try {
      await projectService.addProject(this.userId, { name, description, projectStatus: status });
      this.close();
      window.location.reload();
      router.navigate('/projects');
    } catch (error) {
      const errorMessageElement = this.formElement.querySelector('#error-message');
      errorMessageElement.textContent = error.message;
    }
  }

  open() {
    document.body.appendChild(this.modalElement);
    this.modalElement.style.display = 'block';
  }

  close() {
    document.body.removeChild(this.modalElement);
  }

  render() {
    return this.modalElement;
  }
}