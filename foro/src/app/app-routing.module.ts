import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { TestTablaComponent } from './components/test-tabla/test-tabla.component';
import { ForoGuard } from './guards/foro.guard';

const routes: Routes = [
  { path : '', component : MainComponent, canActivate : [ForoGuard]},
  { path : 'login', component : LoginPageComponent},
  { path : 'tabla', component : TestTablaComponent, canActivate : [ForoGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
