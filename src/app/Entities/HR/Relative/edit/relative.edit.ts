import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Relative } from '../relative';
import { RelativeService } from '../relative.service';
import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { RelativeType } from '../../../Base.HR/RelativeType/relativeType';
import { RelativeTypeEditUI } from '../../../Base.HR/RelativeType/edit/relativeType.edit';



@Component({
  selector: 'hr-relative-edit',
  templateUrl: './relative.edit.html',
  styleUrls: ['./relative.edit.css']
})
export class RelativeEditUI extends EditModal<Relative> implements IEditModal<Relative>  {
  
  constructor(private relativeService: RelativeService) {
    super(relativeService); 
    this.currentInstance = new Relative();
  }

  //#region Foreign Entities
	
	//#region -- Peson --

  pesonComponent : ForeignComponent<Person> = new ForeignComponent<Person>(this.relativeService.PersonService);

  @Input()
  public set Peson(value: Person) {
    this.currentInstance.peson = this.pesonComponent.instance = value;
  }  


  //#endregion -- Peson --
	//#region -- RelationType --

  relationTypeComponent : ForeignComponent<RelativeType> = new ForeignComponent<RelativeType>(this.relativeService.RelativeTypeService);

  @Input()
  public set RelationType(value: RelativeType) {
    this.currentInstance.relationType = this.relationTypeComponent.instance = value;
  }  


  //#endregion -- RelationType --
	//#endregion

  @ViewChild('relativeEditUI')
  private relativeEditUI: NgForm;

  Init(relative: Relative = new Relative()) {
    if (relative.isNew)
      this.relativeEditUI.reset();
    this.InitRelative(relative);
    this.loadLists();
  }

  private loadLists() {
    
    this.relationTypeComponent.LoadList();
  }
  
  InitRelative(relative: Relative){
    this.currentInstance = this.service.CreateInstance();
    if (!relative.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.pesonComponent.instance = relative.peson;
			this.relationTypeComponent.instance = relative.relationType;
    } else {
      relative.peson = this.pesonComponent.instance;
			relative.relationType = this.relationTypeComponent.instance;
    }
    this.currentInstance = relative;
  }

  ResetForm() {
    this.Peson = new Person();
		this.RelationType = new RelativeType();
  }
}