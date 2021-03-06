import {DynamicFormFieldBase} from './DynamicFormFieldBase';

export class DynamicFormFieldSelect<T> extends DynamicFormFieldBase<T> {
  controlType = 'select';
  options: { key: T, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
