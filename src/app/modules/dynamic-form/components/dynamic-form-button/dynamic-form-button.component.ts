import {Component} from '@angular/core';
import {DynamicFormFieldAbstractComponent} from '../../model/DynamicFormFieldAbstractComponent';

@Component({
  selector: 'app-dynamic-form-button',
  template: `
    <div [formGroup]="form">
      <button type="submit" mat-raised-button color="primary">{{field.label}}</button>
    </div>
  `,
})
export class DynamicFormButtonComponent extends DynamicFormFieldAbstractComponent {

}
