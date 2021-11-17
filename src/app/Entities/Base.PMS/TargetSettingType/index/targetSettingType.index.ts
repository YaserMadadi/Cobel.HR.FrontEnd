

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { TargetSettingType } from '../targetSettingType';
import { TargetSettingTypeService } from '../targetSettingType.service';
import { TargetSettingTypeMasterUI } from '../master/targetSettingType.master';
import { TargetSettingTypeEditUI } from '../edit/targetSettingType.edit';
import { TargetSettingTypeDeleteUI } from '../delete/targetSettingType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { TargetSettingEditUI } from '../../../PMS/TargetSetting/edit/targetSetting.edit';
import { TargetSetting } from '../../../PMS/TargetSetting/targetSetting';



@Component({
  selector: 'base-pms-targetSettingType-index',
  templateUrl: './targetSettingType.index.html',
  styleUrls: ['./targetSettingType.index.css']
})
export class TargetSettingTypeIndexUI extends IndexView<TargetSettingType> implements AfterViewInit, IIndexView<TargetSettingType> {

  constructor(private targetSettingTypeService: TargetSettingTypeService) {
    super(targetSettingTypeService);
    this.filterInstance = TargetSettingType.SeekInstance();
    this.currentInstance = new TargetSettingType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region TargetSetting

  public targetSetting_Clicked(targetSettingEditUI: TargetSettingEditUI) {
    targetSettingEditUI.TargetSettingType = this.currentInstance;
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

  public onAdd(targetSettingTypeEditUI: TargetSettingTypeEditUI){
    targetSettingTypeEditUI.ShowDialog(new TargetSettingType());
  }

  resetFilter() {
    this.filterInstance = TargetSettingType.SeekInstance();
    
    
  }

  public onEditModalClosed(targetSettingType: TargetSettingType) {
    this.onRefresh();
    this.currentInstance = new TargetSettingType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
