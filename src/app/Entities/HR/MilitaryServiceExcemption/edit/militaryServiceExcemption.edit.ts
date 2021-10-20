import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { MilitaryServiceExcemption } from '../militaryServiceExcemption';
import { MilitaryServiceExcemptionService } from '../militaryServiceExcemption.service';
import { MilitaryService } from '../../MilitaryService/militaryService';
import { MilitaryServiceEditUI } from '../../MilitaryService/edit/militaryService.edit';
import { ExcemptionType } from '../../../Base/ExcemptionType/excemptionType';
import { ExcemptionTypeEditUI } from '../../../Base/ExcemptionType/edit/excemptionType.edit';



@Component({
  selector: 'hr-militaryServiceExcemption-edit',
  templateUrl: './militaryServiceExcemption.edit.html',
  styleUrls: ['./militaryServiceExcemption.edit.css']
})
export class MilitaryServiceExcemptionEditUI extends EditModal<MilitaryServiceExcemption> implements IEditModal<MilitaryServiceExcemption>  {
  
  constructor(private militaryServiceExcemptionService: MilitaryServiceExcemptionService) {
    super(militaryServiceExcemptionService); 
    this.currentInstance = new MilitaryServiceExcemption();
  }

  //#region Foreign Entities
	
	//#region -- MilitaryService --

  militaryServiceComponent : ForeignComponent<MilitaryService> = new ForeignComponent<MilitaryService>(this.militaryServiceExcemptionService.MilitaryServiceService);

  @Input()
  public set MilitaryService(value: MilitaryService) {
    this.currentInstance.militaryService = this.militaryServiceComponent.instance = value;
  }  


  //#endregion -- MilitaryService --
	//#region -- ExcemptionType --

  excemptionTypeComponent : ForeignComponent<ExcemptionType> = new ForeignComponent<ExcemptionType>(this.militaryServiceExcemptionService.ExcemptionTypeService);

  @Input()
  public set ExcemptionType(value: ExcemptionType) {
    this.currentInstance.excemptionType = this.excemptionTypeComponent.instance = value;
  }  


  //#endregion -- ExcemptionType --
	//#endregion

  @ViewChild('militaryServiceExcemptionEditUI')
  private militaryServiceExcemptionEditUI: NgForm;

  Init(militaryServiceExcemption: MilitaryServiceExcemption = new MilitaryServiceExcemption()) {
    if (militaryServiceExcemption.isNew)
      this.militaryServiceExcemptionEditUI.reset();
    this.InitMilitaryServiceExcemption(militaryServiceExcemption);
    this.loadLists();
  }

  private loadLists() {
    
    this.excemptionTypeComponent.LoadList();
  }
  
  InitMilitaryServiceExcemption(militaryServiceExcemption: MilitaryServiceExcemption){
    this.currentInstance = this.service.CreateInstance();
    if (!militaryServiceExcemption.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.militaryServiceComponent.instance = militaryServiceExcemption.militaryService;
			this.excemptionTypeComponent.instance = militaryServiceExcemption.excemptionType;
    } else {
      militaryServiceExcemption.militaryService = this.militaryServiceComponent.instance;
			militaryServiceExcemption.excemptionType = this.excemptionTypeComponent.instance;
    }
    this.currentInstance = militaryServiceExcemption;
  }

  ResetForm() {
    this.MilitaryService = new MilitaryService();
		this.ExcemptionType = new ExcemptionType();
  }
}