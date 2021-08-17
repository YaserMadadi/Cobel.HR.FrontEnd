import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { ConfigQualitativeObjective } from '../configQualitativeObjective';
import { ConfigQualitativeObjectiveService } from '../configQualitativeObjective.service';
import { ConfigQualitativeObjectiveMasterUI } from '../master/configQualitativeObjective.master';
import { ConfigQualitativeObjectiveEditUI } from '../edit/configQualitativeObjective.edit';
import { ConfigQualitativeObjectiveDeleteUI } from '../delete/configQualitativeObjective.delete';

import { ConfigTargetSetting } from '../../ConfigTargetSetting/configTargetSetting';
import { ConfigTargetSettingEditUI } from '../../ConfigTargetSetting/edit/configTargetSetting.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-configQualitativeObjective-index',
  templateUrl: './configQualitativeObjective.index.html',
  styleUrls: ['./configQualitativeObjective.index.css']
})
export class ConfigQualitativeObjectiveIndexUI extends IndexView<ConfigQualitativeObjective> implements AfterViewInit, IIndexView<ConfigQualitativeObjective> {

  constructor(private configQualitativeObjectiveService: ConfigQualitativeObjectiveService) {
    super(configQualitativeObjectiveService);
    this.filterInstance = ConfigQualitativeObjective.SeekInstance();
    this.currentInstance = new ConfigQualitativeObjective();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(configQualitativeObjectiveEditUI: ConfigQualitativeObjectiveEditUI){
    configQualitativeObjectiveEditUI.ShowDialog(new ConfigQualitativeObjective());
  }

  resetFilter() {
    this.filterInstance = ConfigQualitativeObjective.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(configQualitativeObjective: ConfigQualitativeObjective) {
    this.onRefresh();
    this.currentInstance = new ConfigQualitativeObjective();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}