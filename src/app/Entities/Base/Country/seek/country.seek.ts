import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Country } from '../country';


@Component({
  selector: 'base-country-seek',
  templateUrl: './country.seek.html',
  styleUrls: ['./country.seek.css']
})
export class CountrySeekUI extends SeekModal<Country> {

  country: Country = new Country();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.country);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}