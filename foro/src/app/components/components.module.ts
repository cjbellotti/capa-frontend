import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './topic/topic.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TopicModule } from '../topic/topic.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [TopicComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    TopicModule,
    MatDialogModule,
  ]
})
export class ComponentsModule { }
export * from './topic/topic.component';
