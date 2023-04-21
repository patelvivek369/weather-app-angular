import { weatherReducer } from './store/reducers/weather';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WeatherContainer } from './weather.container';
import { WeatherService } from './weather.service';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { FormsModule } from '@angular/forms';

// IF YOU DECIDE TO USE NG-RX YOU'LL NEED TO UNCOMMENT SOME LINES
import { WeatherEffects } from './store/effects/weather';

import { ToDegreesPipe } from '../shared/pipes/to-degrees.pipe';
import { UnixToDatePipe } from '../shared/pipes/unix-to-date.pipe';
import { weatherRootReducsrs } from './store';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    StoreModule.forFeature('weather', weatherRootReducsrs),
    EffectsModule.forFeature([WeatherEffects])
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherContainer,
    ToDegreesPipe,
    UnixToDatePipe
  ],
  providers: [
    WeatherService
  ],
  exports: [
    WeatherContainer
  ]
})
export class WeatherModule { }
