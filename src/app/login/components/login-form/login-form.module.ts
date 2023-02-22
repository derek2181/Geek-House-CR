import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'src/app/shared/components/progress-bar/progress-bar.module';
import { LoginFormComponent } from './login-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ErrorLabelModule } from 'src/app/shared/components/error-label/error-label.module';



@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    ProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    ErrorLabelModule
  ],
  exports: [LoginFormComponent]
})
export class LoginFormModule { }
