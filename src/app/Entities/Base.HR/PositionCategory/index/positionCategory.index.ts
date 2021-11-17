

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { PositionCategory } from '../positionCategory';
import { PositionCategoryService } from '../positionCategory.service';
import { PositionCategoryMasterUI } from '../master/positionCategory.master';
import { PositionCategoryEditUI } from '../edit/positionCategory.edit';
import { PositionCategoryDeleteUI } from '../delete/positionCategory.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { UnitEditUI } from '../../../HR/Unit/edit/unit.edit';
import { Unit } from '../../../HR/Unit/unit';
import { PositionEditUI } from '../../../HR/Position/edit/position.edit';
import { Position } from '../../../HR/Position/position';



@Component({
  selector: 'base-hr-positionCategory-index',
  templateUrl: './positionCategory.index.html', 
  styleUrls: ['./positionCategory.index.css'] 
})
export class PositionCategoryIndexUI extends IndexView<PositionCategory> implements AfterViewInit, IIndexView<PositionCategory> {

  constructor(private positionCategoryService: PositionCategoryService) {
    super(positionCategoryService);
    this.filterInstance = PositionCategory.SeekInstance();
    this.currentInstance = new PositionCategory();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }


  //#region Position

  public position_Clicked(positionEditUI: PositionEditUI) {
    positionEditUI.PositionCategory = this.currentInstance;
    positionEditUI.ShowDialog(new Position());
  }
                    
  public positionEditUI_Closed(position: Position) {
    if (!position)
      return;
    this.onRefresh();
  }
  
  //#endregion Position


  
  // @ViewChild('Paginator')
  // PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(positionCategoryEditUI: PositionCategoryEditUI){
    positionCategoryEditUI.ShowDialog(new PositionCategory());
  }

  resetFilter() {
    this.filterInstance = PositionCategory.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(positionCategory: PositionCategory) {
    this.onRefresh();
    this.currentInstance = new PositionCategory();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
