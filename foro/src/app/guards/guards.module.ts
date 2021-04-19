import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '../services/services.module';
import { ForoGuard } from './foro.guard';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesModule,
    RouterModule
  ],
  providers : [
    ForoGuard
  ]
})
export class GuardsModule { }
export * from './foro.guard';
