import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicService } from './topic.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers : [
    TopicService
  ]
})
export class ServicesModule { }
export * from './topic.service';
