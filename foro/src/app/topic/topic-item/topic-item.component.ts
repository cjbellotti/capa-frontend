import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.css']
})
export class TopicItemComponent implements OnInit {

  @Input('data') data : any = {
    asunto : 'Un Asunto',
    usuarioCreador : 'Pepe',
    visualizaciones : 150,
    respuestas : 7,
    fechaUltimaRespuesta : new Date()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
