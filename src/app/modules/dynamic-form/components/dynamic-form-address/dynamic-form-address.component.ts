import {AfterViewInit, Component, Input, OnDestroy, ViewChild} from '@angular/core';
import {GooglePlacesDirective} from '../../../google-places/google-places.directive';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {DynamicFormFieldAbstractComponent, DynamicFormFieldComponent} from '../../model/DynamicFormFieldAbstractComponent';
import {DynamicFormFieldAddress} from '../../model/DynamicFormFieldAddress';

@Component({
  selector: 'app-dynamic-form-address',
  template: `
    <mat-form-field appearance="outline" fxFlex [formGroup]="form">
      <mat-label *ngIf="field.label">{{field.label}}</mat-label>
      <mat-icon *ngIf="field.matIcon" matSuffix class="secondary-text">{{field.matIcon}}</mat-icon>
      <input matInput appGooglePlaces [formControlName]="field.key" [placeholder]="field.label">
      <ng-container *ngFor="let validation of field.validators" ngProjectAs="mat-error">
        <mat-error *ngIf="form.get(field.key)?.hasError(validation.name) && form.get(field.key)?.touched && form.get(field.key).invalid">
          {{validation.message}}
        </mat-error>
      </ng-container>
    </mat-form-field>
  `,
})
export class DynamicFormAddressComponent extends DynamicFormFieldAbstractComponent implements DynamicFormFieldComponent, OnDestroy, AfterViewInit {

  @Input() field: DynamicFormFieldAddress;
  @ViewChild(GooglePlacesDirective) autocomplete: GooglePlacesDirective;

  unsubscribe: Subject<any> = new Subject<any>();

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngAfterViewInit(): void {
    this.autocomplete.onSelect
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((val) => {
        this.form.controls[this.field.key].setValue((val && Object.keys(val).length) ? val : null, {
          emitModelToViewChange: false,
        });
      });
  }

}
