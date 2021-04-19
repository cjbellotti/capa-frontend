import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TopicService } from 'app/services/topic.service';

@Component({
  selector: 'test-tabla',
  templateUrl: './test-tabla.component.html',
  styleUrls: ['./test-tabla.component.css']
})
export class TestTablaComponent implements OnInit {

  dataSource : MatTableDataSource<any>;

  displayedColumns = ['usuario','asunto', 'visualizaciones', 'comandos']
  constructor(
    private _topicService : TopicService
  ) { }

  ngOnInit(): void {
    this._topicService.getAll()
      .then(topics => {
        this.dataSource = new MatTableDataSource(topics);
      })
  }

  editar(id : number) {
    
  }

  borrar(id : number) {

  }
}
