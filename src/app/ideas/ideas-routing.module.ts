import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListIdeaComponent} from "./list-idea/list-idea.component";
import {NewIdeaComponent} from "./new-idea/new-idea.component";
import {IdeaComponent} from "./idea/idea.component";
import {IdeaResolverService} from "./idea-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: ListIdeaComponent
  },
  {
    path:'new',
    resolve: {idea: IdeaResolverService},
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    component: NewIdeaComponent
  },
  {
    path: ':id',
    resolve: {idea: IdeaResolverService},
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    component: IdeaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeasRoutingModule { }
