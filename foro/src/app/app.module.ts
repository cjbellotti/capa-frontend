import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from '@app/usuarios';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopicModule } from './topic/topic.module';
import { MainModule } from './main/main.module';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { GuardsModule } from './guards/guards.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    FormsModule,
    TopicModule,
    MainModule,
    ComponentsModule,
    ServicesModule,
    BrowserAnimationsModule,
    GuardsModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
