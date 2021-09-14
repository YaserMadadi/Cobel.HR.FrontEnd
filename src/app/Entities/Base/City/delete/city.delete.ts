import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { City } from '../city';
import { CityService } from '../city.service';


@Component({
  selector: 'base-city-delete',
  templateUrl: './city.delete.html',
  styleUrls: ['./city.delete.css'],
})
export class CityDeleteUI extends DeleteModal<City> {

    constructor(private cityService: CityService){
        super(cityService);
    }

}