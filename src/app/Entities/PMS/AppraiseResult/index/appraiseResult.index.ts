import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { AppraiseResult } from '../appraiseResult';
import { AppraiseResultService } from '../appraiseResult.service';
import { AppraiseResultMasterUI } from '../master/appraiseResult.master';
import { AppraiseResultEditUI } from '../edit/appraiseResult.edit';
import { AppraiseResultDeleteUI } from '../delete/appraiseResult.delete';

import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';
import { AppraiseType } from '../../../Base.PMS/AppraiseType/appraiseType';
import { AppraiseTime } from '../../../Base.PMS/AppraiseTime/appraiseTime';



import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-appraiseResult-index',
  templateUrl: './appraiseResult.index.html',
  styleUrls: ['./appraiseResult.index.css']
})
export class AppraiseResultIndexUI extends IndexView<AppraiseResult> implements AfterViewInit, IIndexView<AppraiseResult> {

  constructor(private appraiseResultService: AppraiseResultService) {
    super(appraiseResultService);
    this.filterInstance = AppraiseResult.SeekInstance();
    this.currentInstance = new AppraiseResult();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(appraiseResultEditUI: AppraiseResultEditUI){
    appraiseResultEditUI.ShowDialog(new AppraiseResult());
  }

  resetFilter() {
    this.filterInstance = AppraiseResult.SeekInstance();
    
    
  }

  public onEditModalClosed(appraiseResult: AppraiseResult) {
    this.onRefresh();
    this.currentInstance = new AppraiseResult();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}