import {Component, OnInit} from '@angular/core';
import {DynamicFormFieldBase} from '../modules/dynamic-form/model/DynamicFormFieldBase';
import {DynamicFormFieldInput} from '../modules/dynamic-form/model/DynamicFormFieldInput';
import {DynamicFormAbstractComponent} from '../modules/dynamic-form/model/DynamicFormAbstractComponent';
import {FormBuilder, Validators} from '@angular/forms';
import {DynamicFormFieldSelect} from '../modules/dynamic-form/model/DynamicFormFieldSelect';

@Component({
  selector: 'app-unit-edit-form',
  templateUrl: './unit-edit-form.component.html',
  styleUrls: ['./unit-edit-form.component.scss']
})
export class UnitEditFormComponent extends DynamicFormAbstractComponent implements OnInit {

  config: DynamicFormFieldBase<any>[] = [
    new DynamicFormFieldInput({
      key: 'firstName',
      label: 'First name',
      validators: [
        {
          validator: Validators.required,
          name: 'required',
          message: 'First name required!'
        }
      ]
    }),
    new DynamicFormFieldSelect({
      key: 'type',
      label: 'Type of smth',
      options: [
        {
          key: 'me',
          value: 'One'
        },
        {
          key: {
            name: 'two',
            age: 2
          },
          value: 'Two'
        },
        {
          key: {
            name: 'three',
            age: 3
          },
          value: 'Three'
        },
      ],
      validators: [
        {
          validator: Validators.required,
          name: 'required',
          message: 'Type required!'
        }
      ]
    }),
  ];

  constructor(
    protected fb: FormBuilder,
  ) {
    super(fb);
  }

  ngOnInit() {
    this.form = this.createGroup();
  }

  onSubmit() {
    this.markAllAsTouched();
  }

}
