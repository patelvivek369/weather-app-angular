import { Component, Input } from '@angular/core';
import { Forecast } from '../../models/forecast';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() set forecast(forecast: Forecast) {
    if (forecast) {
      this._forecast = forecast;
      this.selectedData = forecast.list[0]
    }
  }

  get forecast(): Forecast {
    return this._forecast;
  }

  private _forecast: Forecast;

  selectedData = null;

  selectData = (item: Number): void => {
    this.selectedData = this.forecast.list.find((e: { dt: any; }) => e.dt === item)
  }
}