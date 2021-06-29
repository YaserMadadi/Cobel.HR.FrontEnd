import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { CellAction } from '../cellAction';
import { CellActionService } from '../cellAction.service';
import { ScoreCell } from '../../ScoreCell/scoreCell';
import { ScoreCellEditUI } from '../../ScoreCell/edit/scoreCell.edit';



@Component({
  selector: 'pms-cellAction-edit',
  templateUrl: './cellAction.edit.html',
  styleUrls: ['./cellAction.edit.css']
})
export class CellActionEditUI extends EditModal<CellAction> implements IEditModal<CellAction>  {
  
  constructor(private cellActionService: CellActionService) {
    super(cellActionService); 
    this.currentInstance = new CellAction();
  }

  //#region Foreign Entities
	
	//#region -- ScoreCell --

  scoreCellComponent : ForeignComponent<ScoreCell> = new ForeignComponent<ScoreCell>(this.cellActionService.ScoreCellService);

  @Input()
  public set ScoreCell(value: ScoreCell) {
    this.currentInstance.scoreCell = this.scoreCellComponent.instance = value;
  }  


  //#endregion -- ScoreCell --
	//#endregion

  @ViewChild('cellActionEditUI')
  private cellActionEditUI: NgForm;

  Init(cellAction: CellAction = new CellAction()) {
    if (cellAction.isNew)
      this.cellActionEditUI.reset();
    this.InitCellAction(cellAction);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitCellAction(cellAction: CellAction) {
    if (!cellAction.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.scoreCellComponent.instance = cellAction.scoreCell;
    } else {
      cellAction.scoreCell = this.scoreCellComponent.instance;
    }
    this.currentInstance = cellAction;
  }

  ResetForm() {
    this.ScoreCell = new ScoreCell();
  }
}