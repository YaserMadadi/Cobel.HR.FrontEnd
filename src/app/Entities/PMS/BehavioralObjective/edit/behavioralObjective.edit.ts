import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { BehavioralObjective } from '../behavioralObjective';
import { BehavioralObjectiveService } from '../behavioralObjective.service';
import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';
import { CompetencyItem } from '../../CompetencyItem/competencyItem';
import { CompetencyItemEditUI } from '../../CompetencyItem/edit/competencyItem.edit';
import { ExpectedLevel } from '../../../Base.PMS/ExpectedLevel/expectedLevel';
import { ExpectedLevelEditUI } from '../../../Base.PMS/ExpectedLevel/edit/expectedLevel.edit';



@Component({
  selector: 'pms-behavioralObjective-edit',
  templateUrl: './behavioralObjective.edit.html',
  styleUrls: ['./behavioralObjective.edit.css']
})
export class BehavioralObjectiveEditUI extends EditModal<BehavioralObjective> implements IEditModal<BehavioralObjective>  {

  constructor(private behavioralObjectiveService: BehavioralObjectiveService) {
    super(behavioralObjectiveService);
    this.currentInstance = new BehavioralObjective();
  }

  //#region Foreign Entities

  //#region -- TargetSetting --

  targetSettingComponent: ForeignComponent<TargetSetting> = new ForeignComponent<TargetSetting>(this.behavioralObjectiveService.TargetSettingService);

  @Input()
  public set TargetSetting(value: TargetSetting) {
    this.currentInstance.targetSetting = this.targetSettingComponent.instance = value;
  }


  //#endregion -- TargetSetting --
  //#region -- CompetencyItem --

  competencyItemComponent: ForeignComponent<CompetencyItem> = new ForeignComponent<CompetencyItem>(this.behavioralObjectiveService.CompetencyItemService, false);

  @Input()
  public set CompetencyItem(value: CompetencyItem) {
    this.currentInstance.competencyItem = this.competencyItemComponent.instance = value;
  }


  //#endregion -- CompetencyItem --
  //#region -- ExpectedLevel --

  expectedLevelComponent: ForeignComponent<ExpectedLevel> = new ForeignComponent<ExpectedLevel>(this.behavioralObjectiveService.ExpectedLevelService, false);

  @Input()
  public set ExpectedLevel(value: ExpectedLevel) {
    this.currentInstance.expectedLevel = this.expectedLevelComponent.instance = value;
  }


  //#endregion -- ExpectedLevel --
  //#endregion

  @ViewChild('behavioralObjectiveEditUI')
  private behavioralObjectiveEditUI: NgForm;

  Init(behavioralObjective: BehavioralObjective = new BehavioralObjective()) {
    if (behavioralObjective.isNew)
      this.behavioralObjectiveEditUI.reset();
      this.InitBehavioralObjective(behavioralObjective);
      this.loadLists();
  }

  private loadLists() {

    this.competencyItemComponent.LoadList();
    this.expectedLevelComponent.LoadList();
  }

  InitBehavioralObjective(behavioralObjective: BehavioralObjective) {
    if (!behavioralObjective.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.targetSettingComponent.instance = behavioralObjective.targetSetting;
      this.competencyItemComponent.instance = behavioralObjective.competencyItem;
      this.expectedLevelComponent.instance = behavioralObjective.expectedLevel;
    } else {
      behavioralObjective.targetSetting = this.targetSettingComponent.instance;
      behavioralObjective.competencyItem = this.competencyItemComponent.instance;
      behavioralObjective.expectedLevel = this.expectedLevelComponent.instance;
      this.currentInstance = behavioralObjective;
    }
  }

  updateText() {
    if (this.currentInstance.competencyItem.isActive)
      this.currentInstance.title = this.currentInstance.competencyItem.descriptor;
    else
      this.currentInstance.title = '';
  }

  ResetForm() {
    this.TargetSetting = new TargetSetting();
    this.CompetencyItem = new CompetencyItem();
    this.ExpectedLevel = new ExpectedLevel();
  }
}