import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDegreesPipe } from 'src/app/shared/pipes/to-degrees.pipe';
import { UnixToDatePipe } from 'src/app/shared/pipes/unix-to-date.pipe';
import { Forecast, generateMockForecast } from '../../models/forecast';
import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let forecast: Forecast;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsComponent, ToDegreesPipe, UnixToDatePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    forecast = generateMockForecast();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the selected data when forecast input is set', () => {
    component.forecast = generateMockForecast();

    expect(component.forecast).toEqual(forecast);
    expect(component.selectedData).toEqual(forecast.list[0]);
  });

  it('should update the selected data when selectData is called', () => {
    component.forecast = generateMockForecast();
    component.selectData(1520802000);

    expect(component.selectedData).toEqual(forecast.list[0]);
  });
});
