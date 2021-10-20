import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { FinalAppraise } from '../finalAppraise';
import { FinalAppraiseService } from '../finalAppraise.service';
import { FinalAppraiseMasterUI } from '../master/finalAppraise.master';
import { FinalAppraiseEditUI } from '../edit/finalAppraise.edit';
import { FinalAppraiseDeleteUI } from '../delete/finalAppraise.delete';

import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-finalAppraise-index',
  templateUrl: './finalAppraise.index.html',
  styleUrls: ['./finalAppraise.index.css']
})
export class FinalAppraiseIndexUI extends IndexView<FinalAppraise> implements AfterViewInit, IIndexView<FinalAppraise> {

  constructor(private finalAppraiseService: FinalAppraiseService) {
    super(finalAppraiseService);
    this.filterInstance = FinalAppraise.SeekInstance();
    this.currentInstance = new FinalAppraise();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(finalAppraiseEditUI: FinalAppraiseEditUI){
    finalAppraiseEditUI.ShowDialog(new FinalAppraise());
  }

  resetFilter() {
    this.filterInstance = FinalAppraise.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(finalAppraise: FinalAppraise) {
    this.onRefresh();
    this.currentInstance = new FinalAppraise();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}