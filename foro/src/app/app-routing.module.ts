import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { TestTablaComponent } from './components/test-tabla/test-tabla.component';

const routes: Routes = [
  { path : '', component : MainComponent},
  { path : 'login', component : LoginPageComponent},
  { path : 'tabla', component : TestTablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
