import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input('data') data = {
    nombre : 'Pedro',
    apellido : 'Lopez'
  }

  @Output('enviar') enviarEvent : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  enviar() {
    this.enviarEvent.emit(this.data);
  }
}
