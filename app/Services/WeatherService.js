import { weatherApi } from './AxiosService.js';

class WeatherService {
  async getWeather() {
    const res = await weatherApi.get();
  }
}

export const weatherService = new WeatherService();
