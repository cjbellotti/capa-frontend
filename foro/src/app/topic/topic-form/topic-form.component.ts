import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.css']
})
export class TopicFormComponent implements OnInit {

  form : FormGroup;

  @Output('enviar') enviarEvent : EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private _formBuilder : FormBuilder
  ) {
    this.form = this._formBuilder.group({
      asunto : [null, Validators.required],
      contenido : [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  enviar() {
    this.enviarEvent.emit(this.form.value);
  }

}
