import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit  {

  constructor() { }

  ngOnInit(): void {
  }
  
  getLocation() {
      navigator.geolocation.getCurrentPosition(this.navigatorCallback)
  }
  
  private navigatorCallback(position: GeolocationPosition) {
    console.log(position);
  }
}
