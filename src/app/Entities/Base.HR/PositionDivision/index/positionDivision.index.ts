

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { PositionDivision } from '../positionDivision';
import { PositionDivisionService } from '../positionDivision.service';
import { PositionDivisionMasterUI } from '../master/positionDivision.master';
import { PositionDivisionEditUI } from '../edit/positionDivision.edit';
import { PositionDivisionDeleteUI } from '../delete/positionDivision.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { PositionEditUI } from '../../../HR/Position/edit/position.edit';
import { Position } from '../../../HR/Position/position';



@Component({
  selector: 'base.hr-positionDivision-index',
  templateUrl: './positionDivision.index.html',
  styleUrls: ['./positionDivision.index.css']
})
export class PositionDivisionIndexUI extends IndexView<PositionDivision> implements AfterViewInit, IIndexView<PositionDivision> {

  constructor(private positionDivisionService: PositionDivisionService) {
    super(positionDivisionService);
    this.filterInstance = PositionDivision.SeekInstance();
    this.currentInstance = new PositionDivision();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region Position

  public position_Clicked(positionEditUI: PositionEditUI) {
    // positionEditUI.PositionDivision = this.currentInstance;
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

  public onAdd(positionDivisionEditUI: PositionDivisionEditUI){
    positionDivisionEditUI.ShowDialog(new PositionDivision());
  }

  resetFilter() {
    this.filterInstance = PositionDivision.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(positionDivision: PositionDivision) {
    this.onRefresh();
    this.currentInstance = new PositionDivision();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
