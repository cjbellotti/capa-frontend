import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './topic/topic.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TopicModule } from '../topic/topic.module';
import { MatDialogModule } from '@angular/material/dialog';
import { UsuarioComponent } from './usuario/usuario.component';
import { ShareModule } from '../share/share.module';
import { MainComponent } from './main/main.component';
import { ServicesModule } from '../services/services.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { UsuarioModule } from '../usuario/usuario.module';
import { TestTablaComponent } from './test-tabla/test-tabla.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [TopicComponent, UsuarioComponent, MainComponent, LoginPageComponent, TestTablaComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    TopicModule,
    MatDialogModule,
    ShareModule,
    ServicesModule,
    UsuarioModule,
    MatTableModule
  ]
})
export class ComponentsModule { }
export * from './topic/topic.component';
