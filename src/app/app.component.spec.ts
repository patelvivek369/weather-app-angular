import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { WeatherModule } from './weather/weather.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToDegreesPipe } from 'src/app/shared/pipes/to-degrees.pipe';
import { ResultsComponent } from './weather/components/results/results.component';
import { SearchComponent } from './weather/components/search/search.component';
import { WeatherContainer } from './weather/weather.container';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UnixToDatePipe } from './shared/pipes/unix-to-date.pipe';
import { appendFile } from 'fs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot([]),
        EffectsModule.forRoot([]),
      ],
      declarations: [
        AppComponent,
        WeatherContainer,
        SearchComponent,
        ResultsComponent,
        ToDegreesPipe,
        UnixToDatePipe
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'weather-angular-app'`, () => {
    expect(component.title).toEqual('weather-angular-app');
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(component.title);
  });
});
