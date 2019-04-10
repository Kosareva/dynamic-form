import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DynamicFormFieldBase} from './DynamicFormFieldBase';
import {EventEmitter, Input, Output} from '@angular/core';
import {DynamicFormFieldValidator} from './DynamicFormFieldValidator';

export interface DynamicFormComponent {
  form: FormGroup;
  config: DynamicFormFieldBase<any>[];
}

export abstract class DynamicFormAbstractComponent implements DynamicFormComponent {

  @Input() config: DynamicFormFieldBase<any>[];
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() submitRaw: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;

  constructor(
    protected fb: FormBuilder,
  ) {
  }

  public createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control => {
        if (control.controlType === 'button') {
          return;
        }
        group.addControl(
          control.key || '',
          this.fb.control(
            {
              value: control.value || '',
              disabled: control.disabled || control.hidden || false
            },
            this.bindValidators(control.validators || [])
          ));
      }
    );
    return group;
  }

  public getFormFieldByKey(key: string): DynamicFormFieldBase<any> {
    return this.config.find(field => field.key === key);
  }

  public hideControl(controlName: string): void {
    if (!controlName) {
      throw new Error(`Can\'t hide control: control name missed`);
    }
    const control = this.config.find((field) => field.key === controlName);
    const formControl = this.form.get(controlName);
    if (control && formControl) {
      control.hidden = true;
      formControl.disable();
    }
  }

  public isControlHidden(controlName: string): boolean {
    if (!controlName) {
      throw new Error(`Can\'t check if control hidden: control name missed`);
    }
    const control = this.config.find((fld) => fld.key === controlName);
    return control && control.hidden;
  }

  public onSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.submitRaw.emit(this.form.value);
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.markAllAsTouched();
    }
  }

  public showControl(controlName: string): void {
    if (!controlName) {
      throw new Error(`Can\'t show control: control name missed`);
    }
    const control = this.config.find((field) => field.key === controlName);
    const formControl = this.form.get(controlName);
    if (control && formControl) {
      control.hidden = false;
      formControl.enable();
    }
  }

  protected bindValidators(validators: DynamicFormFieldValidator[]) {
    if (validators.length > 0) {
      const validList = [];
      validators.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  protected markAllAsTouched(): void {
    try {
      Object.values(this.form.controls).forEach((val) => {
        val.markAsTouched();
      });
    } catch (e) {
      console.error(e);
    }
  }

}
