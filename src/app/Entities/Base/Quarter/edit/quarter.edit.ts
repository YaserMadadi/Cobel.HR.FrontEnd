import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Quarter } from '../quarter';
import { QuarterService } from '../quarter.service';



@Component({
  selector: 'base-quarter-edit',
  templateUrl: './quarter.edit.html',
  styleUrls: ['./quarter.edit.css']
})
export class QuarterEditUI extends EditModal<Quarter> implements IEditModal<Quarter>  {
  
  constructor(private quarterService: QuarterService) {
    super(quarterService); 
    this.currentInstance = new Quarter();
  }

  

  @ViewChild('quarterEditUI')
  private quarterEditUI: NgForm;

  Init(quarter: Quarter = new Quarter()) {
    if (quarter.isNew)
      this.quarterEditUI.reset();
    this.InitQuarter(quarter);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitQuarter(quarter: Quarter) {
    if (!quarter.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = quarter;
  }

  ResetForm() {
    
  }
}