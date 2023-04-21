// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
import { createAction, props } from '@ngrx/store';
import { Forecast } from '../../models/forecast';


export const SEARCH_CITY_FORECAST = 'SEARCH_CITY_FORECAST';
export const SEARCH_CITY_FORECAST_SUCCESS = 'SEARCH_CITY_FORECAST_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export const LoadSearchCityForecastAction = createAction(SEARCH_CITY_FORECAST, props<{ cityName: string }>());
export const LoadSearchCityForecastSuccessAction = createAction(SEARCH_CITY_FORECAST_SUCCESS, props<{ forecastPayload: Forecast}>());
