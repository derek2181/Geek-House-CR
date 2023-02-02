import { Component, OnInit } from '@angular/core';
import { ErrorMessage } from 'src/utils/errors/ErrorMessage';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public hide = true;
  public getErrorMessage = ErrorMessage.getErrorMessage;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.InitializeForm();
  }

  public TogglePasswordVisibility(e: MouseEvent) {
    e.stopPropagation();
    this.hide = !this.hide;
  }

  public get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  public get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  public signIn(): void {
    // console.log('Form values: ', this.loginForm);
    if (!this.loginForm.invalid) {
      alert('Form valid, implement service consumption');
    }
  }

  private InitializeForm(): void {
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
