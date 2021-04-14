import { Component, OnInit } from '@angular/core';
import { TopicService } from 'app/services/topic.service';
import { MatDialog } from '@angular/material/dialog';
import { TopicComponent } from '../topic/topic.component';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  topics = [];

  constructor(
    private _topicService : TopicService,
    private _dialog : MatDialog
  ) {}

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this._topicService.getAll()
      .then(topics => {
        this.topics = topics;
      })
      .catch(err => {
        alert('Ocurrio un error cargando los topicos.');
      })
  }
  nuevo() {
    let dialogRef = this._dialog.open(TopicComponent, {
      width : '70vw',
      disableClose : true
    })

    dialogRef.componentInstance.hechoEvent.subscribe(() => {
      dialogRef.close();
      this.cargar();
    });
  }

}
