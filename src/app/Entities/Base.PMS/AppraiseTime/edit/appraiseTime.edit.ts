import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { AppraiseTime } from '../appraiseTime';
import { AppraiseTimeService } from '../appraiseTime.service';



@Component({
  selector: 'base-pms-appraiseTime-edit',
  templateUrl: './appraiseTime.edit.html',
  styleUrls: ['./appraiseTime.edit.css']
})
export class AppraiseTimeEditUI extends EditModal<AppraiseTime> implements IEditModal<AppraiseTime>  {
  
  constructor(private appraiseTimeService: AppraiseTimeService) {
    super(appraiseTimeService); 
    this.currentInstance = new AppraiseTime();
  }

  

  @ViewChild('appraiseTimeEditUI')
  private appraiseTimeEditUI: NgForm;

  Init(appraiseTime: AppraiseTime = new AppraiseTime()) {
    if (appraiseTime.isNew)
      this.appraiseTimeEditUI.reset();
    this.InitAppraiseTime(appraiseTime);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitAppraiseTime(appraiseTime: AppraiseTime) {
    if (!appraiseTime.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = appraiseTime;
  }

  ResetForm() {
    
  }
}