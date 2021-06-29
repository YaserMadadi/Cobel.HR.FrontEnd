import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { CellAction } from '../cellAction';
import { CellActionService } from '../cellAction.service';
import { CellActionMasterUI } from '../master/cellAction.master';
import { CellActionEditUI } from '../edit/cellAction.edit';
import { CellActionDeleteUI } from '../delete/cellAction.delete';

import { ScoreCell } from '../../ScoreCell/scoreCell';
import { ScoreCellEditUI } from '../../ScoreCell/edit/scoreCell.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-cellAction-index',
  templateUrl: './cellAction.index.html',
  styleUrls: ['./cellAction.index.css']
})
export class CellActionIndexUI extends IndexView<CellAction> implements AfterViewInit, IIndexView<CellAction> {

  constructor(private cellActionService: CellActionService) {
    super(cellActionService);
    this.filterInstance = CellAction.SeekInstance();
    this.currentInstance = new CellAction();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(cellActionEditUI: CellActionEditUI){
    cellActionEditUI.ShowDialog(new CellAction());
  }

  resetFilter() {
    this.filterInstance = CellAction.SeekInstance();
    
    
  }

  public onEditModalClosed(cellAction: CellAction) {
    this.onRefresh();
    this.currentInstance = new CellAction();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}