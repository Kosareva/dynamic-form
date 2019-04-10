import {DynamicFormFieldBase} from './DynamicFormFieldBase';

export class DynamicFormFieldCheckbox extends DynamicFormFieldBase<boolean> {
  controlType = 'checkbox';

  constructor(options: {} = {}) {
    super(options);
  }
}
