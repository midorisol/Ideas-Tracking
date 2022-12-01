import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  email: string = '';
  username: string = '';
  password: string = '';
  passwordCheck = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registration() {
    if(this.password === this.passwordCheck) {
      this.authService.registration(this.email, this.username, this.password).subscribe({
        next: response => this.router.navigateByUrl('/login')
        }
      )
    }
  }

}
