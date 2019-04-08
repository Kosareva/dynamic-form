import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.scss']
})
export class UnitEditComponent implements OnInit {

  constructor(
    private location: Location,
  ) {
  }

  ngOnInit() {
  }

  navigateBack() {
    this.location.back();
  }

}
