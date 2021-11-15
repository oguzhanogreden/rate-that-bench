import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  position$ = this.user.position;

  constructor(private user: UserService) {
    this.position$.subscribe(console.log);
  }

  ngOnInit(): void {}

  // TODO: Learn what this lifecycle hook is
  ngAfterViewInit(): void {}
}
