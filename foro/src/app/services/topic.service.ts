import { Injectable } from "@angular/core";

@Injectable()
export class TopicService {

  topics = [
    {
      id : 1,
      asunto : 'Un Asunto',
      usuarioCreador : 'Pepe',
      visualizaciones : 150,
      respuestas : 7,
      fechaUltimaRespuesta : new Date(),
      contenido : 'Donec pulvinar turpis id lacus volutpat faucibus. Etiam id ex at massa aliquam ultrices et eu neque. Phasellus dapibus mi vel nisi hendrerit rutrum. Suspendisse sit amet suscipit erat. Nullam luctus ultricies odio. Praesent aliquam elit arcu, eu sagittis mi fermentum sed. Cras porttitor, quam in malesuada sollicitudin, felis metus egestas ante, et dictum leo est vel libero. Ut vulputate, ipsum nec posuere iaculis, mauris quam maximus tortor, quis pretium sapien mi sed nulla. Nunc faucibus, mauris sed efficitur sollicitudin, augue eros pulvinar purus, eget scelerisque mauris orci in purus.'
    },
    {
      id : 2,
      asunto : 'Un Asunto 2',
      usuarioCreador : 'Pepe',
      visualizaciones : 150,
      respuestas : 7,
      fechaUltimaRespuesta : new Date(),
      contenido : 'Nam euismod, nisi non lobortis dapibus, nisl leo semper ante, sed elementum tortor ipsum quis justo. Mauris vel ante vel erat consequat tempus finibus a est. Cras augue turpis, dictum ac cursus et, rhoncus interdum tellus. Curabitur tristique metus sed enim ornare, sed tincidunt ligula commodo. Vestibulum et volutpat ante. Nullam ultricies mi aliquet est ultrices imperdiet. Duis lobortis ligula sed nulla laoreet, eu dignissim magna eleifend. Nam eu scelerisque nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.'
    },
    {
      id : 3,
      asunto : 'Un Asunto 3',
      usuarioCreador : 'Pepe',
      visualizaciones : 150,
      respuestas : 7,
      fechaUltimaRespuesta : new Date(),
      contenido : 'Nam id condimentum turpis, sed aliquam elit. Sed consectetur lorem quis auctor congue. Vestibulum convallis fringilla dui, eget condimentum nulla bibendum at. Maecenas tristique turpis interdum, ultricies sapien congue, mollis nibh. Proin accumsan quam ut metus lobortis, sit amet rutrum lacus bibendum. Nunc fermentum rhoncus felis, nec euismod ex elementum vitae. Vivamus sodales turpis lectus, at bibendum neque dignissim at. Aliquam fringilla aliquam velit ut rhoncus. Aenean vitae elementum metus. Phasellus dapibus nulla varius leo accumsan facilisis.'
    },
  ];

  getAll() : Promise<any[]> {
    return Promise.resolve(this.topics);
  }

  getById(id : number) : Promise<any> {
    return Promise.resolve(this.topics.find(t => t.id == id));
  }

  save(topic : any) : Promise<any> {
    this.topics.push(topic);
    return Promise.resolve(this.topics);
  }
}
