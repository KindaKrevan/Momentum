import { ProxyState } from '../AppState.js';
import { taskService } from '../Services/TasksService.js';

function _drawTasks() {
  let template = '';
  ProxyState.tasks.forEach(t => (template += t.Template));
  document.getElementById('tasks').innerHTML = template;
}

export class TaskController {
  constructor() {
    ProxyState.on('tasks', _drawTasks);
    this.getTaskList();
  }

  async getTaskList() {
    try {
      await taskService.getTaskList();
    } catch (error) {
      console.log(error.message);
    }
  }

  async addNewTask() {
    try {
      window.event.preventDefault();
      let form = window.event.target;
      const newTask = {
        description: form.newTask.value,
      };
      await taskService.addTask(newTask);
      form.reset();
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteTask(id) {
    try {
      const foundTask = ProxyState.tasks.find(t => t.id == id);
      await taskService.deleteTask(id);
    } catch (error) {
      console.log(error.message);
    }
  }
}
