import axios, { AxiosResponse } from "axios";
import { Weather } from "../store/types/types";

const API_KEY = "00d017812c73a22ba95198990d79d4ed";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return axios.get(
      `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
  }
}
