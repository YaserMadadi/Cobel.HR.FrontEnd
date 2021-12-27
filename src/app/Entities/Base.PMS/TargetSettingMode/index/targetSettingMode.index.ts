

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { TargetSettingMode } from '../targetSettingMode';
import { TargetSettingModeService } from '../targetSettingMode.service';
import { TargetSettingModeMasterUI } from '../master/targetSettingMode.master';
import { TargetSettingModeEditUI } from '../edit/targetSettingMode.edit';
import { TargetSettingModeDeleteUI } from '../delete/targetSettingMode.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { TargetSettingEditUI } from '../../../PMS/TargetSetting/edit/targetSetting.edit';
import { TargetSetting } from '../../../PMS/TargetSetting/targetSetting';



@Component({
  selector: 'base-pms-targetSettingMode-index',
  templateUrl: './targetSettingMode.index.html',
  styleUrls: ['./targetSettingMode.index.css']
})
export class TargetSettingModeIndexUI extends IndexView<TargetSettingMode> implements AfterViewInit, IIndexView<TargetSettingMode> {

  constructor(private targetSettingModeService: TargetSettingModeService) {
    super(targetSettingModeService);
    this.filterInstance = TargetSettingMode.SeekInstance();
    this.currentInstance = new TargetSettingMode();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region TargetSetting

  public targetSetting_Clicked(targetSettingEditUI: TargetSettingEditUI) {
    targetSettingEditUI.TargetSettingMode = this.currentInstance;
    targetSettingEditUI.ShowDialog(new TargetSetting());
  }
                    
  public targetSettingEditUI_Closed(targetSetting: TargetSetting) {
    if (!targetSetting)
      return;
    this.onRefresh();
  }
  
  //#endregion TargetSetting


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(targetSettingModeEditUI: TargetSettingModeEditUI){
    targetSettingModeEditUI.ShowDialog(new TargetSettingMode());
  }

  resetFilter() {
    this.filterInstance = TargetSettingMode.SeekInstance();
    
    
  }

  public onEditModalClosed(targetSettingMode: TargetSettingMode) {
    this.onRefresh();
    this.currentInstance = new TargetSettingMode();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
