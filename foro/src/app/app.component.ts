import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TopicComponent } from './components/components.module';
import { TopicService } from './services/services.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foro';

  constructor(
    private _router : Router
  ) {

  }
  salir() {
    this._router.navigate(['login']);
  }
}
