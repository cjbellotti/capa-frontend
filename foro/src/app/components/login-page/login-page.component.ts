import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private _usuarioService : UsuarioService,
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

  ingresar(loginData : any) {
    debugger;
    this._usuarioService.getByEmail(loginData.email)
      .then(usuario => {
        if (usuario != null) {
          if (usuario.contrasena === loginData.contrasena) {
            this._router.navigate(['']);
          } else {
            alert('Contraseña invalida.');
          }
        } else {
          alert('Usuario inexistente.');
        }
      })
      .catch(err => {
        alert("Ha ocurrido un error.");
      })
  }

}
