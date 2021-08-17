import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Level } from '../level';
import { LevelService } from '../level.service';
import { LevelMasterUI } from '../master/level.master';
import { LevelEditUI } from '../edit/level.edit';
import { LevelDeleteUI } from '../delete/level.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { PositionEditUI } from '../../Position/edit/position.edit';
import { Position } from '../../Position/position';



@Component({
  selector: 'hr-level-index',
  templateUrl: './level.index.html',
  styleUrls: ['./level.index.css']
})
export class LevelIndexUI extends IndexView<Level> implements AfterViewInit, IIndexView<Level> {

  constructor(private levelService: LevelService) {
    super(levelService);
    this.filterInstance = Level.SeekInstance();
    this.currentInstance = new Level();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region Position

  public position_Clicked(positionEditUI: PositionEditUI) {
    positionEditUI.Level = this.currentInstance;
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

  public onAdd(levelEditUI: LevelEditUI){
    levelEditUI.ShowDialog(new Level());
  }

  resetFilter() {
    this.filterInstance = Level.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(level: Level) {
    this.onRefresh();
    this.currentInstance = new Level();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}