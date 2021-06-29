import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Country } from '../country';
import { CountryService } from '../country.service';


@Component({
  selector: 'base-country-delete',
  templateUrl: './country.delete.html',
  styleUrls: ['./country.delete.css'],
  providers: [CountryService]
})
export class CountryDeleteUI extends DeleteModal<Country> {

    constructor(private countryService: CountryService){
        super(countryService);
    }

}