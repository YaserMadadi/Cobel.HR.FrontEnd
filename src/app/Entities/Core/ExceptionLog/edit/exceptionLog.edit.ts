

import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { ExceptionLog } from '../exceptionLog';
import { ExceptionLogService } from '../exceptionLog.service';



@Component({
  selector: 'core-exceptionLog-edit',
  templateUrl: './exceptionLog.edit.html',
  styleUrls: ['./exceptionLog.edit.css']
})
export class ExceptionLogEditUI extends EditModal<ExceptionLog> implements IEditModal<ExceptionLog>  {
  
  constructor(private exceptionLogService: ExceptionLogService) {
    super(exceptionLogService); 
    this.currentInstance = new ExceptionLog();
  }

  

  @ViewChild('exceptionLogEditUI')
  private exceptionLogEditUI: NgForm;

  Init(exceptionLog: ExceptionLog = new ExceptionLog()) {
    if (exceptionLog.isNew)
      this.exceptionLogEditUI.reset();
    this.InitExceptionLog(exceptionLog);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitExceptionLog(exceptionLog: ExceptionLog) {
    this.currentInstance = this.service.CreateInstance();
    if (!exceptionLog.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = exceptionLog;
  }

  async onSave(exceptionLog: ExceptionLog, editUI: NgForm, isContinue: boolean = false) {
   
    //// Pre Save Action Comes here...
   
    super.onSave(exceptionLog, editUI, isContinue);
  }

  ResetForm() {
    
  }
}
