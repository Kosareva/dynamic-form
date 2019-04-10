import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormComponent} from './containers/dynamic-form/dynamic-form.component';
import {DynamicFormInputComponent} from './components/dynamic-form-input/dynamic-form-input.component';
import {DynamicFormSelectComponent} from './components/dynamic-form-select/dynamic-form-select.component';
import {DynamicFormErrorComponent} from './components/dynamic-form-error/dynamic-form-error.component';
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule,
  MatChipsModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatNativeDateModule,
  MatOptionModule, MatRadioModule,
  MatSelectModule
} from '@angular/material';
import {DynamicFormFieldDirective} from './directives/dynamic-form-field.directive';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DynamicFormButtonComponent} from './components/dynamic-form-button/dynamic-form-button.component';
import {DynamicFormCheckboxComponent} from './components/dynamic-form-checkbox/dynamic-form-checkbox.component';
import {DynamicFormRadiobuttonComponent} from './components/dynamic-form-radiobutton/dynamic-form-radiobutton.component';
import {DynamicFormDateComponent} from './components/dynamic-form-date/dynamic-form-date.component';
import {GooglePlacesModule} from '../google-places/google-places.module';
import {DynamicFormAddressComponent} from './components/dynamic-form-address/dynamic-form-address.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormInputComponent,
    DynamicFormSelectComponent,
    DynamicFormErrorComponent,
    DynamicFormButtonComponent,
    DynamicFormCheckboxComponent,
    DynamicFormRadiobuttonComponent,
    DynamicFormDateComponent,
    DynamicFormAddressComponent,

    DynamicFormFieldDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    GooglePlacesModule,

    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatAutocompleteModule,

    FlexLayoutModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,

    GooglePlacesModule,

    DynamicFormComponent,
    DynamicFormInputComponent,
    DynamicFormSelectComponent,
    DynamicFormErrorComponent,
    DynamicFormButtonComponent,
    DynamicFormCheckboxComponent,
    DynamicFormRadiobuttonComponent,
    DynamicFormDateComponent,
    DynamicFormAddressComponent,

    DynamicFormFieldDirective,
  ],
  entryComponents: [
    DynamicFormInputComponent,
    DynamicFormSelectComponent,
    DynamicFormButtonComponent,
    DynamicFormCheckboxComponent,
    DynamicFormCheckboxComponent,
    DynamicFormRadiobuttonComponent,
    DynamicFormDateComponent,
    DynamicFormAddressComponent,
  ]
})
export class DynamicFormModule {
}
