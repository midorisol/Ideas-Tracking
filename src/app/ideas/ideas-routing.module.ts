import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListIdeaComponent} from "./list-idea/list-idea.component";
import {NewIdeaComponent} from "./new-idea/new-idea.component";

const routes: Routes = [
  {
    path: '',
    component: ListIdeaComponent
  },
  {
    path:'new',
    component: NewIdeaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeasRoutingModule { }
