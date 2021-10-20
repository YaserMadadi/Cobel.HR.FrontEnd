import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Country } from '../country';
import { CountryService } from '../country.service';
import { CountryDeleteUI } from '../delete/country.delete';
import { CountryEditUI } from '../edit/country.edit';
import { PersonService } from '../../../HR/Person/person.service';



@Component({
  selector: 'base-country-master',
  templateUrl: './country.master.html',
  styleUrls: ['./country.master.css'],
  
})
export class CountryMasterUI extends MasterModal<Country> {

  constructor(private countryService: CountryService) {
    super(countryService);
  }
}