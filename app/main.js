import { TaskController } from './Controllers/TaskController.js';
import { WeatherController } from './Controllers/WeatherController.js';

class App {
  taskController = new TaskController();
  weatherController = new WeatherController();
}

window['app'] = new App();
