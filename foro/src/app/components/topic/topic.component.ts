import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TopicService } from '../../services/services.module';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {


  @Output('hecho') hechoEvent : EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private _topicService : TopicService,
    public dialogRef: MatDialogRef<TopicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  enviar(data : any) {
    this._topicService.save(data)
      .then(() => {
        this.hechoEvent.emit();
      })
      .catch(err => {
        alert('Ocurrio un error al guardar el topico.');
      })
  }

  cerrar() {
    this.dialogRef.close();
  }
}
