import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { AppraisalApproverConfig } from '../appraisalApproverConfig';
import { AppraisalApproverConfigService } from '../appraisalApproverConfig.service';
import { PositionCategory } from '../../../Base.HR/PositionCategory/positionCategory';
import { PositionCategoryEditUI } from '../../../Base.HR/PositionCategory/edit/positionCategory.edit';
import { ApproverType } from '../../../Base.PMS/ApproverType/approverType';
import { ApproverTypeEditUI } from '../../../Base.PMS/ApproverType/edit/approverType.edit';



@Component({
  selector: 'pms-appraisalApproverConfig-edit',
  templateUrl: './appraisalApproverConfig.edit.html',
  styleUrls: ['./appraisalApproverConfig.edit.css']
})
export class AppraisalApproverConfigEditUI extends EditModal<AppraisalApproverConfig> implements IEditModal<AppraisalApproverConfig>  {
  
  constructor(private appraisalApproverConfigService: AppraisalApproverConfigService) {
    super(appraisalApproverConfigService); 
    this.currentInstance = new AppraisalApproverConfig();
  }

  //#region Foreign Entities
	
	//#region -- PositionCategory --

  positionCategoryComponent : ForeignComponent<PositionCategory> = new ForeignComponent<PositionCategory>(this.appraisalApproverConfigService.PositionCategoryService);

  @Input()
  public set PositionCategory(value: PositionCategory) {
    this.currentInstance.positionCategory = this.positionCategoryComponent.instance = value;
  }  


  //#endregion -- PositionCategory --
	//#region -- ApproverType --

  approverTypeComponent : ForeignComponent<ApproverType> = new ForeignComponent<ApproverType>(this.appraisalApproverConfigService.ApproverTypeService);

  @Input()
  public set ApproverType(value: ApproverType) {
    this.currentInstance.approverType = this.approverTypeComponent.instance = value;
  }  


  //#endregion -- ApproverType --
	//#endregion

  @ViewChild('appraisalApproverConfigEditUI')
  private appraisalApproverConfigEditUI: NgForm;

  Init(appraisalApproverConfig: AppraisalApproverConfig = new AppraisalApproverConfig()) {
    if (appraisalApproverConfig.isNew)
      this.appraisalApproverConfigEditUI.reset();
    this.InitAppraisalApproverConfig(appraisalApproverConfig);
    this.loadLists();
  }

  private loadLists() {
    
    this.positionCategoryComponent.LoadList();
		this.approverTypeComponent.LoadList();
  }
  
  InitAppraisalApproverConfig(appraisalApproverConfig: AppraisalApproverConfig){
    this.currentInstance = this.service.CreateInstance();
    if (!appraisalApproverConfig.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.positionCategoryComponent.instance = appraisalApproverConfig.positionCategory;
			this.approverTypeComponent.instance = appraisalApproverConfig.approverType;
    } else {
      appraisalApproverConfig.positionCategory = this.positionCategoryComponent.instance;
			appraisalApproverConfig.approverType = this.approverTypeComponent.instance;
    }
    this.currentInstance = appraisalApproverConfig;
  }

  ResetForm() {
    this.PositionCategory = new PositionCategory();
		this.ApproverType = new ApproverType();
  }
}