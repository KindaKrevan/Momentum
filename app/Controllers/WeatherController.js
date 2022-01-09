import { weatherService } from '../Services/WeatherService.js';

export class WeatherController {
  constructor() {
    weatherService.getWeather();
  }
}
