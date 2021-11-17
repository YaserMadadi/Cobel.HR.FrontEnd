import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { AppraiseType } from '../appraiseType';
import { AppraiseTypeService } from '../appraiseType.service';
import { AppraiseTypeMasterUI } from '../master/appraiseType.master';
import { AppraiseTypeEditUI } from '../edit/appraiseType.edit';
import { AppraiseTypeDeleteUI } from '../delete/appraiseType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { BehavioralAppraiseEditUI } from '../../../PMS/BehavioralAppraise/edit/behavioralAppraise.edit';
import { BehavioralAppraise } from '../../../PMS/BehavioralAppraise/behavioralAppraise';
import { FunctionalAppraiseEditUI } from '../../../PMS/FunctionalAppraise/edit/functionalAppraise.edit';
import { FunctionalAppraise } from '../../../PMS/FunctionalAppraise/functionalAppraise';
import { QualitativeAppraiseEditUI } from '../../../PMS/QualitativeAppraise/edit/qualitativeAppraise.edit';
import { QualitativeAppraise } from '../../../PMS/QualitativeAppraise/qualitativeAppraise';



@Component({
  selector: 'base-pms-appraiseType-index',
  templateUrl: './appraiseType.index.html',
  styleUrls: ['./appraiseType.index.css']
})
export class AppraiseTypeIndexUI extends IndexView<AppraiseType> implements AfterViewInit, IIndexView<AppraiseType> {

  constructor(private appraiseTypeService: AppraiseTypeService) {
    super(appraiseTypeService);
    this.filterInstance = AppraiseType.SeekInstance();
    this.currentInstance = new AppraiseType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region BehavioralAppraise

  public behavioralAppraise_Clicked(behavioralAppraiseEditUI: BehavioralAppraiseEditUI) {
    behavioralAppraiseEditUI.AppraiseType = this.currentInstance;
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
    functionalAppraiseEditUI.AppraiseType = this.currentInstance;
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
    qualitativeAppraiseEditUI.AppraiseType = this.currentInstance;
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

  public onAdd(appraiseTypeEditUI: AppraiseTypeEditUI){
    appraiseTypeEditUI.ShowDialog(new AppraiseType());
  }

  resetFilter() {
    this.filterInstance = AppraiseType.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(appraiseType: AppraiseType) {
    this.onRefresh();
    this.currentInstance = new AppraiseType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}