import { AuthToastService } from './../../../core/auth/toast/auth-toast.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'inz-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authService: AuthService,
    private router: Router,
    private authToastService: AuthToastService,
    private fb: FormBuilder) {
    this.buildLoginForm();
  }

  ngOnInit() {

  }

  private buildLoginForm() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.authService
      .login(this.loginForm.value)
      .then(logged => {
        console.log(logged);
        if (logged) {
          this.router.navigate(['/']);
        } else {
          this.authToastService.loginFailed();
        }
      });
  }

}
