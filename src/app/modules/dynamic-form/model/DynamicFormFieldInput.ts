import {DynamicFormFieldBase} from './DynamicFormFieldBase';

export class DynamicFormFieldInput extends DynamicFormFieldBase<string | number> {
  controlType = 'input';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
