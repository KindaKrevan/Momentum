export class Task {
  constructor(data) {
    this.id = data.id;
    this.user = data.user;
    this.completed = data.completed;
    this.description = data.description;
  }

  get Template() {
    return /*html*/ `
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" ${
            this.completed ? 'checked' : ''
          } onclick="app.taskController.taskComplete('${this.id}')"/>
          <label class="form-check-label" for="flexCheckDefault">${this.description}
          </label>
          <i class="mdi mdi-delete-forever text-danger" onclick="app.taskController.deleteTask('${this.id}')"></i>
        </div>
    `;
  }
}
