import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DynamicFormError} from '../../model/DynamicFormError';
import {DynamicFormFieldBase} from '../../model/DynamicFormFieldBase';

@Component({
  selector: 'app-dynamic-form-error',
  template: `
    <ng-container
      *ngIf="form.get(field.key)?.touched && form.get(field.key).invalid && field.validators?.length">
      <ng-container *ngFor="let validation of field.validators">
        <div *ngIf="form.get(field.key).hasError(validation.name)">
          {{validation.message}}
        </div>
      </ng-container>
    </ng-container>
  `,
})

export class DynamicFormErrorComponent implements DynamicFormError {
  @Input() field: DynamicFormFieldBase<any>;
  @Input() form: FormGroup;
}
