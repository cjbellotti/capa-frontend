import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TopicComponent } from './components/components.module';
import { TopicService } from './services/services.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foro';

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
  mostrar(data : any) {
    console.log(data);
  }
}
