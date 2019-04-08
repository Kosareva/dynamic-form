import {DynamicFormFieldBase} from './DynamicFormFieldBase';
import {FormGroup} from '@angular/forms';
import {Input} from '@angular/core';

export interface DynamicFormFieldComponent {
  field: DynamicFormFieldBase<any>;
  form: FormGroup;
  readonly isValid: boolean;
  readonly isTouched: boolean;
  readonly value: any;
}

export abstract class DynamicFormFieldAbstractComponent implements DynamicFormFieldComponent {
  @Input() field: DynamicFormFieldBase<any>;
  @Input() form: FormGroup;

  get isValid(): boolean {
    return this.form.controls[this.field.key].valid;
  }

  get isTouched(): boolean {
    return this.form.controls[this.field.key].touched;
  }

  get value(): any {
    return this.form.controls[this.field.key].value;
  }

  public stringifyIfObject = (val): string | number => typeof val === 'object' && val !== null ? JSON.stringify(val) : val;

}
