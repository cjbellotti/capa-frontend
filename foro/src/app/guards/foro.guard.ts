import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable()
export class ForoGuard implements CanActivate {

  constructor (
    private _router : Router,
    private _usuarioService : UsuarioService
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this._usuarioService.loggedIn) {
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }

}
