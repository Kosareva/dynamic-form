import {DynamicFormFieldBase} from './DynamicFormFieldBase';

export class DynamicFormFieldSelect<T> extends DynamicFormFieldBase<T> {
  controlType = 'select';
  options: { key: string, value: T }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
