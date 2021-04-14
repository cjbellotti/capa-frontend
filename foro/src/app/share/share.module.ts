import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogLayoutComponent } from './dialog-layout/dialog-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [DialogLayoutComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports : [
    DialogLayoutComponent
  ]
})
export class ShareModule { }
