import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  data = {
    nombre : '',
    apellido : ''
  }

  @Output('enviar') enviarEvent : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  enviar() {
    this.enviarEvent.emit(this.data);
  }
}
