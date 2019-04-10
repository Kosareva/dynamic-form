import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DynamicFormFieldBase} from '../modules/dynamic-form/model/DynamicFormFieldBase';
import {DynamicFormFieldInput} from '../modules/dynamic-form/model/DynamicFormFieldInput';
import {Validators} from '@angular/forms';
import {DynamicFormFieldSelect} from '../modules/dynamic-form/model/DynamicFormFieldSelect';
import {DynamicFormButton} from '../modules/dynamic-form/model/DynamicFormButton';
import {DynamicFormFieldCheckbox} from '../modules/dynamic-form/model/DynamicFormFieldCheckbox';
import {DynamicFormFieldRadiobutton} from '../modules/dynamic-form/model/DynamicFormFieldRadiobutton';
import {DynamicFormFieldDate} from '../modules/dynamic-form/model/DynamicFormFieldDate';
import {DynamicFormFieldAddress} from '../modules/dynamic-form/model/DynamicFormFieldAddress';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  config: DynamicFormFieldBase<any>[] = [
    new DynamicFormFieldInput({
      key: 'name',
      label: 'Name',
      // validators: [
      //   {
      //     validator: Validators.required,
      //     name: 'required',
      //     message: 'Name required!'
      //   }
      // ]
    }),
    new DynamicFormFieldSelect({
      key: 'city',
      label: 'City',
      options: [
        {
          key: {
            name: 'kiev',
            age: 1000
          },
          value: 'Kiev'
        },
        {
          key: {
            name: 'donetsk',
            age: 300
          },
          value: 'Donetsk'
        },
        {
          key: {
            name: 'sevastopol',
            age: 500
          },
          value: 'Sevastopol'
        },
      ],
    }),
    new DynamicFormButton({
      label: 'Submit',
    }),
    new DynamicFormFieldCheckbox({
      key: 'policy',
      label: 'Agree with policy?',
      // validators: [
      //   {
      //     validator: Validators.required,
      //     name: 'required',
      //     message: 'Policy required!'
      //   }
      // ]
    }),
    new DynamicFormFieldRadiobutton({
      key: 'gender',
      label: 'Gender',
      options: [
        {
          key: 'male',
          value: 'Male'
        },
        {
          key: 'female',
          value: 'Female'
        },
        {
          key: 'any',
          value: 'Any'
        },
      ],
      // validators: [
      //   {
      //     validator: Validators.required,
      //     name: 'required',
      //     message: 'Gender required!'
      //   }
      // ]
    }),
    new DynamicFormFieldDate({
      key: 'startDate',
      label: 'Start date',
      // validators: [
      //   {
      //     validator: Validators.required,
      //     name: 'required',
      //     message: 'Start date required!'
      //   }
      // ]
    }),
    new DynamicFormFieldAddress({
      key: 'address',
      label: 'Address',
      validators: [
        {
          validator: Validators.required,
          name: 'required',
          message: 'Address required!'
        }
      ]
    }),
  ];

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  createUnit() {
    this.router.navigate(['/unitedit']);
  }

  onSubmit(event) {
    console.log('ON SUBM', event);
  }

}
