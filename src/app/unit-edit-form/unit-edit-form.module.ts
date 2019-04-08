import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnitEditFormComponent} from './unit-edit-form.component';

@NgModule({
  declarations: [UnitEditFormComponent],
  imports: [
    CommonModule,
  ],
  exports: [UnitEditFormComponent],
  entryComponents: [UnitEditFormComponent]
})
export class UnitEditFormModule {
}
