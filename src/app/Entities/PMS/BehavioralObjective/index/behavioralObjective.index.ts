import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { BehavioralObjective } from '../behavioralObjective';
import { BehavioralObjectiveService } from '../behavioralObjective.service';
import { BehavioralObjectiveMasterUI } from '../master/behavioralObjective.master';
import { BehavioralObjectiveEditUI } from '../edit/behavioralObjective.edit';
import { BehavioralObjectiveDeleteUI } from '../delete/behavioralObjective.delete';

import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';
import { CompetencyItem } from '../../CompetencyItem/competencyItem';
import { ExpectedLevel } from '../../../Base.PMS/ExpectedLevel/expectedLevel';



import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { BehavioralKPIEditUI } from '../../BehavioralKPI/edit/behavioralKPI.edit';
import { BehavioralKPI } from '../../BehavioralKPI/behavioralKPI';



@Component({
  selector: 'pms-behavioralObjective-index',
  templateUrl: './behavioralObjective.index.html',
  styleUrls: ['./behavioralObjective.index.css']
})
export class BehavioralObjectiveIndexUI extends IndexView<BehavioralObjective> implements AfterViewInit, IIndexView<BehavioralObjective> {

  constructor(private behavioralObjectiveService: BehavioralObjectiveService) {
    super(behavioralObjectiveService);
    this.filterInstance = BehavioralObjective.SeekInstance();
    this.currentInstance = new BehavioralObjective();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region BehavioralKPI

  public behavioralKPI_Clicked(behavioralKPIEditUI: BehavioralKPIEditUI) {
    behavioralKPIEditUI.BehavioralObjective = this.currentInstance;
    behavioralKPIEditUI.ShowDialog(new BehavioralKPI());
  }
                    
  public behavioralKPIEditUI_Closed(behavioralKPI: BehavioralKPI) {
    if (!behavioralKPI)
      return;
    this.onRefresh();
  }
  
  //#endregion BehavioralKPI


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(behavioralObjectiveEditUI: BehavioralObjectiveEditUI){
    behavioralObjectiveEditUI.ShowDialog(new BehavioralObjective());
  }

  resetFilter() {
    this.filterInstance = BehavioralObjective.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(behavioralObjective: BehavioralObjective) {
    this.onRefresh();
    this.currentInstance = new BehavioralObjective();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}