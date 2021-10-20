import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { City } from '../city';
import { CityService } from '../city.service';
import { Province } from '../../Province/province';
import { ProvinceEditUI } from '../../Province/edit/province.edit';



@Component({
  selector: 'base-city-edit',
  templateUrl: './city.edit.html',
  styleUrls: ['./city.edit.css']
})
export class CityEditUI extends EditModal<City> implements IEditModal<City>  {
  
  constructor(private cityService: CityService) {
    super(cityService); 
    this.currentInstance = new City();
  }

  //#region Foreign Entities
	
	//#region -- Province --

  provinceComponent : ForeignComponent<Province> = new ForeignComponent<Province>(this.cityService.ProvinceService);

  @Input()
  public set Province(value: Province) {
    this.currentInstance.province = this.provinceComponent.instance = value;
  }  


  //#endregion -- Province --
	//#endregion

  @ViewChild('cityEditUI')
  private cityEditUI: NgForm;

  Init(city: City = new City()) {
    if (city.isNew)
      this.cityEditUI.reset();
    this.InitCity(city);
    this.loadLists();
  }

  private loadLists() {
    
    this.provinceComponent.LoadList();
  }
  
  InitCity(city: City){
    this.currentInstance = new City();
    if (!city.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.provinceComponent.instance = city.province;
    } else {
      city.province = this.provinceComponent.instance;
    }
    this.currentInstance = city;
  }

  ResetForm() {
    this.Province = new Province();
  }
}