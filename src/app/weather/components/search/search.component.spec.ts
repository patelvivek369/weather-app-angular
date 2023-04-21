import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';

import Spy = jasmine.Spy;

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit cityName', fakeAsync(() => {
    component.city = 'mumbai';
    spyOn(component.onSearch, 'emit');
    component.search();

    expect(component.onSearch.emit).toHaveBeenCalledWith('mumbai');
  }));

});
