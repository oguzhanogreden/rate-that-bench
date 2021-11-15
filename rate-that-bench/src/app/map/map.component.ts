import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  DefaultPosition as DefaultUserPosition,
  UserService,
} from '../user.service';

const defaultCenter = {
  lat: DefaultUserPosition.latitude,
  lng: DefaultUserPosition.longitude,
} as google.maps.LatLngLiteral;

@Component({
  selector: 'app-map',
  template: `
    <google-map
      width="100%"
      [zoom]="zoom"
      [center]="(_coords | async) ?? defaultCenter"
    >
    </google-map>
  `,
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  _coords = this.user.coordinates.pipe(
    map((c) => <google.maps.LatLngLiteral>{ lat: c.latitude, lng: c.longitude })
  );

  zoom = 11;

  public defaultCenter = defaultCenter;

  constructor(private user: UserService) {}

  ngOnInit(): void {}

  // TODO: Learn what this lifecycle hook is
  ngAfterViewInit(): void {}
}
