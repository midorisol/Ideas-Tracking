import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email?: string;
password?: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
 login(){
  this.authService.login(this.email, this.password).subscribe(user => console.log(user))
 }
}
