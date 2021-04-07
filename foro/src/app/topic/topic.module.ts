import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicFormComponent } from './topic-form/topic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TopicItemComponent } from './topic-item/topic-item.component';
import { TopicListComponent } from './topic-list/topic-list.component';



@NgModule({
  declarations: [TopicFormComponent, TopicItemComponent, TopicListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports : [
    TopicFormComponent,
    TopicListComponent
  ]
})
export class TopicModule { }
