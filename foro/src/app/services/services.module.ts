import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicService } from './topic.service';
import { UsuarioService } from './usuario.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers : [
    TopicService,
    UsuarioService
  ]
})
export class ServicesModule { }
export * from './topic.service';
export * from './usuario.service';
