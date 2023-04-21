// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RXimport { Injectable } from '@angular/core';
import { LoadSearchCityForecastAction, LoadSearchCityForecastSuccessAction } from './../actions/weather';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap } from "rxjs/operators";
import { Forecast } from "../../models/forecast";
import { WeatherService } from "../../weather.service";

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private _searchService: WeatherService
  ) {}

  searchCityForecast$ = createEffect(() => this.actions$.pipe(
    ofType(LoadSearchCityForecastAction),
    switchMap((data: any) => {
      return this._searchService.searchWeatherForCity(data.cityName)
        .pipe(
          switchMap((forecastPayload: Forecast) => {
            return [LoadSearchCityForecastSuccessAction({forecastPayload})];
          }),
      );
    }),  
  ))

}