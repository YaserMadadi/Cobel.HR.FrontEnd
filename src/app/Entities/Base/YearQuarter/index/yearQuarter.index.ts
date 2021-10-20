import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { YearQuarter } from '../yearQuarter';
import { YearQuarterService } from '../yearQuarter.service';
import { YearQuarterMasterUI } from '../master/yearQuarter.master';
import { YearQuarterEditUI } from '../edit/yearQuarter.edit';
import { YearQuarterDeleteUI } from '../delete/yearQuarter.delete';

import { Year } from '../../Year/year';
import { YearEditUI } from '../../Year/edit/year.edit';
import { Quarter } from '../../Quarter/quarter';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'base-yearQuarter-index',
  templateUrl: './yearQuarter.index.html',
  styleUrls: ['./yearQuarter.index.css']
})
export class YearQuarterIndexUI extends IndexView<YearQuarter> implements AfterViewInit, IIndexView<YearQuarter> {

  constructor(private yearQuarterService: YearQuarterService) {
    super(yearQuarterService);
    this.filterInstance = YearQuarter.SeekInstance();
    this.currentInstance = new YearQuarter();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(yearQuarterEditUI: YearQuarterEditUI){
    yearQuarterEditUI.ShowDialog(new YearQuarter());
  }

  resetFilter() {
    this.filterInstance = YearQuarter.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(yearQuarter: YearQuarter) {
    this.onRefresh();
    this.currentInstance = new YearQuarter();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}