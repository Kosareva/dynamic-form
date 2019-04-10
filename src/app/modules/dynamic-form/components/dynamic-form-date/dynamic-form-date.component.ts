import {Component, Input} from '@angular/core';
import {DynamicFormFieldAbstractComponent, DynamicFormFieldComponent} from '../../model/DynamicFormFieldAbstractComponent';
import {DynamicFormFieldDate} from '../../model/DynamicFormFieldDate';

@Component({
  selector: 'app-dynamic-form-date',
  template: `
    <mat-form-field appearance="outline" fxFlex [formGroup]="form">
      <mat-label *ngIf="field.label">{{field.label}}</mat-label>
      <mat-icon *ngIf="field.matIcon" matSuffix class="secondary-text">{{field.matIcon}}</mat-icon>
      <input matInput [matDatepicker]="picker" [formControlName]="field.key" [placeholder]="field.label">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
      <ng-container *ngFor="let validation of field.validators" ngProjectAs="mat-error">
        <mat-error *ngIf="form.get(field.key)?.hasError(validation.name) && form.get(field.key)?.touched && form.get(field.key).invalid">
          {{validation.message}}
        </mat-error>
      </ng-container>
    </mat-form-field>
  `,
})
export class DynamicFormDateComponent extends DynamicFormFieldAbstractComponent implements DynamicFormFieldComponent {
  @Input() field: DynamicFormFieldDate;
}
