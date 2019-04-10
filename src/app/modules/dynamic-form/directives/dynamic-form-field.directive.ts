import {ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DynamicFormFieldBase} from '../model/DynamicFormFieldBase';
import {DynamicFormInputComponent} from '../components/dynamic-form-input/dynamic-form-input.component';
import {DynamicFormSelectComponent} from '../components/dynamic-form-select/dynamic-form-select.component';
import {DynamicFormButtonComponent} from '../components/dynamic-form-button/dynamic-form-button.component';
import {DynamicFormCheckboxComponent} from '../components/dynamic-form-checkbox/dynamic-form-checkbox.component';
import {DynamicFormRadiobuttonComponent} from '../components/dynamic-form-radiobutton/dynamic-form-radiobutton.component';
import {DynamicFormDateComponent} from '../components/dynamic-form-date/dynamic-form-date.component';
import {DynamicFormAddressComponent} from '../components/dynamic-form-address/dynamic-form-address.component';

const componentMapper = {
  address: DynamicFormAddressComponent,
  button: DynamicFormButtonComponent,
  checkbox: DynamicFormCheckboxComponent,
  date: DynamicFormDateComponent,
  input: DynamicFormInputComponent,
  radiobutton: DynamicFormRadiobuttonComponent,
  select: DynamicFormSelectComponent,
};

@Directive({
  selector: '[appDynamicFormField]'
})
export class DynamicFormFieldDirective implements OnInit {

  @Input() field: DynamicFormFieldBase<any>;
  @Input() form: FormGroup;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {
  }

  ngOnInit(): void {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.controlType]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.form = this.form;
  }

}
