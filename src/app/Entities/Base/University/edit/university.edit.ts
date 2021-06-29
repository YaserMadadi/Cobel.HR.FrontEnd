import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { University } from '../university';
import { UniversityService } from '../university.service';
import { City } from '../../City/city';
import { CityEditUI } from '../../City/edit/city.edit';



@Component({
  selector: 'base-university-edit',
  templateUrl: './university.edit.html',
  styleUrls: ['./university.edit.css']
})
export class UniversityEditUI extends EditModal<University> implements IEditModal<University>  {
  
  constructor(private universityService: UniversityService) {
    super(universityService); 
    this.currentInstance = new University();
  }

  //#region Foreign Entities
	
	//#region -- City --

  cityComponent : ForeignComponent<City> = new ForeignComponent<City>(this.universityService.CityService);

  @Input()
  public set City(value: City) {
    this.currentInstance.city = this.cityComponent.instance = value;
  }  


  //#endregion -- City --
	//#endregion

  @ViewChild('universityEditUI')
  private universityEditUI: NgForm;

  Init(university: University = new University()) {
    if (university.isNew)
      this.universityEditUI.reset();
    this.InitUniversity(university);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitUniversity(university: University) {
    if (!university.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.cityComponent.instance = university.city;
    } else {
      university.city = this.cityComponent.instance;
    }
    this.currentInstance = university;
  }

  ResetForm() {
    this.City = new City();
  }
}