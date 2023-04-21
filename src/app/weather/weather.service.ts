import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forecast } from './models/forecast';

@Injectable()
export class WeatherService {
  baseUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  apiID = 'aba684555f49dc935f36ad3a15334642';
  // apiID = '439d4b804bc8187953eb36d2a8c26a02';

  constructor(private _http: HttpClient) { }

  searchWeatherForCity(city?: string): Observable<Forecast> {
    const params: HttpParams = new HttpParams({
        fromObject: {
          'q': `${city}`,
          'units': 'metric',
          'mode': 'json',
          'APPID': this.apiID
        }
      }
    );
    const options = {
      headers: new HttpHeaders(),
      params: params
    };
    return this._http.get<Forecast>(this.baseUrl, options);

  }

}
