import {Component, Input} from '@angular/core';
import {DynamicFormFieldAbstractComponent} from '../../model/DynamicFormFieldAbstractComponent';
import {DynamicFormFieldRadiobutton} from '../../model/DynamicFormFieldRadiobutton';

@Component({
  selector: 'app-dynamic-form-radiobutton',
  template: `
    <div fxFlex [formGroup]="form">
      <mat-label *ngIf="field.label">{{field.label}}</mat-label>
      <mat-icon *ngIf="field.matIcon" matSuffix class="secondary-text">{{field.matIcon}}</mat-icon>
      <mat-radio-group [formControlName]="field.key">
        <mat-radio-button *ngFor="let opt of field.options" [value]="opt.key">{{opt.value}}</mat-radio-button>
      </mat-radio-group>
      <ng-container *ngFor="let validation of field.validators" ngProjectAs="mat-error">
        <mat-error *ngIf="form.get(field.key)?.hasError(validation.name) && form.get(field.key)?.touched && form.get(field.key).invalid">
          {{validation.message}}
        </mat-error>
      </ng-container>
    </div>
  `,
})
export class DynamicFormRadiobuttonComponent<T> extends DynamicFormFieldAbstractComponent {
  @Input() field: DynamicFormFieldRadiobutton<T>;
}
