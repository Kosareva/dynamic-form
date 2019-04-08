import {Component, Input} from '@angular/core';
import {DynamicFormFieldAbstractComponent, DynamicFormFieldComponent} from '../../model/DynamicFormFieldAbstractComponent';
import {DynamicFormFieldSelect} from '../../model/DynamicFormFieldSelect';

@Component({
  selector: 'app-dynamic-form-select',
  template: `
    <div [formGroup]="form">
      <label *ngIf="field.label">{{field.label}}</label>
      <select [id]="field.key" [formControlName]="field.key">
        <option *ngFor="let opt of field.options" [value]="stringifyIfObject(opt.key)">{{opt.value}}</option>
      </select>
    </div>
    <app-dynamic-form-error [form]="form" [field]="field"></app-dynamic-form-error>
  `,
})
export class DynamicFormSelectComponent<T> extends DynamicFormFieldAbstractComponent implements DynamicFormFieldComponent {
  @Input() field: DynamicFormFieldSelect<T>;
}
