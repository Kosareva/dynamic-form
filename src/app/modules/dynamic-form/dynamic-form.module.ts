import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormComponent} from './containers/dynamic-form/dynamic-form.component';
import {DynamicFormInputComponent} from './components/dynamic-form-input/dynamic-form-input.component';
import {DynamicFormSelectComponent} from './components/dynamic-form-select/dynamic-form-select.component';
import {DynamicFormErrorComponent} from './components/dynamic-form-error/dynamic-form-error.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormInputComponent,
    DynamicFormSelectComponent,
    DynamicFormErrorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    DynamicFormComponent,
    DynamicFormInputComponent,
    DynamicFormSelectComponent,
    DynamicFormErrorComponent,
  ]
})
export class DynamicFormModule {
}
