import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { ScoreCell } from '../scoreCell';
import { ScoreCellService } from '../scoreCell.service';
import { ScoreCellMasterUI } from '../master/scoreCell.master';
import { ScoreCellEditUI } from '../edit/scoreCell.edit';
import { ScoreCellDeleteUI } from '../delete/scoreCell.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { OperationalAppraiseEditUI } from '../../OperationalAppraise/edit/operationalAppraise.edit';
import { OperationalAppraise } from '../../OperationalAppraise/operationalAppraise';
import { NonOperationalAppraiseEditUI } from '../../NonOperationalAppraise/edit/nonOperationalAppraise.edit';
import { NonOperationalAppraise } from '../../NonOperationalAppraise/nonOperationalAppraise';
import { CellActionEditUI } from '../../CellAction/edit/cellAction.edit';
import { CellAction } from '../../CellAction/cellAction';



@Component({
  selector: 'pms-scoreCell-index',
  templateUrl: './scoreCell.index.html',
  styleUrls: ['./scoreCell.index.css']
})
export class ScoreCellIndexUI extends IndexView<ScoreCell> implements AfterViewInit, IIndexView<ScoreCell> {

  constructor(private scoreCellService: ScoreCellService) {
    super(scoreCellService);
    this.filterInstance = ScoreCell.SeekInstance();
    this.currentInstance = new ScoreCell();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region OperationalAppraise

  public operationalAppraise_Clicked(operationalAppraiseEditUI: OperationalAppraiseEditUI) {
    operationalAppraiseEditUI.ScoreCell = this.currentInstance;
    operationalAppraiseEditUI.ShowDialog(new OperationalAppraise());
  }
                    
  public operationalAppraiseEditUI_Closed(operationalAppraise: OperationalAppraise) {
    if (!operationalAppraise)
      return;
    this.onRefresh();
  }
  
  //#endregion OperationalAppraise

  //#region NonOperationalAppraise

  public nonOperationalAppraise_Clicked(nonOperationalAppraiseEditUI: NonOperationalAppraiseEditUI) {
    nonOperationalAppraiseEditUI.ScoreCell = this.currentInstance;
    nonOperationalAppraiseEditUI.ShowDialog(new NonOperationalAppraise());
  }
                    
  public nonOperationalAppraiseEditUI_Closed(nonOperationalAppraise: NonOperationalAppraise) {
    if (!nonOperationalAppraise)
      return;
    this.onRefresh();
  }
  
  //#endregion NonOperationalAppraise

  //#region CellAction

  public cellAction_Clicked(cellActionEditUI: CellActionEditUI) {
    cellActionEditUI.ScoreCell = this.currentInstance;
    cellActionEditUI.ShowDialog(new CellAction());
  }
                    
  public cellActionEditUI_Closed(cellAction: CellAction) {
    if (!cellAction)
      return;
    this.onRefresh();
  }
  
  //#endregion CellAction


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(scoreCellEditUI: ScoreCellEditUI){
    scoreCellEditUI.ShowDialog(new ScoreCell());
  }

  resetFilter() {
    this.filterInstance = ScoreCell.SeekInstance();
    
    
  }

  public onEditModalClosed(scoreCell: ScoreCell) {
    this.onRefresh();
    this.currentInstance = new ScoreCell();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}