import { Component, OnInit } from '@angular/core';
import {Idea} from "../models/idea.model";
import {IdeasService} from "../ideas.service";

@Component({
  selector: 'app-list-idea',
  templateUrl: './list-idea.component.html',
  styleUrls: ['./list-idea.component.scss']
})
export class ListIdeaComponent implements OnInit {
  ideas: Idea[] = [];

  constructor(private ideasService: IdeasService) { }

  ngOnInit(): void {
    this.listIdeas();
  }

  listIdeas() {
    this.ideasService.listIdeas().subscribe(ideas => this.ideas = ideas);
  }

  upvote(idea: Idea) {
    this.ideasService.upvoteIdeas(idea).subscribe(_ => this.listIdeas());
  }

  downvote(idea: Idea) {
    this.ideasService.downvoteIdea(idea).subscribe(_ => this.listIdeas());
  }

  delete(idea: Idea) {
    this.ideasService.deleteIdea(idea).subscribe(_ => this.listIdeas());
  }
}
