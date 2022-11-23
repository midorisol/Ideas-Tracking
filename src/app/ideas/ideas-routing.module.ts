import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../auth/login/login.component";
import {RegistrationComponent} from "../auth/registration/registration.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/ideas'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registration',
    component: RegistrationComponent
  }
  {
    path:'ideas'
    loadChildren: () => import('.ideas/ideas.module').then(m => m.IdeasModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeasRoutingModule { }
