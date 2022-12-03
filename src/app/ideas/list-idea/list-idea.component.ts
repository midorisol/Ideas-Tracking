import { Component, OnInit } from '@angular/core';
import {Idea} from "../models/idea.model";
import {IdeasService} from "../ideas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-idea',
  templateUrl: './list-idea.component.html',
  styleUrls: ['./list-idea.component.scss']
})
export class ListIdeaComponent implements OnInit {
  ideas: Idea[] = [];

  constructor(private ideasService: IdeasService, private router: Router) { }

  ngOnInit(): void {
    this.listIdeas();
  }

  listIdeas() {
    this.ideasService.listIdeas().subscribe(ideas => this.ideas = ideas);
  }


  delete(idea: Idea) {
    this.ideasService.deleteIdea(idea).subscribe(_ => this.listIdeas());
  }

  goToDetails(idea: Idea) {
    this.router.navigateByUrl(`/ideas/${idea.id}`);
  }
}
