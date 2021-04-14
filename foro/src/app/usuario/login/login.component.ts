import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;

  @Output('ingresar') ingresarEvent : EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private _formBuilder : FormBuilder
  ) {
    this.form = this._formBuilder.group({
      email : [null, Validators.compose([Validators.required, Validators.email])],
      contrasena : [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar() {
    this.ingresarEvent.emit(this.form.value);
  }
}
