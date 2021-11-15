import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type UserPosition = 'unknown' | GeolocationPosition;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _position = new BehaviorSubject<UserPosition>('unknown');

  constructor() {}

  get position() {
    navigator.geolocation.getCurrentPosition((position) => {
      this._position.next(position);
    });

    return this._position.asObservable();
  }
}
