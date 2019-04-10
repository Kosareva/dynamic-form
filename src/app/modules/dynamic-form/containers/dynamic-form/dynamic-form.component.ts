import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {DynamicFormAbstractComponent} from '../../model/DynamicFormAbstractComponent';

@Component({
  selector: 'app-dynamic-form',
  template: `
    <form class="dynamic-form" [formGroup]="form" (ngSubmit)="onSubmit($event)">
      <ng-container *ngFor="let field of config">
        <ng-container *ngIf="!field.hidden" appDynamicFormField [field]="field" [form]="form"></ng-container>
      </ng-container>
    </form>
  `,
})
export class DynamicFormComponent extends DynamicFormAbstractComponent implements OnInit {

  constructor(
    protected fb: FormBuilder,
  ) {
    super(fb);
  }

  ngOnInit() {
    this.form = this.createGroup();
  }

}
