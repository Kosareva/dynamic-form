import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnitEditComponent} from './unit-edit.component';
import {UnitEditFormModule} from '../unit-edit-form/unit-edit-form.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UnitEditComponent
  },
];

@NgModule({
  declarations: [UnitEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UnitEditFormModule,
  ],
})
export class UnitEditModule {
}
