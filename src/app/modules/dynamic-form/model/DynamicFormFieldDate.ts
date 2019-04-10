import {DynamicFormFieldBase} from './DynamicFormFieldBase';

export class DynamicFormFieldDate extends DynamicFormFieldBase<string> {
  controlType = 'date';

  constructor(options: {} = {}) {
    super(options);
  }
}
