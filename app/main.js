import { ImageController } from './Controllers/ImageController.js';
import { QuoteController } from './Controllers/QuoteController.js';
import { TaskController } from './Controllers/TaskController.js';
import { WeatherController } from './Controllers/WeatherController.js';

class App {
  taskController = new TaskController();
  weatherController = new WeatherController();
  quoteController = new QuoteController();
  imageController = new ImageController();
}

window['app'] = new App();
