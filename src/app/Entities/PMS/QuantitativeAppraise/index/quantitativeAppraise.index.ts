import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { QuantitativeAppraise } from '../quantitativeAppraise';
import { QuantitativeAppraiseService } from '../quantitativeAppraise.service';
import { QuantitativeAppraiseMasterUI } from '../master/quantitativeAppraise.master';
import { QuantitativeAppraiseEditUI } from '../edit/quantitativeAppraise.edit';
import { QuantitativeAppraiseDeleteUI } from '../delete/quantitativeAppraise.delete';

import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-quantitativeAppraise-index',
  templateUrl: './quantitativeAppraise.index.html',
  styleUrls: ['./quantitativeAppraise.index.css']
})
export class QuantitativeAppraiseIndexUI extends IndexView<QuantitativeAppraise> implements AfterViewInit, IIndexView<QuantitativeAppraise> {

  constructor(private quantitativeAppraiseService: QuantitativeAppraiseService) {
    super(quantitativeAppraiseService);
    this.filterInstance = QuantitativeAppraise.SeekInstance();
    this.currentInstance = new QuantitativeAppraise();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(quantitativeAppraiseEditUI: QuantitativeAppraiseEditUI){
    quantitativeAppraiseEditUI.ShowDialog(new QuantitativeAppraise());
  }

  resetFilter() {
    this.filterInstance = QuantitativeAppraise.SeekInstance();
    
    
  }

  public onEditModalClosed(quantitativeAppraise: QuantitativeAppraise) {
    this.onRefresh();
    this.currentInstance = new QuantitativeAppraise();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}