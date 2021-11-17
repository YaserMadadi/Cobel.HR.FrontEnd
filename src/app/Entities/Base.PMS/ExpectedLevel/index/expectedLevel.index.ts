import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { ExpectedLevel } from '../expectedLevel';
import { ExpectedLevelService } from '../expectedLevel.service';
import { ExpectedLevelMasterUI } from '../master/expectedLevel.master';
import { ExpectedLevelEditUI } from '../edit/expectedLevel.edit';
import { ExpectedLevelDeleteUI } from '../delete/expectedLevel.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { BehavioralObjectiveEditUI } from '../../../PMS/BehavioralObjective/edit/behavioralObjective.edit';
import { BehavioralObjective } from '../../../PMS/BehavioralObjective/behavioralObjective';



@Component({
  selector: 'base-pms-expectedLevel-index',
  templateUrl: './expectedLevel.index.html',
  styleUrls: ['./expectedLevel.index.css']
})
export class ExpectedLevelIndexUI extends IndexView<ExpectedLevel> implements AfterViewInit, IIndexView<ExpectedLevel> {

  constructor(private expectedLevelService: ExpectedLevelService) {
    super(expectedLevelService);
    this.filterInstance = ExpectedLevel.SeekInstance();
    this.currentInstance = new ExpectedLevel();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region BehavioralObjective

  public behavioralObjective_Clicked(behavioralObjectiveEditUI: BehavioralObjectiveEditUI) {
    behavioralObjectiveEditUI.ExpectedLevel = this.currentInstance;
    behavioralObjectiveEditUI.ShowDialog(new BehavioralObjective());
  }
                    
  public behavioralObjectiveEditUI_Closed(behavioralObjective: BehavioralObjective) {
    if (!behavioralObjective)
      return;
    this.onRefresh();
  }
  
  //#endregion BehavioralObjective


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(expectedLevelEditUI: ExpectedLevelEditUI){
    expectedLevelEditUI.ShowDialog(new ExpectedLevel());
  }

  resetFilter() {
    this.filterInstance = ExpectedLevel.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(expectedLevel: ExpectedLevel) {
    this.onRefresh();
    this.currentInstance = new ExpectedLevel();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}