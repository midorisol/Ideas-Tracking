import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { ListIdeaComponent } from './list-idea/list-idea.component';
import { IdeaComponent } from './idea/idea.component';
import { VoteComponent } from './vote/vote.component';
import {IdeasRoutingModule} from "./ideas-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinner, MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [
    NewIdeaComponent,
    ListIdeaComponent,
    IdeaComponent,
    VoteComponent
  ],
  imports: [
    CommonModule,
    IdeasRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ]
})
export class IdeasModule { }
