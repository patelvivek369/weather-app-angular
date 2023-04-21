// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { LoadSearchCityForecastAction, LoadSearchCityForecastSuccessAction } from './../actions/weather';
import { WeatherEffects } from './weather';
import { WeatherService } from '../../weather.service';
import { generateMockForecast } from '../../models/forecast';
import { WeatherState } from '../reducers/weather';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

class MockWeatherService {
  searchWeatherForCity() {
    return of(generateMockForecast());
  }
}

describe('WeatherEffects', () => {
  let effects: WeatherEffects;
  let actions$: Observable<any>;
  let weatherService: jasmine.SpyObj<WeatherService>;
  let store: MockStore<WeatherState>;
  let httpService: WeatherService;

  beforeEach(() => {
    weatherService = jasmine.createSpyObj('WeatherService', ['searchWeatherForCity']);

    TestBed.configureTestingModule({
      providers: [
        WeatherEffects,
        provideMockStore(),
        MockStore,
        provideMockActions(() => actions$),
        { provide: WeatherService, useClass: MockWeatherService },
      ],
    });

    effects = TestBed.get(WeatherEffects);
    store = TestBed.get(MockStore);
    httpService = TestBed.get(WeatherService);
  });

  it('should load search city forecast and emit success action', (done) => {
    const spy = spyOn(httpService, 'searchWeatherForCity').and.callThrough();
    actions$ = of(LoadSearchCityForecastAction);
    effects.searchCityForecast$.subscribe((res) => {
      expect(res).toEqual(LoadSearchCityForecastSuccessAction({forecastPayload: generateMockForecast()}));
      expect(spy).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
