import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @Output('nuevo') nuevoEvent : EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  nuevo() {
    this.nuevoEvent.emit();
  }

}
