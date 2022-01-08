import { weatherService } from '../Services/WeatherService.js';

export class WeatherController {
  constructor() {}

  async getWeather() {
    try {
      await weatherService.getWeather();
    } catch (error) {
      console.log(error.message);
    }
  }
}
