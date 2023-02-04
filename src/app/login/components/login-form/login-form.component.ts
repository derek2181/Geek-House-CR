import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ErrorMessage } from 'src/utils/errors/ErrorMessage';
import { LoginModel } from '../../models/login.model';
import { LoginService } from '../../services/login.service';

//TODO: 
// 1. Separar en componentes mas pequeños aun.
// 2. Cambiar la implementación de JSON SERVER a la de la API
// 3. 

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  public loginForm!: FormGroup;
  public hide = true;
  public showProgressBar = false;
  public showAPIerror = false;
  public getErrorMessage = ErrorMessage.getErrorMessage;

  constructor(
    private _formBuilder: FormBuilder,
    public _loginService: LoginService,
    private _router: Router
  ) {}

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
    if (!this.loginForm.invalid) {
      this.showProgressBar = true;

      const login: LoginModel = {
        username: this.username.value,
        password: this.password.value,
      };

      this._loginService.signIn(login).subscribe({
        next: (user) => {
          //Implementación usando JSON SERVER, un paquete que crea una db rapidisimo para pruebas en front end, esto cambiara cuando este el endpoint
          //-------------------------------------------------------------------------------------------------
          if (user[0]) {
            console.log("Se encontro!",user[0]);
            this._router.navigate(['/'])
          } else {
            console.log('No se encontro nada');
          }
          //-------------------------------------------------------------------------------------------------
          this.showProgressBar = false;
        },
        error: (err) => {
          this.showProgressBar = false;
        },
      });
    }
  }

  private InitializeForm(): void {
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
