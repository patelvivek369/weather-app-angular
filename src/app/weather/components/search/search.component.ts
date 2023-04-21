import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit{
  @Output() onSearch = new EventEmitter();
  city = 'London';
  
  ngOnInit(): void {
    this.onSearch.emit(this.city)
  }

  search = (): void => this.onSearch.emit(this.city);
}
