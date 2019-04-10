import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DynamicFormError} from '../../model/DynamicFormError';
import {DynamicFormFieldBase} from '../../model/DynamicFormFieldBase';

@Component({
  selector: 'app-dynamic-form-error',
  template: `
    <ng-container *ngFor="let validation of field.validators">
      <mat-error *ngIf="form.get(field.key)?.hasError(validation.name) && form.get(field.key)?.touched && form.get(field.key).invalid">
        {{validation.message}}
      </mat-error>
    </ng-container>

  `,
})

export class DynamicFormErrorComponent implements DynamicFormError {
  @Input() field: DynamicFormFieldBase<any>;
  @Input() form: FormGroup;
}
