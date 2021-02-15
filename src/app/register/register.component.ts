import { Component, OnInit,ViewChild } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Register Success';
  form: any = {
    firstname: null,
    lastname: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, 
  private route: ActivatedRoute,
  private router: Router 
  ) { }

  ngOnInit(): void {
  
  }

  onSubmit(): void {
    const { firstname, lastname,email, password } = this.form;

    this.authService.register(firstname,lastname, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['login', { id: data.Id }]);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}