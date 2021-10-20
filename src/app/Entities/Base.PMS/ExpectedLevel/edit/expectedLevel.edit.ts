import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { ExpectedLevel } from '../expectedLevel';
import { ExpectedLevelService } from '../expectedLevel.service';



@Component({
  selector: 'base-pms-expectedLevel-edit',
  templateUrl: './expectedLevel.edit.html',
  styleUrls: ['./expectedLevel.edit.css']
})
export class ExpectedLevelEditUI extends EditModal<ExpectedLevel> implements IEditModal<ExpectedLevel>  {
  
  constructor(private expectedLevelService: ExpectedLevelService) {
    super(expectedLevelService); 
    this.currentInstance = new ExpectedLevel();
  }

  

  @ViewChild('expectedLevelEditUI')
  private expectedLevelEditUI: NgForm;

  Init(expectedLevel: ExpectedLevel = new ExpectedLevel()) {
    if (expectedLevel.isNew)
      this.expectedLevelEditUI.reset();
    this.InitExpectedLevel(expectedLevel);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitExpectedLevel(expectedLevel: ExpectedLevel){
    this.currentInstance = this.service.CreateInstance();
    if (!expectedLevel.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = expectedLevel;
  }

  ResetForm() {
    
  }
}