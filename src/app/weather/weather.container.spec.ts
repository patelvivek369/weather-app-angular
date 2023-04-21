import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherContainer } from './weather.container';
import { MockStore, provideMockStore} from '@ngrx/store/testing';
import { WeatherState } from './store/reducers/weather';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { FormsModule } from '@angular/forms';
import { ToDegreesPipe } from '../shared/pipes/to-degrees.pipe';
import { UnixToDatePipe } from '../shared/pipes/unix-to-date.pipe';
import { generateMockForecast } from './models/forecast';
import { selectForecastResult } from './store/selectors/weather';

describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;
  let store: MockStore<WeatherState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ WeatherContainer, SearchComponent, ResultsComponent, ToDegreesPipe, UnixToDatePipe ],
      providers: [MockStore, provideMockStore()],
    })
    .compileComponents();
    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    store = TestBed.get(MockStore);
    fixture.detectChanges();

  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search forecast by cityName', () => {
    const cityName = 'London';
    spyOn(component, 'getResultData');
    spyOn(component.store, 'dispatch').and.callThrough();
    component.foreCast = generateMockForecast();

    component.citySearch(cityName);

    expect(component.getResultData).toHaveBeenCalled();
    expect(component.store.dispatch).toHaveBeenCalled();
  });

  it('should get forecast from selector', () => {
    const forecastPayload = generateMockForecast();
    store.overrideSelector(selectForecastResult, forecastPayload).setResult(forecastPayload);
    expect(component.foreCast).toBeDefined();
  });
});
