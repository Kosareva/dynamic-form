import {Component, Input} from '@angular/core';
import {DynamicFormFieldAbstractComponent, DynamicFormFieldComponent} from '../../model/DynamicFormFieldAbstractComponent';
import {DynamicFormFieldInput} from '../../model/DynamicFormFieldInput';

@Component({
  selector: 'app-dynamic-form-input',
  template: `
    <mat-form-field appearance="outline" fxFlex [formGroup]="form">
      <mat-label *ngIf="field.label">{{field.label}}</mat-label>
      <mat-icon *ngIf="field.matIcon" matSuffix class="secondary-text">{{field.matIcon}}</mat-icon>
      <input matInput [formControlName]="field.key" [placeholder]="field.label" [type]="field.type">
      <ng-container *ngFor="let validation of field.validators" ngProjectAs="mat-error">
        <mat-error *ngIf="form.get(field.key)?.hasError(validation.name) && form.get(field.key)?.touched && form.get(field.key).invalid">
          {{validation.message}}
        </mat-error>
      </ng-container>
    </mat-form-field>
  `,
})
export class DynamicFormInputComponent extends DynamicFormFieldAbstractComponent implements DynamicFormFieldComponent {
  @Input() field: DynamicFormFieldInput;
}
