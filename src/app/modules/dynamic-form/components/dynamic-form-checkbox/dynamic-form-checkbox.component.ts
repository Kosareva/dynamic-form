import {Component, Input} from '@angular/core';
import {DynamicFormFieldAbstractComponent} from '../../model/DynamicFormFieldAbstractComponent';
import {DynamicFormFieldCheckbox} from '../../model/DynamicFormFieldCheckbox';

@Component({
  selector: 'app-dynamic-form-checkbox',
  template: `
    <div fxFlex [formGroup]="form">
      <mat-icon *ngIf="field.matIcon" matSuffix class="secondary-text">{{field.matIcon}}</mat-icon>
      <mat-checkbox [formControlName]="field.key">{{field.label}}</mat-checkbox>
      <ng-container *ngFor="let validation of field.validators" ngProjectAs="mat-error">
        <mat-error *ngIf="form.get(field.key)?.hasError(validation.name) && form.get(field.key)?.touched && form.get(field.key).invalid">
          {{validation.message}}
        </mat-error>
      </ng-container>
    </div>
  `,
})
export class DynamicFormCheckboxComponent extends DynamicFormFieldAbstractComponent {
  @Input() field: DynamicFormFieldCheckbox;
}
