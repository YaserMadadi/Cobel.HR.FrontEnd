import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Position } from '../position';
import { PositionService } from '../position.service';
import { PositionMasterUI } from '../master/position.master';
import { PositionEditUI } from '../edit/position.edit';
import { PositionDeleteUI } from '../delete/position.delete';

import { Level } from '../../Level/level';
import { Unit } from '../../Unit/unit';
import { UnitEditUI } from '../../Unit/edit/unit.edit';




import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { ConfigTargetSettingEditUI } from '../../../PMS/ConfigTargetSetting/edit/configTargetSetting.edit';
import { ConfigTargetSetting } from '../../../PMS/ConfigTargetSetting/configTargetSetting';
import { TargetSettingEditUI } from '../../../PMS/TargetSetting/edit/targetSetting.edit';
import { TargetSetting } from '../../../PMS/TargetSetting/targetSetting';
import { PositionAssignmentEditUI } from '../../PositionAssignment/edit/positionAssignment.edit';
import { PositionAssignment } from '../../PositionAssignment/positionAssignment';



@Component({
  selector: 'hr-position-index',
  templateUrl: './position.index.html',
  styleUrls: ['./position.index.css']
})
export class PositionIndexUI extends IndexView<Position> implements AfterViewInit, IIndexView<Position> {

  constructor(private positionService: PositionService) {
    super(positionService);
    this.filterInstance = Position.SeekInstance();
    this.currentInstance = new Position();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  


  //#region ConfigTargetSetting

  public configTargetSetting_Clicked(configTargetSettingEditUI: ConfigTargetSettingEditUI) {
   // configTargetSettingEditUI.positionCategory = this.currentInstance;
    configTargetSettingEditUI.ShowDialog(new ConfigTargetSetting());
  }
                    
  public configTargetSettingEditUI_Closed(configTargetSetting: ConfigTargetSetting) {
    if (!configTargetSetting)
      return;
    this.onRefresh();
  }
  
  //#endregion ConfigTargetSetting

  //#region TargetSetting

  public targetSetting_Clicked(targetSettingEditUI: TargetSettingEditUI) {
    targetSettingEditUI.Position = this.currentInstance;
    targetSettingEditUI.ShowDialog(new TargetSetting());
  }
                    
  public targetSettingEditUI_Closed(targetSetting: TargetSetting) {
    if (!targetSetting)
      return;
    this.onRefresh();
  }
  
  //#endregion TargetSetting

  //#region PositionAssignment

  public positionAssignment_Clicked(positionAssignmentEditUI: PositionAssignmentEditUI) {
    positionAssignmentEditUI.Position = this.currentInstance;
    positionAssignmentEditUI.ShowDialog(new PositionAssignment());
  }
                    
  public positionAssignmentEditUI_Closed(positionAssignment: PositionAssignment) {
    if (!positionAssignment)
      return;
    this.onRefresh();
  }
  
  //#endregion PositionAssignment




  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(positionEditUI: PositionEditUI){
    positionEditUI.ShowDialog(new Position());
  }

  resetFilter() {
    this.filterInstance = Position.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(position: Position) {
    this.onRefresh();
    this.currentInstance = new Position();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}