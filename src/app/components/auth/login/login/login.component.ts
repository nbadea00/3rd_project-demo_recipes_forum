import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { FirebaseAuthService } from '../../firebase-auth.service';

@Component({
  selector: 'nz-demo-form-normal-login',
  template: `

  <div class="cont">
    <img src="../../../assets/img/logo-no-background.png" alt="">
    <form nz-form [formGroup]="validateForm" class="login-form" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your username!">
          <nz-input-group nzPrefixIcon="mail">
            <input type="text" nz-input formControlName="email" placeholder="Email" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your Password!">
          <nz-input-group nzPrefixIcon="lock">
            <input type="password" nz-input formControlName="password" placeholder="Password" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <div nz-row class="login-form-margin">
        <div nz-col [nzSpan]="12">
          <label nz-checkbox formControlName="remember">
            <span>Remember me</span>
          </label>
        </div>
        <div nz-col [nzSpan]="12">
          <a class="login-form-forgot">Forgot password</a>
        </div>
      </div>
      <button nz-button class="login-form-button login-form-margin" [nzType]="'primary'">Log in</button>
      Or
      <a [routerLink]="['/signup']" routerLinkActive="router-link-active" >register now!</a>
    </form>
  </div>
  `,
  styles: [
    `
    .cont{
      min-height: 78vh;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      img{
        width: 250px;
        margin-bottom: 30px
      }
    }
      .login-form {
        max-width: 400px;
      }

      .login-form-margin {
        margin-bottom: 16px;
      }

      .login-form-forgot {
        float: right;
      }

      .login-form-button {
        width: 100%;
      }
    `
  ]
})
export class NzDemoFormNormalLoginComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.fbA.logIn(this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: UntypedFormBuilder, private fbA: FirebaseAuthService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
