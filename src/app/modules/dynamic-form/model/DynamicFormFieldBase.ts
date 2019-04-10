import {DynamicFormFieldValidator} from './DynamicFormFieldValidator';

export class DynamicFormFieldBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  disabled: boolean;
  hidden: boolean;
  matIcon: string;
  validators: DynamicFormFieldValidator[];

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    disabled?: boolean,
    hidden?: boolean,
    matIcon?: string,
    validators?: DynamicFormFieldValidator[],
  } = {}) {
    this.value = options.value || null;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.disabled = options.disabled || false;
    this.hidden = options.hidden || false;
    this.matIcon = options.matIcon || '';
    this.validators = options.validators || [];
  }
}
