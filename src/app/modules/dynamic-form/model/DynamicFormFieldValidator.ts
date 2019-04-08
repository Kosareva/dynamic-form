import {Validator} from '@angular/forms';

export interface DynamicFormFieldValidator {
  validator: Validator[];
  name: string;
  message: string;
}
