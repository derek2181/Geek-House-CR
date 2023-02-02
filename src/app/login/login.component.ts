import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

//Note: AUN NO TOMEN ESTO COMO REFERENCIA PARA EL MANEJO DE ERRORES EN FRONT
//LO SIGO PERFECCIONANDO.

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public hide = true;
  private usernameText = "";
  private passwordText = "";

  public loginForm = new FormGroup({
    username: new FormControl(this.usernameText, [Validators.required]),
    password: new FormControl(this.passwordText, [Validators.required]),
  });

  public getErrorMessage(formControl: AbstractControl<string | null, string | null> | null): string {
    console.log(formControl);
    if(formControl?.hasError('required')) return "Por favor escribe tu nombre de usuario"
    return "Hubo un error en este campo"
  }

  public get username(): AbstractControl<string | null, string | null> | null {
    return this.loginForm.get('username');
  }

  public get password(): AbstractControl<string | null, string | null> | null {
    return this.loginForm.get('password');
  }

  public TogglePasswordVisibility(e: MouseEvent) {
    e.stopPropagation();
    this.hide = !this.hide;
  }

  public onSubmit(): void {
    console.log("Form values: ", this.loginForm)
  }
}
