import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { AppraiseTime } from '../appraiseTime';
import { AppraiseTimeService } from '../appraiseTime.service';
import { AppraiseTimeMasterUI } from '../master/appraiseTime.master';
import { AppraiseTimeEditUI } from '../edit/appraiseTime.edit';
import { AppraiseTimeDeleteUI } from '../delete/appraiseTime.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { BehavioralAppraiseEditUI } from '../../../PMS/BehavioralAppraise/edit/behavioralAppraise.edit';
import { BehavioralAppraise } from '../../../PMS/BehavioralAppraise/behavioralAppraise';
import { FunctionalAppraiseEditUI } from '../../../PMS/FunctionalAppraise/edit/functionalAppraise.edit';
import { FunctionalAppraise } from '../../../PMS/FunctionalAppraise/functionalAppraise';
import { QualitativeAppraiseEditUI } from '../../../PMS/QualitativeAppraise/edit/qualitativeAppraise.edit';
import { QualitativeAppraise } from '../../../PMS/QualitativeAppraise/qualitativeAppraise';



@Component({
  selector: 'base.pms-appraiseTime-index',
  templateUrl: './appraiseTime.index.html',
  styleUrls: ['./appraiseTime.index.css']
})
export class AppraiseTimeIndexUI extends IndexView<AppraiseTime> implements AfterViewInit, IIndexView<AppraiseTime> {

  constructor(private appraiseTimeService: AppraiseTimeService) {
    super(appraiseTimeService);
    this.filterInstance = AppraiseTime.SeekInstance();
    this.currentInstance = new AppraiseTime();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region BehavioralAppraise

  public behavioralAppraise_Clicked(behavioralAppraiseEditUI: BehavioralAppraiseEditUI) {
    behavioralAppraiseEditUI.AppraiseTime = this.currentInstance;
    behavioralAppraiseEditUI.ShowDialog(new BehavioralAppraise());
  }
                    
  public behavioralAppraiseEditUI_Closed(behavioralAppraise: BehavioralAppraise) {
    if (!behavioralAppraise)
      return;
    this.onRefresh();
  }
  
  //#endregion BehavioralAppraise

  //#region FunctionalAppraise

  public functionalAppraise_Clicked(functionalAppraiseEditUI: FunctionalAppraiseEditUI) {
    functionalAppraiseEditUI.AppraiseTime = this.currentInstance;
    functionalAppraiseEditUI.ShowDialog(new FunctionalAppraise());
  }
                    
  public functionalAppraiseEditUI_Closed(functionalAppraise: FunctionalAppraise) {
    if (!functionalAppraise)
      return;
    this.onRefresh();
  }
  
  //#endregion FunctionalAppraise

  //#region QualitativeAppraise

  public qualitativeAppraise_Clicked(qualitativeAppraiseEditUI: QualitativeAppraiseEditUI) {
    qualitativeAppraiseEditUI.AppraiseTime = this.currentInstance;
    qualitativeAppraiseEditUI.ShowDialog(new QualitativeAppraise());
  }
                    
  public qualitativeAppraiseEditUI_Closed(qualitativeAppraise: QualitativeAppraise) {
    if (!qualitativeAppraise)
      return;
    this.onRefresh();
  }
  
  //#endregion QualitativeAppraise


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(appraiseTimeEditUI: AppraiseTimeEditUI){
    appraiseTimeEditUI.ShowDialog(new AppraiseTime());
  }

  resetFilter() {
    this.filterInstance = AppraiseTime.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(appraiseTime: AppraiseTime) {
    this.onRefresh();
    this.currentInstance = new AppraiseTime();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}