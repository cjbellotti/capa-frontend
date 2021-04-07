import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foro';

  topics = [
    {
      asunto : 'Un Asunto',
      usuarioCreador : 'Pepe',
      visualizaciones : 150,
      respuestas : 7,
      fechaUltimaRespuesta : new Date()
    },
    {
      asunto : 'Un Asunto 2',
      usuarioCreador : 'Pepe',
      visualizaciones : 150,
      respuestas : 7,
      fechaUltimaRespuesta : new Date()
    },
    {
      asunto : 'Un Asunto 3',
      usuarioCreador : 'Pepe',
      visualizaciones : 150,
      respuestas : 7,
      fechaUltimaRespuesta : new Date()
    },
  ];

  mostrar(data : any) {
    console.log(data);
  }
}
