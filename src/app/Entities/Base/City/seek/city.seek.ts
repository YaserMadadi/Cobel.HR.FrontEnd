import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { City } from '../city';


@Component({
  selector: 'base-city-seek',
  templateUrl: './city.seek.html',
  styleUrls: ['./city.seek.css']
})
export class CitySeekUI extends SeekModal<City> {

  city: City = new City();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.city);
  }

  cancleButton_Clicked() {
    this.onClose(null);
  }
}