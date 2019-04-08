import {Component, Input} from '@angular/core';
import {DynamicFormFieldAbstractComponent, DynamicFormFieldComponent} from '../../model/DynamicFormFieldAbstractComponent';
import {DynamicFormFieldInput} from '../../model/DynamicFormFieldInput';

@Component({
  selector: 'app-dynamic-form-input',
  template: `
    <div [formGroup]="form">
      <label *ngIf="field.label">{{field.label}}</label>
      <input [type]="field.type" [id]="field.key" [formControlName]="field.key">
    </div>
    <app-dynamic-form-error [form]="form" [field]="field"></app-dynamic-form-error>
  `,
})
export class DynamicFormInputComponent extends DynamicFormFieldAbstractComponent implements DynamicFormFieldComponent {
  @Input() field: DynamicFormFieldInput;
}
