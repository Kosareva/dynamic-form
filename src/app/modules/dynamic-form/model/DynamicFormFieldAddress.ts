import {DynamicFormFieldBase} from './DynamicFormFieldBase';

export class DynamicFormFieldAddress extends DynamicFormFieldBase<any> {
  controlType = 'address';

  constructor(options: {} = {}) {
    super(options);
  }
}
