import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rate that bench';

  // currentPosition: google.maps.LatLng | undefined;

  // onSearchResult(r: SearchResult) {
  //   if (r instanceof CurrentPositionResult) {
  //     this.currentPosition = r.location;
  //   } else {
  //     console.log(r);
  //   }
  // }
}
