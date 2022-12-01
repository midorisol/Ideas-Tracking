import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IdeasService} from "../ideas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.scss']
})
export class NewIdeaComponent implements OnInit {

    form: FormGroup
  constructor(private ideasService: IdeasService, private router: Router) {
      this.form = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required)
      });
  }

  ngOnInit(): void {
  }

  submitted() {
  this.ideasService.createIdea(this.form.value.name, this.form.value.description).subscribe(
    () => {
      this.router.navigateByUrl('/ideas');
    });
  }
}
