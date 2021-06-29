import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Unit } from '../unit';
import { UnitService } from '../unit.service';
import { UnitMasterUI } from '../master/unit.master';
import { UnitEditUI } from '../edit/unit.edit';
import { UnitDeleteUI } from '../delete/unit.delete';

import { Department } from '../../Department/department';
import { PositionCategory } from '../../PositionCategory/positionCategory';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { PositionEditUI } from '../../Position/edit/position.edit';
import { Position } from '../../Position/position';



@Component({
  selector: 'hr-unit-index',
  templateUrl: './unit.index.html',
  styleUrls: ['./unit.index.css']
})
export class UnitIndexUI extends IndexView<Unit> implements AfterViewInit, IIndexView<Unit> {

  constructor(private unitService: UnitService) {
    super(unitService);
    this.filterInstance = Unit.SeekInstance();
    this.currentInstance = new Unit();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region Position

  public position_Clicked(positionEditUI: PositionEditUI) {
    positionEditUI.Unit = this.currentInstance;
    positionEditUI.ShowDialog(new Position());
  }
                    
  public positionEditUI_Closed(position: Position) {
    if (!position)
      return;
    this.onRefresh();
  }
  
  //#endregion Position


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(unitEditUI: UnitEditUI){
    unitEditUI.ShowDialog(new Unit());
  }

  resetFilter() {
    this.filterInstance = Unit.SeekInstance();
    
    
  }

  public onEditModalClosed(unit: Unit) {
    this.onRefresh();
    this.currentInstance = new Unit();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}