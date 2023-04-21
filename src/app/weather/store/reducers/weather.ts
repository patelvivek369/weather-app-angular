import { LoadSearchCityForecastAction, LoadSearchCityForecastSuccessAction } from './../actions/weather';
import { Forecast, generateMockForecast } from '../../models/forecast';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

export interface WeatherState {
  forecastPayload: State;
}

export interface State extends EntityState<Forecast> {};

export const initialState: Forecast = {
  cod: null,
  message: null,
  cnt: null,
  city: {},
  list: [],
};

export const weatherReducer = createReducer(
  initialState,
  on(LoadSearchCityForecastAction, (state, {cityName}) => ({
    ...state,
    cityName
  })),
  on(LoadSearchCityForecastSuccessAction, (state, {forecastPayload}) => ({
    ...state,
    ...forecastPayload
  }))
);

