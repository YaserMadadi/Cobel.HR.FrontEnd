import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { QualitativeKPI } from '../qualitativeKPI';
import { QualitativeKPIService } from '../qualitativeKPI.service';
import { QualitativeKPIMasterUI } from '../master/qualitativeKPI.master';
import { QualitativeKPIEditUI } from '../edit/qualitativeKPI.edit';
import { QualitativeKPIDeleteUI } from '../delete/qualitativeKPI.delete';

import { QualitativeObjective } from '../../QualitativeObjective/qualitativeObjective';
import { QualitativeObjectiveEditUI } from '../../QualitativeObjective/edit/qualitativeObjective.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { QualitativeAppraiseEditUI } from '../../QualitativeAppraise/edit/qualitativeAppraise.edit';
import { QualitativeAppraise } from '../../QualitativeAppraise/qualitativeAppraise';



@Component({
  selector: 'pms-qualitativeKPI-index',
  templateUrl: './qualitativeKPI.index.html',
  styleUrls: ['./qualitativeKPI.index.css']
})
export class QualitativeKPIIndexUI extends IndexView<QualitativeKPI> implements AfterViewInit, IIndexView<QualitativeKPI> {

  constructor(private qualitativeKPIService: QualitativeKPIService) {
    super(qualitativeKPIService);
    this.filterInstance = QualitativeKPI.SeekInstance();
    this.currentInstance = new QualitativeKPI();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region QualitativeAppraise

  public qualitativeAppraise_Clicked(qualitativeAppraiseEditUI: QualitativeAppraiseEditUI) {
    qualitativeAppraiseEditUI.QualitativeKPI = this.currentInstance;
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

  public onAdd(qualitativeKPIEditUI: QualitativeKPIEditUI){
    qualitativeKPIEditUI.ShowDialog(new QualitativeKPI());
  }

  resetFilter() {
    this.filterInstance = QualitativeKPI.SeekInstance();
    
    
  }

  public onEditModalClosed(qualitativeKPI: QualitativeKPI) {
    this.onRefresh();
    this.currentInstance = new QualitativeKPI();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}