import { Injectable } from '@angular/core';
import {
  Observable,
  OperatorFunction,
  pipe,
  Subject,
  UnaryFunction,
} from 'rxjs';
import { filter, startWith } from 'rxjs/operators';

export type UserPosition = { latitude: number; longitude: number };

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _position = new Subject<UserPosition | null>();

  constructor() {}

  get position() {
    this._position.next(null);
    this.geoLocate();

    return this._position;
  }

  private geoLocate() {
    navigator.geolocation.getCurrentPosition((position) => {
      this._position.next({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
    });
  }

  get coordinates() {
    return this._position.pipe(filterNullish(), startWith(DefaultPosition));
  }
}

export const DefaultPosition: UserPosition = {
  latitude: 52.0740381,
  longitude: 5.0618904,
};

export function filterNullish<T>(): UnaryFunction<
  Observable<T | null | undefined>,
  Observable<T>
> {
  return pipe(
    filter((x) => x != null) as OperatorFunction<T | null | undefined, T>
  );
}
