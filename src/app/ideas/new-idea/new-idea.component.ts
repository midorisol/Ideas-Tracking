import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IdeasService} from "../ideas.service";
import {ActivatedRoute, Router} from "@angular/router";
import {finalize} from "rxjs";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.scss']
})
export class NewIdeaComponent implements OnInit {

    form: FormGroup;
    isLoading = false;
    isEditing: boolean | undefined
    ideaId: string = '';
  constructor(private ideasService: IdeasService, private router: Router, private snackBar: MatSnackBar, private activatedRoute: ActivatedRoute) {
      this.form = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required)
      });
      this.activatedRoute.data.subscribe(data =>{
        this.isEditing = !!data['idea'];
        if (this.isEditing) {
          this.ideaId = data['idea']['id'];
          this.form.setValue({
            name: data['idea']['name'],
            description:data['idea']['description']
          });
        } else {
          this.form.reset();
        }
      });
  }

  ngOnInit(): void {
  }

  submitted() {
    this.isLoading = true;
    const request = this.isEditing ? this.ideasService.updateIdea(this.ideaId, this.form.value.name, this.form.value.description) :
      this.ideasService.createIdea(this.form.value.name, this.form.value.description);
    request.pipe(finalize(() => this.isLoading = false))
  .subscribe(
    () => {this.router.navigateByUrl('/ideas');
    }, () => {
      this.snackBar.open('An error occurred submit', 'OK', {duration: 5000})
    });
  }
}
