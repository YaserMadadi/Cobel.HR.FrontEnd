import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Year } from '../year';
import { YearService } from '../year.service';
import { YearMasterUI } from '../master/year.master';
import { YearEditUI } from '../edit/year.edit';
import { YearDeleteUI } from '../delete/year.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { TargetSettingEditUI } from '../../../PMS/TargetSetting/edit/targetSetting.edit';
import { TargetSetting } from '../../../PMS/TargetSetting/targetSetting';
import { YearQuarterEditUI } from '../../YearQuarter/edit/yearQuarter.edit';
import { YearQuarter } from '../../YearQuarter/yearQuarter';



@Component({
  selector: 'base-year-index',
  templateUrl: './year.index.html',
  styleUrls: ['./year.index.css']
})
export class YearIndexUI extends IndexView<Year> implements AfterViewInit, IIndexView<Year> {

  constructor(private yearService: YearService) {
    super(yearService);
    this.filterInstance = Year.SeekInstance();
    this.currentInstance = new Year();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region TargetSetting

  public targetSetting_Clicked(targetSettingEditUI: TargetSettingEditUI) {
    targetSettingEditUI.Year = this.currentInstance;
    targetSettingEditUI.ShowDialog(new TargetSetting());
  }
                    
  public targetSettingEditUI_Closed(targetSetting: TargetSetting) {
    if (!targetSetting)
      return;
    this.onRefresh();
  }
  
  //#endregion TargetSetting

  //#region YearQuarter

  public yearQuarter_Clicked(yearQuarterEditUI: YearQuarterEditUI) {
    yearQuarterEditUI.Year = this.currentInstance;
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

  public onAdd(yearEditUI: YearEditUI){
    yearEditUI.ShowDialog(new Year());
  }

  resetFilter() {
    this.filterInstance = Year.SeekInstance();
    
    
  }

  public onEditModalClosed(year: Year) {
    this.onRefresh();
    this.currentInstance = new Year();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}