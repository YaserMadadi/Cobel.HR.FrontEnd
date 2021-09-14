import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { QuantitativeAppraise } from '../quantitativeAppraise';
import { QuantitativeAppraiseService } from '../quantitativeAppraise.service';
import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';



@Component({
  selector: 'pms-quantitativeAppraise-edit',
  templateUrl: './quantitativeAppraise.edit.html',
  styleUrls: ['./quantitativeAppraise.edit.css']
})
export class QuantitativeAppraiseEditUI extends EditModal<QuantitativeAppraise> implements IEditModal<QuantitativeAppraise>  {
  
  constructor(private quantitativeAppraiseService: QuantitativeAppraiseService) {
    super(quantitativeAppraiseService); 
    this.currentInstance = new QuantitativeAppraise();
  }

  //#region Foreign Entities
	
	//#region -- TargetSetting --

  targetSettingComponent : ForeignComponent<TargetSetting> = new ForeignComponent<TargetSetting>(this.quantitativeAppraiseService.TargetSettingService);

  @Input()
  public set TargetSetting(value: TargetSetting) {
    this.currentInstance.targetSetting = this.targetSettingComponent.instance = value;
  }  


  //#endregion -- TargetSetting --
	//#endregion

  @ViewChild('quantitativeAppraiseEditUI')
  private quantitativeAppraiseEditUI: NgForm;

  Init(quantitativeAppraise: QuantitativeAppraise = new QuantitativeAppraise()) {
    if (quantitativeAppraise.isNew)
      this.quantitativeAppraiseEditUI.reset();
    this.InitQuantitativeAppraise(quantitativeAppraise);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitQuantitativeAppraise(quantitativeAppraise: QuantitativeAppraise){
    this.currentInstance = this.service.CreateInstance();
    if (!quantitativeAppraise.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.targetSettingComponent.instance = quantitativeAppraise.targetSetting;
    } else {
      quantitativeAppraise.targetSetting = this.targetSettingComponent.instance;
    }
    this.currentInstance = quantitativeAppraise;
  }

  ResetForm() {
    this.TargetSetting = new TargetSetting();
  }
}