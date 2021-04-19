import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TopicComponent } from './components/components.module';
import { TopicService } from './services/services.module';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foro';

  opciones : any[] = [
    {
      id : 1,
      name : 'Item 1'
    },
    {
      id : 2,
      name : 'Item 2'
    },
    {
      id : 3,
      name : 'Item 3'
    },
  ]

  constructor(
    public usuarioService : UsuarioService,
    private _router : Router
  ) {

  }
  salir() {
    this.usuarioService.logout()
      .then(() => {
        this._router.navigate(['login']);
      })
  }
}
