import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { FunctionalObjective } from '../functionalObjective';
import { FunctionalObjectiveService } from '../functionalObjective.service';
import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';
import { TargetSettingServiceExtended } from '../../../../partials/PMS/targetSetting.service.extended';



@Component({
  selector: 'pms-functionalObjective-edit',
  templateUrl: './functionalObjective.edit.html',
  styleUrls: ['./functionalObjective.edit.css']
})
export class FunctionalObjectiveEditUI extends EditModal<FunctionalObjective> implements IEditModal<FunctionalObjective>  {

  constructor(private functionalObjectiveService: FunctionalObjectiveService, private targetSettingServiceExtended: TargetSettingServiceExtended) {
    super(functionalObjectiveService);
    this.currentInstance = new FunctionalObjective();
  }

  //#region Foreign Entities

  //#region -- TargetSetting --

  targetSettingComponent: ForeignComponent<TargetSetting> = new ForeignComponent<TargetSetting>(this.functionalObjectiveService.TargetSettingService);

  @Input()
  public set TargetSetting(value: TargetSetting) {
    this.currentInstance.targetSetting = this.targetSettingComponent.instance = value;
  }


  //#endregion -- TargetSetting --
  //#region -- ParentalFunctionalObjective --

  parentalFunctionalObjectiveComponent: ForeignComponent<FunctionalObjective> = new ForeignComponent<FunctionalObjective>(this.functionalObjectiveService, false);

  @Input()
  public set ParentalFunctionalObjective(value: FunctionalObjective) {
    this.currentInstance.parentalFunctionalObjective = this.parentalFunctionalObjectiveComponent.instance = value;
  }


  //#endregion -- ParentalFunctionalObjective --
  //#endregion

  @ViewChild('functionalObjectiveEditUI')
  private functionalObjectiveEditUI: NgForm;

  Init(functionalObjective: FunctionalObjective = new FunctionalObjective()) {
    this.loadLists();
    this.InitFunctionalObjective(functionalObjective);
  }

  private loadLists() {
    this.targetSettingServiceExtended.collectionOfParentFunctionalObjective(this.currentInstance.targetSetting)
      .then(list => {
        console.log('Parental Objective : ', list);

        this.parentalFunctionalObjectiveComponent.list = list;
      });

  }

  InitFunctionalObjective(functionalObjective: FunctionalObjective) {
    this.currentInstance = this.service.CreateInstance();

    if (!functionalObjective.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.targetSettingComponent.instance = functionalObjective.targetSetting;
    } else {
      //this.functionalObjectiveEditUI.reset();
      functionalObjective.targetSetting = this.targetSettingComponent.instance;
    }
    this.currentInstance = functionalObjective;
  }

  ResetForm() {
    this.TargetSetting = new TargetSetting();
    //this.ParentalFunctionalObjective = new FunctionalObjective();
  }
}