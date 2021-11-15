import { Component, OnInit } from '@angular/core';
import { concat, of, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { filterNullish, UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rate that bench';

  private _locationSearched = new Subject();

  public locatingUser$ = this._locationSearched.pipe(
    tap((_) => console.log('subscribed!')), // TODO: doesn't subscribe onInit?
    switchMap(() =>
      concat(
        of(true),
        this.user.position.pipe(
          filterNullish(),
          map((_) => false)
        )
      )
    )
  );

  constructor(private user: UserService) {
    this._locationSearched.pipe(tap((x) => console.log(x))).subscribe();
  }

  ngOnInit(): void {
    this.onLocationSearched();
  }

  onLocationSearched() {
    console.log('fired!');
    this._locationSearched.next();
  }
}
