import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMessage } from 'src/utils/errors/ErrorMessage';
import { LoginModel } from '../../models/login.model';
import { LoginService } from '../../services/login.service';
import { IsFormValid } from 'src/utils/validations/Validations';
import { finalize } from 'rxjs';

//TODO:
// 1. Separar en componentes mas pequeños aun. DONE
// 2. Cambiar la implementación de JSON SERVER a la de la API.
// 3. Separar en componentes los divs de los inputs del login.

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  public loginForm!: FormGroup;
  public hidePassword = true;
  public responseError = '';
  public progressBarVisibility = false;
  public getErrorMessage = ErrorMessage.getErrorMessage;

  constructor(
    private _formBuilder: FormBuilder,
    public _loginService: LoginService,
    private _router: Router
  ) {}

  public get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  public get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  ngOnInit(): void {
    this.InitializeForm();
    this.username.valueChanges.subscribe((value) => {
      this.responseError = '';
    });
    this.password.valueChanges.subscribe((value) => {
      this.responseError = '';
    });
  }

  public TogglePasswordVisibility(e: MouseEvent) {
    e.stopPropagation();
    this.hidePassword = !this.hidePassword;
  }

  public SignIn(): void {
    if (IsFormValid(this.loginForm)) {
      this.responseError = '';
      this.progressBarVisibility = true;

      const login: LoginModel = {
        username: this.username.value,
        password: this.password.value,
      };

      this._loginService
        .signIn(login)
        .pipe(
          finalize(() => {
            this.progressBarVisibility = false;
          })
        )
        .subscribe((user) => {
          //Implementación usando JSON SERVER, un paquete que crea una db rapidisimo para pruebas en front end, esto cambiara cuando este el endpoint
          //-------------------------------------------------------------------------------------------------
          if (user[0]) {
            this._router.navigate(['/']);
          } else {
            this.responseError =
              'Parece que hay un error en la contraseña o el usuario'; //Mensaje que venga desde el back?
          }
          //-------------------------------------------------------------------------------------------------
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
