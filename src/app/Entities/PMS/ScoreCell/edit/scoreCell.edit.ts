import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { ScoreCell } from '../scoreCell';
import { ScoreCellService } from '../scoreCell.service';



@Component({
  selector: 'pms-scoreCell-edit',
  templateUrl: './scoreCell.edit.html',
  styleUrls: ['./scoreCell.edit.css']
})
export class ScoreCellEditUI extends EditModal<ScoreCell> implements IEditModal<ScoreCell>  {
  
  constructor(private scoreCellService: ScoreCellService) {
    super(scoreCellService); 
    this.currentInstance = new ScoreCell();
  }

  

  @ViewChild('scoreCellEditUI')
  private scoreCellEditUI: NgForm;

  Init(scoreCell: ScoreCell = new ScoreCell()) {
    if (scoreCell.isNew)
      this.scoreCellEditUI.reset();
    this.InitScoreCell(scoreCell);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitScoreCell(scoreCell: ScoreCell){
    this.currentInstance = this.service.CreateInstance();
    if (!scoreCell.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = scoreCell;
  }

  ResetForm() {
    
  }
}