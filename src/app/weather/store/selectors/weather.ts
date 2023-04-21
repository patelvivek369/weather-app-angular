import { createFeatureSelector } from '@ngrx/store';
// TO BE IMPLEMENTED IF NF-RX IS USED

import { createSelector } from "@ngrx/store";
import { Forecast } from '../../models/forecast';

export interface WeatherRootState {
    forecastPayload: Forecast;
}

export const selectWeatherRoot = createFeatureSelector<WeatherRootState>('weather');
export const selectForecastResult = createSelector(selectWeatherRoot, ({forecastPayload}) => forecastPayload);
