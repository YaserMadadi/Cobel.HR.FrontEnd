

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { TargetSettingPhase } from '../targetSettingPhase';
import { TargetSettingPhaseService } from '../targetSettingPhase.service';
import { TargetSettingPhaseMasterUI } from '../master/targetSettingPhase.master';
import { TargetSettingPhaseEditUI } from '../edit/targetSettingPhase.edit';
import { TargetSettingPhaseDeleteUI } from '../delete/targetSettingPhase.delete';

import { Year } from '../../../Base/Year/year';
import { YearEditUI } from '../../../Base/Year/edit/year.edit';
import { TargetSettingType } from '../../../Base.PMS/TargetSettingType/targetSettingType';
import { TargetSettingMode } from '../../../Base.PMS/TargetSettingMode/targetSettingMode';



import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-targetSettingPhase-index',
  templateUrl: './targetSettingPhase.index.html',
  styleUrls: ['./targetSettingPhase.index.css']
})
export class TargetSettingPhaseIndexUI extends IndexView<TargetSettingPhase> implements AfterViewInit, IIndexView<TargetSettingPhase> {

  constructor(private targetSettingPhaseService: TargetSettingPhaseService) {
    super(targetSettingPhaseService);
    this.filterInstance = TargetSettingPhase.SeekInstance();
    this.currentInstance = new TargetSettingPhase();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(targetSettingPhaseEditUI: TargetSettingPhaseEditUI){
    targetSettingPhaseEditUI.ShowDialog(new TargetSettingPhase());
  }

  resetFilter() {
    this.filterInstance = TargetSettingPhase.SeekInstance();
    super.resetFilter();
    
    
  }

  public onEditModalClosed(targetSettingPhase: TargetSettingPhase) {
    this.onRefresh();
    this.currentInstance = new TargetSettingPhase();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
