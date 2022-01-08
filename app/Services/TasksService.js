import { ProxyState } from '../AppState.js';
import { Task } from '../Models/Tasks.js';
import { taskApi } from './AxiosService.js';

class TaskService {
  async getTaskList() {
    const res = await taskApi.get();
    ProxyState.tasks = res.data.map(t => new Task(t));
  }

  async addTask(newTask) {
    const res = await taskApi.post('', newTask);
    ProxyState.tasks = [...ProxyState.tasks, new Task(res.data)];
  }

  async deleteTask(id) {
    const res = await taskApi.delete(id);
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== id);
  }
}

export const taskService = new TaskService();
