import { FormGroup } from "@angular/forms";

export const IsFormValid = (form: FormGroup) => {
  if (!form.invalid) return true;

  return false;
};
