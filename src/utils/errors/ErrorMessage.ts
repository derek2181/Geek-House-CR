import { FormControl } from '@angular/forms';

export class ErrorMessage {

  constructor() {
    throw Error("Cannot instantiate a static class");
  }
  
  private static required: string = "Este campo es obligatorio";
  private static default: string = "Hay un error en este campo";

  static getErrorMessage(formControl: FormControl): string {
    if (formControl?.hasError('required')) return ErrorMessage.required;
    return ErrorMessage.default;
  }
}
