import { ProxyState } from '../AppState.js';
import { Weather } from '../Models/Weather.js';
import { weatherApi } from './AxiosService.js';

class WeatherService {
  async getWeather() {
    const res = await weatherApi.get();
    console.log(res.data);
    ProxyState.weather = new Weather(res.data);
  }
}

export const weatherService = new WeatherService();
