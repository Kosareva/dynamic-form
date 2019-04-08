import {DynamicFormFieldValidator} from './DynamicFormFieldValidator';

export class DynamicFormFieldBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  disabled: boolean;
  validators: DynamicFormFieldValidator[];

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    disabled?: boolean,
    validators?: DynamicFormFieldValidator[],
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.disabled = options.disabled || false;
    this.validators = options.validators || [];
  }
}
