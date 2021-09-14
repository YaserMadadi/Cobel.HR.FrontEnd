import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { ConfigTargetSetting } from '../configTargetSetting';
import { ConfigTargetSettingService } from '../configTargetSetting.service';

import { ConfigQualitativeObjective } from '../../ConfigQualitativeObjective/configQualitativeObjective';
import { ConfigQualitativeObjectiveMasterUI } from '../../ConfigQualitativeObjective/master/configQualitativeObjective.master';
import { ConfigQualitativeObjectiveEditUI } from '../../ConfigQualitativeObjective/edit/configQualitativeObjective.edit';
import { ConfigQualitativeObjectiveDeleteUI } from '../../ConfigQualitativeObjective/delete/configQualitativeObjective.delete';



@Component({
  selector: 'targetSettingConfig-configQualitativeObjective-detail',
  templateUrl: './targetSettingConfig-configQualitativeObjective.detail.html',
  styleUrls: ['./targetSettingConfig-configQualitativeObjective.detail.css']
})
export class TargetSettingConfig_ConfigQualitativeObjective_DetailUI extends DetailView<ConfigTargetSetting> {

  constructor(private configTargetSettingService: ConfigTargetSettingService) {
    super(configTargetSettingService);
  }

  public ConfigQualitativeObjectiveList : ConfigQualitativeObjective[] = [];
  
  public currentConfigQualitativeObjective : ConfigQualitativeObjective = new ConfigQualitativeObjective();

  private targetSettingConfig: ConfigTargetSetting = new ConfigTargetSetting();

  @Input()
  public set TargetSettingConfig(value: ConfigTargetSetting) {
    this.targetSettingConfig = value;
    this.onReload();
  }

  public get TargetSettingConfig(): ConfigTargetSetting { return this.targetSettingConfig }

  public onReload(){
    if (ConfigTargetSetting.NotConfirm(this.targetSettingConfig))
      return;
    this.configTargetSettingService
      .ServiceCollection
      .CollectionOfConfigQualitativeObjective(this.targetSettingConfig)
      .then(configQualitativeObjectiveList => {
        this.ConfigQualitativeObjectiveList = configQualitativeObjectiveList;
        this.currentConfigQualitativeObjective = new ConfigQualitativeObjective();
      });
  }

  public onSelect(i: number) {
    this.currentConfigQualitativeObjective = this.ConfigQualitativeObjectiveList[i];
    if (ConfigQualitativeObjective.NotConfirm(this.currentConfigQualitativeObjective))
      this.currentConfigQualitativeObjective = new ConfigQualitativeObjective();
  }

  public onDblClicked(masterUI: ConfigQualitativeObjectiveMasterUI) {
    if (ConfigQualitativeObjective.NotConfirm(this.currentConfigQualitativeObjective))
      return;
    masterUI.ShowDialog(this.currentConfigQualitativeObjective);
  }

  public onAdd(editUI: ConfigQualitativeObjectiveEditUI) {
    editUI.TargetSettingConfig = this.targetSettingConfig;
    editUI.ShowDialog(new ConfigQualitativeObjective());
  }

  public onEdit(editUI: ConfigQualitativeObjectiveEditUI) {
    if (ConfigQualitativeObjective.NotConfirm(this.currentConfigQualitativeObjective))
      return;
    editUI.ShowDialog(this.currentConfigQualitativeObjective);
  }

  public onDelete(deleteUI: ConfigQualitativeObjectiveDeleteUI) {
    if (ConfigQualitativeObjective.NotConfirm(this.currentConfigQualitativeObjective))
      return;
    deleteUI.ShowDialog(this.currentConfigQualitativeObjective);
  }

  public onEditModal_Closed(configQualitativeObjective: ConfigQualitativeObjective) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}