import { Injectable } from "@angular/core";

@Injectable()
export class UsuarioService {

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
}
