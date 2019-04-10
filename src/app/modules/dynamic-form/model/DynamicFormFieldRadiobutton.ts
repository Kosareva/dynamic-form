import {DynamicFormFieldBase} from './DynamicFormFieldBase';

export class DynamicFormFieldRadiobutton<T> extends DynamicFormFieldBase<T> {
  controlType = 'radiobutton';
  options: { key: T, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
