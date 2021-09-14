import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { City } from '../city';
import { CityService } from '../city.service';
import { CityDeleteUI } from '../delete/city.delete';
import { CityEditUI } from '../edit/city.edit';
import { PersonService } from '../../../HR/Person/person.service';
import { HabitancyService } from '../../../HR/Habitancy/habitancy.service';
import { UniversityService } from '../../University/university.service';



@Component({
  selector: 'base-city-master',
  templateUrl: './city.master.html',
  styleUrls: ['./city.master.css'],
})
export class CityMasterUI extends MasterModal<City> {

  constructor(private cityService: CityService) {
    super(cityService);
  }
}