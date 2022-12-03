import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Idea} from "../models/idea.model";
import {IdeasService} from "../ideas.service";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  // @ts-ignore
  @Input() idea: Idea;
  @Output() onVote = new EventEmitter<void>();

  constructor(private ideasService: IdeasService) { }

  ngOnInit(): void {
  }


  upvote() {
    this.ideasService.upvoteIdeas(this.idea).subscribe(_ => this.onVote.emit());
  }

  downvote() {
    this.ideasService.downvoteIdea(this.idea).subscribe(_ => this.onVote.emit());
  }
}
