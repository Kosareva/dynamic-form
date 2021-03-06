import {Component, Input} from '@angular/core';
import {DynamicFormFieldAbstractComponent, DynamicFormFieldComponent} from '../../model/DynamicFormFieldAbstractComponent';
import {DynamicFormFieldSelect} from '../../model/DynamicFormFieldSelect';

@Component({
  selector: 'app-dynamic-form-select',
  template: `
    <mat-form-field appearance="outline" fxFlex [formGroup]="form">
      <mat-label *ngIf="field.label">{{field.label}}</mat-label>
      <mat-icon *ngIf="field.matIcon" matSuffix class="secondary-text">{{field.matIcon}}</mat-icon>
      <mat-select [placeholder]="field.label" [formControlName]="field.key">
        <mat-option *ngFor="let item of field.options" [value]="item.key">{{item.value}}</mat-option>
      </mat-select>
      <ng-container *ngFor="let validation of field.validators" ngProjectAs="mat-error">
        <mat-error *ngIf="form.get(field.key)?.hasError(validation.name) && form.get(field.key)?.touched && form.get(field.key).invalid">
          {{validation.message}}
        </mat-error>
      </ng-container>
    </mat-form-field>
  `,
})
export class DynamicFormSelectComponent<T> extends DynamicFormFieldAbstractComponent implements DynamicFormFieldComponent {
  @Input() field: DynamicFormFieldSelect<T>;
}
