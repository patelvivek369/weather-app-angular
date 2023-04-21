import { Component} from '@angular/core';
import { LoadSearchCityForecastAction } from './store/actions/weather';
import { Store } from '@ngrx/store';
import { WeatherState } from './store/reducers/weather';
import { selectForecastResult } from './store/selectors/weather';

@Component({
  selector: 'app-weather',
  template: `
    <app-search (onSearch)="citySearch($event)"></app-search>
    <app-results [forecast]="foreCast"></app-results>
  `,
})

export class WeatherContainer{
  foreCast = null;
  subscription: any;

  constructor(public store: Store<WeatherState>) {}

  getResultData(): void {
    this.subscription = this.store.select(selectForecastResult)
    .subscribe(data => {
      this.foreCast = data
    });
  }

  citySearch(cityName: string): void {
    this.store.dispatch(LoadSearchCityForecastAction({cityName}));
    this.getResultData();
  }

  ngOnDestroy(): void {
    this.subscription ? this.subscription.unsubscribe() : null
  }
}
