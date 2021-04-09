import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NewUserComponent } from './components/new-user/new-user.component';

const routes: Routes = [
  {
    path:"",
    component: LoginPageComponent
  },
  {
    path:"main-page",
    component: MainPageComponent
  },
  {
    path:"new-user",
    component: NewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
