import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @Output('salir') salirEvent : EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  salir() {
    this.salirEvent.emit();
  }
}
