import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnitEditFormComponent} from './unit-edit-form.component';
import {DynamicFormModule} from '../modules/dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [UnitEditFormComponent],
  imports: [
    CommonModule,
    DynamicFormModule,
  ],
  exports: [UnitEditFormComponent],
  entryComponents: [UnitEditFormComponent]
})
export class UnitEditFormModule {
}
