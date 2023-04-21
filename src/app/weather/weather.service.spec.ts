import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { generateMockForecast } from './models/forecast';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });

    service = TestBed.get(WeatherService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve forecast data', () => {
    const mockResponse = generateMockForecast();

    service.searchWeatherForCity('London').subscribe(data => {
        expect(data).toEqual(mockResponse);
    });

    const url = `${service.baseUrl}?q=London&units=metric&mode=json&APPID=aba684555f49dc935f36ad3a15334642`;
    const testRequest = httpMock.expectOne(url);

    expect(testRequest.request.method).toEqual('GET');

    testRequest.flush(mockResponse);
  });
});
