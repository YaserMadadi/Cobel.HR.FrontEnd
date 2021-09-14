import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Country } from '../country';
import { CountryService } from '../country.service';



@Component({
  selector: 'base-country-edit',
  templateUrl: './country.edit.html',
  styleUrls: ['./country.edit.css']
})
export class CountryEditUI extends EditModal<Country> implements IEditModal<Country>  {
  
  constructor(private countryService: CountryService) {
    super(countryService); 
    this.currentInstance = new Country();
  }

  

  @ViewChild('countryEditUI')
  private countryEditUI: NgForm;

  Init(country: Country = new Country()) {
    if (country.isNew)
      this.countryEditUI.reset();
    this.InitCountry(country);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitCountry(country: Country){
    this.currentInstance = new Country();
    if (!country.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = country;
  }

  ResetForm() {
    
  }
}