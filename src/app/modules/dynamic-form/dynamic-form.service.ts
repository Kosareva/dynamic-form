import {Injectable} from '@angular/core';
import {DynamicFormFieldBase} from './model/DynamicFormFieldBase';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DynamicFormFieldValidator} from './model/DynamicFormFieldValidator';

// TODO: really?
@Injectable({providedIn: 'root'})
export class DynamicFormService {
  constructor() {
  }

  toFormGroup(fields: DynamicFormFieldBase<any>[]): FormGroup {
    const group: FormGroup = new FormGroup({});
    fields.forEach((field) => {
      group.setControl(field.key || '', new FormControl({
        value: field.value || '',
        disabled: field.disabled || false
      }, this.bindValidators(field.validators || [])));
    });
    return group;
  }

  private bindValidators(validators: DynamicFormFieldValidator[]) {
    if (validators.length > 0) {
      const validList = [];
      validators.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }
}
