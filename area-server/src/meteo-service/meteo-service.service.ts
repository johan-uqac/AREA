import { Injectable } from '@nestjs/common';
import { fetchWeatherApi } from 'openmeteo';

@Injectable()
export class MeteoServiceService {
  async getSnowDay() {
    const url = 'https://api.open-meteo.com/v1/forecast';
    const snowProba = [];
    const params = {
      latitude: 48.4196,
      longitude: -71.0637,
      hourly: ['precipitation_probability', 'rain', 'snowfall'],
    };

    const responses = await fetchWeatherApi(url, params);
    const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];
    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const hourly = response.hourly()!;
    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
      hourly: {
        time: range(
          Number(hourly.time()),
          Number(hourly.timeEnd()),
          hourly.interval(),
        ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        precipitationProbability: hourly.variables(0)!.valuesArray()!,
        rain: hourly.variables(1)!.valuesArray()!,
        snowfall: hourly.variables(2)!.valuesArray()!,
      },
    };

    // `weatherData` now contains a simple structure with arrays for datetime and weather data
    for (let i = 0; i < weatherData.hourly.time.length; i++) {
      console.log('snow day getted');
      if (weatherData.hourly.snowfall[i] > 0) {
        snowProba.push(weatherData.hourly.time[i].toISOString());
      }
    }
    return snowProba;
  }

  async getRainDay() {
    const url = 'https://api.open-meteo.com/v1/forecast';
    const rainProba = [];
    const params = {
      latitude: 48.4196,
      longitude: -71.0637,
      hourly: ['precipitation_probability', 'rain'],
    };

    const responses = await fetchWeatherApi(url, params);
    const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];
    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const hourly = response.hourly()!;
    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
      hourly: {
        time: range(
          Number(hourly.time()),
          Number(hourly.timeEnd()),
          hourly.interval(),
        ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        precipitationProbability: hourly.variables(0)!.valuesArray()!,
        rain: hourly.variables(1)!.valuesArray()!,
      },
    };

    // `weatherData` now contains a simple structure with arrays for datetime and weather data
    for (let i = 0; i < weatherData.hourly.time.length; i++) {
      console.log('rain day getted');
      if (weatherData.hourly.rain[i] > 0) {
        rainProba.push(weatherData.hourly.time[i].toISOString());
      }
    }
    return rainProba;
  }
}
