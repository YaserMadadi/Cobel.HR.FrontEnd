import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { ConfigQualitativeObjective } from '../configQualitativeObjective';
import { ConfigQualitativeObjectiveService } from '../configQualitativeObjective.service';

import { ConfigQualitativeKPI } from '../../ConfigQualitativeKPI/configQualitativeKPI';
import { ConfigQualitativeKPIMasterUI } from '../../ConfigQualitativeKPI/master/configQualitativeKPI.master';
import { ConfigQualitativeKPIEditUI } from '../../ConfigQualitativeKPI/edit/configQualitativeKPI.edit';
import { ConfigQualitativeKPIDeleteUI } from '../../ConfigQualitativeKPI/delete/configQualitativeKPI.delete';



@Component({
  selector: 'qualitativeObjectiveConfig-configQualitativeKPI-detail',
  templateUrl: './qualitativeObjectiveConfig-configQualitativeKPI.detail.html',
  styleUrls: ['./qualitativeObjectiveConfig-configQualitativeKPI.detail.css'],
  providers: [ConfigQualitativeObjectiveService]
}) 

@Injectable()
export class QualitativeObjectiveConfig_ConfigQualitativeKPI_DetailUI extends DetailView<ConfigQualitativeObjective> {

  constructor(private configQualitativeObjectiveService: ConfigQualitativeObjectiveService) {
    super(configQualitativeObjectiveService);
  }

  public ConfigQualitativeKPIList : ConfigQualitativeKPI[] = [];
  
  public currentConfigQualitativeKPI : ConfigQualitativeKPI = new ConfigQualitativeKPI();

  private qualitativeObjectiveConfig: ConfigQualitativeObjective = new ConfigQualitativeObjective();

  @Input()
  public set QualitativeObjectiveConfig(value: ConfigQualitativeObjective) {
    this.qualitativeObjectiveConfig = value;
    this.onReload();
  }

  public get QualitativeObjectiveConfig(): ConfigQualitativeObjective { return this.qualitativeObjectiveConfig }

  public onReload(){
    if (ConfigQualitativeObjective.NotConfirm(this.qualitativeObjectiveConfig))
      return;
    this.configQualitativeObjectiveService
      .ServiceCollection
      .CollectionOfConfigQualitativeKPI(this.qualitativeObjectiveConfig)
      .then(configQualitativeKPIList => {
        this.ConfigQualitativeKPIList = configQualitativeKPIList;
        this.currentConfigQualitativeKPI = new ConfigQualitativeKPI();
      });
  }

  public onSelect(i: number) {
    this.currentConfigQualitativeKPI = this.ConfigQualitativeKPIList[i];
    if (ConfigQualitativeKPI.NotConfirm(this.currentConfigQualitativeKPI))
      this.currentConfigQualitativeKPI = new ConfigQualitativeKPI();
  }

  public onDblClicked(masterUI: ConfigQualitativeKPIMasterUI) {
    if (ConfigQualitativeKPI.NotConfirm(this.currentConfigQualitativeKPI))
      return;
    masterUI.ShowDialog(this.currentConfigQualitativeKPI);
  }

  public onAdd(editUI: ConfigQualitativeKPIEditUI) {
    editUI.QualitativeObjectiveConfig = this.qualitativeObjectiveConfig;
    editUI.ShowDialog(new ConfigQualitativeKPI());
  }

  public onEdit(editUI: ConfigQualitativeKPIEditUI) {
    if (ConfigQualitativeKPI.NotConfirm(this.currentConfigQualitativeKPI))
      return;
    editUI.ShowDialog(this.currentConfigQualitativeKPI);
  }

  public onDelete(deleteUI: ConfigQualitativeKPIDeleteUI) {
    if (ConfigQualitativeKPI.NotConfirm(this.currentConfigQualitativeKPI))
      return;
    deleteUI.ShowDialog(this.currentConfigQualitativeKPI);
  }

  public onEditModal_Closed(configQualitativeKPI: ConfigQualitativeKPI) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}