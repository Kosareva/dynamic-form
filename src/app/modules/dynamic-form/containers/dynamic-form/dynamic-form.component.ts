import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  template: `
    <form
      class="dynamic-form"
      [formGroup]="form"
    ></form>
  `,
})
export class DynamicFormComponent implements OnInit {

  @Input()
  config: any[] = [];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control => group.addControl(control.name, this.fb.control('')));
    return group;
  }

}
