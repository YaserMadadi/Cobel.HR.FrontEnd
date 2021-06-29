import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Quarter } from '../quarter';
import { QuarterService } from '../quarter.service';
import { QuarterMasterUI } from '../master/quarter.master';
import { QuarterEditUI } from '../edit/quarter.edit';
import { QuarterDeleteUI } from '../delete/quarter.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { YearQuarterEditUI } from '../../YearQuarter/edit/yearQuarter.edit';
import { YearQuarter } from '../../YearQuarter/yearQuarter';



@Component({
  selector: 'base-quarter-index',
  templateUrl: './quarter.index.html',
  styleUrls: ['./quarter.index.css']
})
export class QuarterIndexUI extends IndexView<Quarter> implements AfterViewInit, IIndexView<Quarter> {

  constructor(private quarterService: QuarterService) {
    super(quarterService);
    this.filterInstance = Quarter.SeekInstance();
    this.currentInstance = new Quarter();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region YearQuarter

  public yearQuarter_Clicked(yearQuarterEditUI: YearQuarterEditUI) {
    yearQuarterEditUI.Quarter = this.currentInstance;
    yearQuarterEditUI.ShowDialog(new YearQuarter());
  }
                    
  public yearQuarterEditUI_Closed(yearQuarter: YearQuarter) {
    if (!yearQuarter)
      return;
    this.onRefresh();
  }
  
  //#endregion YearQuarter


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(quarterEditUI: QuarterEditUI){
    quarterEditUI.ShowDialog(new Quarter());
  }

  resetFilter() {
    this.filterInstance = Quarter.SeekInstance();
    
    
  }

  public onEditModalClosed(quarter: Quarter) {
    this.onRefresh();
    this.currentInstance = new Quarter();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}