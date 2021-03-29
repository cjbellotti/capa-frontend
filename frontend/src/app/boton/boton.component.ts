import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input("text") text : string = '';
  @Output('action') a : EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  action() {
    this.a.emit();
  }

}
