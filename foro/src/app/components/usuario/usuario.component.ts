import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioFormComponent } from '@app/usuarios';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Output('hecho') hechoEvent : EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private _usuarioService : UsuarioService,
    public dialogRef: MatDialogRef<UsuarioFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

  }

  ngOnInit(): void {
  }

  aceptar(data : any) {
    this._usuarioService.save(data)
      .then(() => {
        this.hechoEvent.emit();
      })
      .catch(err => {
        alert('Ocurrio un error al guardar el usuario.');
      })
  }

  cerrar() {
    this.dialogRef.close();
  }

}
