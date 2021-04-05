import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  form : FormGroup;

  @Output('aceptar') aceptarEvent : EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private _formBuilder : FormBuilder
  ) {
    this.form = this._formBuilder.group({
      email : [null, Validators.compose([Validators.required, Validators.email])],
      nombre : [null, Validators.required],
      contrasena : [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  aceptar() {
    this.aceptarEvent.emit(this.form.value);
  }
}
