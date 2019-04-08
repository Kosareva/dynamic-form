import {FormGroup} from '@angular/forms';
import {DynamicFormFieldBase} from './DynamicFormFieldBase';

export interface DynamicFormError {
  form: FormGroup;
  field: DynamicFormFieldBase<any>;
}
