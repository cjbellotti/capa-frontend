import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  datos = {
    nombre : 'Luis',
    apellido : 'Perez'
  }
  mostrar(data : any) {
    // alert(`NOMBRE: ${data.nombre} - APELLIDO : ${data.apellido}`);
    alert('NOMBRE: ' + data.nombre + ' - APELLIDO : ' + data.apellido);
  }

  clickBoton() {
    alert('Has oprimido el boton.');
  }
}
