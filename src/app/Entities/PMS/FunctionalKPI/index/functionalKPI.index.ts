import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { FunctionalKPI } from '../functionalKPI';
import { FunctionalKPIService } from '../functionalKPI.service';
import { FunctionalKPIMasterUI } from '../master/functionalKPI.master';
import { FunctionalKPIEditUI } from '../edit/functionalKPI.edit';
import { FunctionalKPIDeleteUI } from '../delete/functionalKPI.delete';

import { FunctionalObjective } from '../../FunctionalObjective/functionalObjective';
import { FunctionalObjectiveEditUI } from '../../FunctionalObjective/edit/functionalObjective.edit';
import { MeasurementUnit } from '../../../Base.PMS/MeasurementUnit/measurementUnit';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { FunctionalKPICommentEditUI } from '../../FunctionalKPIComment/edit/functionalKPIComment.edit';
import { FunctionalKPIComment } from '../../FunctionalKPIComment/functionalKPIComment';
import { FunctionalAppraiseEditUI } from '../../FunctionalAppraise/edit/functionalAppraise.edit';
import { FunctionalAppraise } from '../../FunctionalAppraise/functionalAppraise';



@Component({
  selector: 'pms-functionalKPI-index',
  templateUrl: './functionalKPI.index.html',
  styleUrls: ['./functionalKPI.index.css']
})
export class FunctionalKPIIndexUI extends IndexView<FunctionalKPI> implements AfterViewInit, IIndexView<FunctionalKPI> {

  constructor(private functionalKPIService: FunctionalKPIService) {
    super(functionalKPIService);
    this.filterInstance = FunctionalKPI.SeekInstance();
    this.currentInstance = new FunctionalKPI();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region FunctionalKPIComment

  public functionalKPIComment_Clicked(functionalKPICommentEditUI: FunctionalKPICommentEditUI) {
    functionalKPICommentEditUI.FunctionalKPI = this.currentInstance;
    functionalKPICommentEditUI.ShowDialog(new FunctionalKPIComment());
  }
                    
  public functionalKPICommentEditUI_Closed(functionalKPIComment: FunctionalKPIComment) {
    if (!functionalKPIComment)
      return;
    this.onRefresh();
  }
  
  //#endregion FunctionalKPIComment

  //#region FunctionalAppraise

  public functionalAppraise_Clicked(functionalAppraiseEditUI: FunctionalAppraiseEditUI) {
    functionalAppraiseEditUI.FunctionalKPI = this.currentInstance;
    functionalAppraiseEditUI.ShowDialog(new FunctionalAppraise());
  }
                    
  public functionalAppraiseEditUI_Closed(functionalAppraise: FunctionalAppraise) {
    if (!functionalAppraise)
      return;
    this.onRefresh();
  }
  
  //#endregion FunctionalAppraise


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(functionalKPIEditUI: FunctionalKPIEditUI){
    functionalKPIEditUI.ShowDialog(new FunctionalKPI());
  }

  resetFilter() {
    this.filterInstance = FunctionalKPI.SeekInstance();
    
    
  }

  public onEditModalClosed(functionalKPI: FunctionalKPI) {
    this.onRefresh();
    this.currentInstance = new FunctionalKPI();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}