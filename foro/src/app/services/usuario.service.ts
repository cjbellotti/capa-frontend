import { Injectable } from "@angular/core";

@Injectable({
  providedIn : 'root'
})
export class UsuarioService {

  loggedIn : boolean = false;

  usuarios = [
    {
      id : 1,
      email : 'usuario@mail.com',
      nombre : 'Pepe',
      contrasena : '123456',
    },
  ];

  getAll() : Promise<any[]> {
    return Promise.resolve(this.usuarios);
  }

  getById(id : number) : Promise<any> {
    return Promise.resolve(this.usuarios.find(u => u.id == id));
  }

  getByEmail(email : string) : Promise<any> {
    return Promise.resolve(this.usuarios.find(u => u.email === email))
  }

  save(usuario : any) : Promise<any> {
    this.usuarios.push(usuario);
    return Promise.resolve(this.usuarios);
  }

  login(email : string, password : string) : Promise<any> {
    return this.getByEmail(email)
      .then(usuario => {
        if (!usuario) {
          return Promise.reject({
            message : 'Usuario inexistente.'
          })
        }
        if (usuario.contrasena !== password) {
          return Promise.reject({
            message : 'Contraseña incorrecta'
          })
        }
        this.loggedIn = true;
        return Promise.resolve(usuario);
      })
  }

  logout() : Promise<void> {
    this.loggedIn = false;
    return Promise.resolve();
  }
}
