import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Level } from '../level';
import { LevelService } from '../level.service';



@Component({
  selector: 'hr-level-edit',
  templateUrl: './level.edit.html',
  styleUrls: ['./level.edit.css']
})
export class LevelEditUI extends EditModal<Level> implements IEditModal<Level>  {
  
  constructor(private levelService: LevelService) {
    super(levelService); 
    this.currentInstance = new Level();
  }

  

  @ViewChild('levelEditUI')
  private levelEditUI: NgForm;

  Init(level: Level = new Level()) {
    if (level.isNew)
      this.levelEditUI.reset();
    this.InitLevel(level);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitLevel(level: Level) {
    if (!level.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = level;
  }

  ResetForm() {
    
  }
}