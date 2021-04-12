import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationsComponent } from './components/calculations/calculations.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { RatesComponent } from './components/rates/rates.component';

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
  },
  {
    path:"dashboard",
    component: DashboardComponent
  },
  {
    path:"rates",
    component: RatesComponent
  },
  {
    path:"calculations",
    component: CalculationsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
