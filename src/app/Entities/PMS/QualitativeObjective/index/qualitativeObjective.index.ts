import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { QualitativeObjective } from '../qualitativeObjective';
import { QualitativeObjectiveService } from '../qualitativeObjective.service';
import { QualitativeObjectiveMasterUI } from '../master/qualitativeObjective.master';
import { QualitativeObjectiveEditUI } from '../edit/qualitativeObjective.edit';
import { QualitativeObjectiveDeleteUI } from '../delete/qualitativeObjective.delete';

import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { QualitativeKPIEditUI } from '../../QualitativeKPI/edit/qualitativeKPI.edit';
import { QualitativeKPI } from '../../QualitativeKPI/qualitativeKPI';



@Component({
  selector: 'pms-qualitativeObjective-index',
  templateUrl: './qualitativeObjective.index.html',
  styleUrls: ['./qualitativeObjective.index.css']
})
export class QualitativeObjectiveIndexUI extends IndexView<QualitativeObjective> implements AfterViewInit, IIndexView<QualitativeObjective> {

  constructor(private qualitativeObjectiveService: QualitativeObjectiveService) {
    super(qualitativeObjectiveService);
    this.filterInstance = QualitativeObjective.SeekInstance();
    this.currentInstance = new QualitativeObjective();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region QualitativeKPI

  public qualitativeKPI_Clicked(qualitativeKPIEditUI: QualitativeKPIEditUI) {
    qualitativeKPIEditUI.QualitativeObjective = this.currentInstance;
    qualitativeKPIEditUI.ShowDialog(new QualitativeKPI());
  }
                    
  public qualitativeKPIEditUI_Closed(qualitativeKPI: QualitativeKPI) {
    if (!qualitativeKPI)
      return;
    this.onRefresh();
  }
  
  //#endregion QualitativeKPI


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(qualitativeObjectiveEditUI: QualitativeObjectiveEditUI){
    qualitativeObjectiveEditUI.ShowDialog(new QualitativeObjective());
  }

  resetFilter() {
    this.filterInstance = QualitativeObjective.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(qualitativeObjective: QualitativeObjective) {
    this.onRefresh();
    this.currentInstance = new QualitativeObjective();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}