/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts"/>
import {Directive, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import PlaceResult = google.maps.places.PlaceResult;

export interface GooglePlacesFormattedAddress {
  formatted_address?: string;
  locality?: string;
  admin_area_l1?: string;
  street_number?: string;
  route?: string;
  country?: string;
  postal_code?: string;
}

@Directive({selector: '[appGooglePlaces]'})
export class GooglePlacesDirective implements OnInit {
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  private element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
  }

  ngOnInit(): void {
    const autocomplete = new google.maps.places.Autocomplete(this.element);
    google.maps.event.addDomListener(autocomplete, 'place_changed', () => {
      this.onSelect.emit(this.getFormattedAddress(autocomplete.getPlace()));
    });
  }

  getFormattedAddress(place: PlaceResult): any {
    const location_obj: GooglePlacesFormattedAddress = {};
    for (const i in place.address_components) {
      if (place.address_components.hasOwnProperty(i)) {
        const item = place.address_components[i];
        location_obj['formatted_address'] = place.formatted_address;
        if (item['types'].indexOf('locality') > -1) {
          location_obj.locality = item['long_name'];
        } else if (item['types'].indexOf('administrative_area_level_1') > -1) {
          location_obj.admin_area_l1 = item['short_name'];
        } else if (item['types'].indexOf('street_number') > -1) {
          location_obj.street_number = item['short_name'];
        } else if (item['types'].indexOf('route') > -1) {
          location_obj.route = item['long_name'];
        } else if (item['types'].indexOf('country') > -1) {
          location_obj.country = item['long_name'];
        } else if (item['types'].indexOf('postal_code') > -1) {
          location_obj.postal_code = item['short_name'];
        }
      }
    }
    return location_obj;
  }
}
