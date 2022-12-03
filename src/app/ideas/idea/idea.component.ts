import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Idea} from "../models/idea.model";

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {
  idea!: Idea;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: data => this.idea = data['idea']
    });
  }

  goToListPage() {
    this.router.navigateByUrl('/ideas');
  }

}
