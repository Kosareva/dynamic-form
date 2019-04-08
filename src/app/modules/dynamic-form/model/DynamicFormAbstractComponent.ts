import {FormGroup} from '@angular/forms';
import {DynamicFormFieldBase} from './DynamicFormFieldBase';

export interface DynamicFormComponent {
  form: FormGroup;
  config: DynamicFormFieldBase<any>[];
}

export abstract class DynamicFormAbstractComponent implements DynamicFormComponent {
  form: FormGroup;
  config: DynamicFormFieldBase<any>[];

  public getFormFieldByKey(key: string): DynamicFormFieldBase<any> {
    return this.config.find(field => field.key === key);
  }

  protected markAllAsTouched(): void {
    try {
      Object.values(this.form.controls).forEach((val) => {
        if (!val.disabled) {
          val.markAsTouched();
        }
      });
    } catch (e) {
      console.error(e);
    }
  }
}
