import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { MaritalInfo } from '../maritalInfo';
import { MaritalInfoService } from '../maritalInfo.service';
import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';



@Component({
  selector: 'hr-maritalInfo-edit',
  templateUrl: './maritalInfo.edit.html',
  styleUrls: ['./maritalInfo.edit.css']
})
export class MaritalInfoEditUI extends EditModal<MaritalInfo> implements IEditModal<MaritalInfo>  {
  
  constructor(private maritalInfoService: MaritalInfoService) {
    super(maritalInfoService); 
    this.currentInstance = new MaritalInfo();
  }

  //#region Foreign Entities
	
	//#region -- Person --

  personComponent : ForeignComponent<Person> = new ForeignComponent<Person>(this.maritalInfoService.PersonService);

  @Input()
  public set Person(value: Person) {
    this.currentInstance.person = this.personComponent.instance = value;
  }  


  //#endregion -- Person --
	//#endregion

  @ViewChild('maritalInfoEditUI')
  private maritalInfoEditUI: NgForm;

  Init(maritalInfo: MaritalInfo = new MaritalInfo()) {
    if (maritalInfo.isNew)
      this.maritalInfoEditUI.reset();
    this.InitMaritalInfo(maritalInfo);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitMaritalInfo(maritalInfo: MaritalInfo) {
    if (!maritalInfo.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.personComponent.instance = maritalInfo.person;
    } else {
      maritalInfo.person = this.personComponent.instance;
    }
    this.currentInstance = maritalInfo;
  }

  ResetForm() {
    this.Person = new Person();
  }
}