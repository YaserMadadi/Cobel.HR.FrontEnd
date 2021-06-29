import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { MilitaryServiceInclusive } from '../militaryServiceInclusive';
import { MilitaryServiceInclusiveService } from '../militaryServiceInclusive.service';
import { MilitaryService } from '../../MilitaryService/militaryService';
import { MilitaryServiceEditUI } from '../../MilitaryService/edit/militaryService.edit';
import { InclusiveType } from '../../../Base/InclusiveType/inclusiveType';
import { InclusiveTypeEditUI } from '../../../Base/InclusiveType/edit/inclusiveType.edit';



@Component({
  selector: 'hr-militaryServiceInclusive-edit',
  templateUrl: './militaryServiceInclusive.edit.html',
  styleUrls: ['./militaryServiceInclusive.edit.css']
})
export class MilitaryServiceInclusiveEditUI extends EditModal<MilitaryServiceInclusive> implements IEditModal<MilitaryServiceInclusive>  {
  
  constructor(private militaryServiceInclusiveService: MilitaryServiceInclusiveService) {
    super(militaryServiceInclusiveService); 
    this.currentInstance = new MilitaryServiceInclusive();
  }

  //#region Foreign Entities
	
	//#region -- MilitaryService --

  militaryServiceComponent : ForeignComponent<MilitaryService> = new ForeignComponent<MilitaryService>(this.militaryServiceInclusiveService.MilitaryServiceService);

  @Input()
  public set MilitaryService(value: MilitaryService) {
    this.currentInstance.militaryService = this.militaryServiceComponent.instance = value;
  }  


  //#endregion -- MilitaryService --
	//#region -- InclusiveType --

  inclusiveTypeComponent : ForeignComponent<InclusiveType> = new ForeignComponent<InclusiveType>(this.militaryServiceInclusiveService.InclusiveTypeService);

  @Input()
  public set InclusiveType(value: InclusiveType) {
    this.currentInstance.inclusiveType = this.inclusiveTypeComponent.instance = value;
  }  


  //#endregion -- InclusiveType --
	//#endregion

  @ViewChild('militaryServiceInclusiveEditUI')
  private militaryServiceInclusiveEditUI: NgForm;

  Init(militaryServiceInclusive: MilitaryServiceInclusive = new MilitaryServiceInclusive()) {
    if (militaryServiceInclusive.isNew)
      this.militaryServiceInclusiveEditUI.reset();
    this.InitMilitaryServiceInclusive(militaryServiceInclusive);
    this.loadLists();
  }

  private loadLists() {
    
    this.inclusiveTypeComponent.LoadList();
  }
  
  InitMilitaryServiceInclusive(militaryServiceInclusive: MilitaryServiceInclusive) {
    if (!militaryServiceInclusive.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.militaryServiceComponent.instance = militaryServiceInclusive.militaryService;
			this.inclusiveTypeComponent.instance = militaryServiceInclusive.inclusiveType;
    } else {
      militaryServiceInclusive.militaryService = this.militaryServiceComponent.instance;
			militaryServiceInclusive.inclusiveType = this.inclusiveTypeComponent.instance;
    }
    this.currentInstance = militaryServiceInclusive;
  }

  ResetForm() {
    this.MilitaryService = new MilitaryService();
		this.InclusiveType = new InclusiveType();
  }
}