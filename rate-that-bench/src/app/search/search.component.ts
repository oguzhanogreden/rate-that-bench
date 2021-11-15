import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private user: UserService) {}

  @Output()
  locationSearched = new EventEmitter<null>();

  ngOnInit(): void {}

  getLocation() {
    this.locationSearched.next();
  }
}
