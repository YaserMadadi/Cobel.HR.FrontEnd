import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { ConfigTargetSetting } from '../configTargetSetting';
import { ConfigTargetSettingService } from '../configTargetSetting.service';
import { ConfigTargetSettingMasterUI } from '../master/configTargetSetting.master';
import { ConfigTargetSettingEditUI } from '../edit/configTargetSetting.edit';
import { ConfigTargetSettingDeleteUI } from '../delete/configTargetSetting.delete';

import { Position } from '../../../HR/Position/position';
import { PositionEditUI } from '../../../HR/Position/edit/position.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-configTargetSetting-index',
  templateUrl: './configTargetSetting.index.html',
  styleUrls: ['./configTargetSetting.index.css']
})
export class ConfigTargetSettingIndexUI extends IndexView<ConfigTargetSetting> implements AfterViewInit, IIndexView<ConfigTargetSetting> {

  constructor(private configTargetSettingService: ConfigTargetSettingService) {
    super(configTargetSettingService);
    this.filterInstance = ConfigTargetSetting.SeekInstance();
    this.currentInstance = new ConfigTargetSetting();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(configTargetSettingEditUI: ConfigTargetSettingEditUI){
    configTargetSettingEditUI.ShowDialog(new ConfigTargetSetting());
  }

  resetFilter() {
    this.filterInstance = ConfigTargetSetting.SeekInstance();
    
    
  }

  public onEditModalClosed(configTargetSetting: ConfigTargetSetting) {
    this.onRefresh();
    this.currentInstance = new ConfigTargetSetting();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}