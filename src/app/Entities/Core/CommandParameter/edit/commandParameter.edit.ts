

import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { CommandParameter } from '../commandParameter';
import { CommandParameterService } from '../commandParameter.service';
import { ExceptionLog } from '../../ExceptionLog/exceptionLog';
import { ExceptionLogEditUI } from '../../ExceptionLog/edit/exceptionLog.edit';



@Component({
  selector: 'core-commandParameter-edit',
  templateUrl: './commandParameter.edit.html',
  styleUrls: ['./commandParameter.edit.css']
})
export class CommandParameterEditUI extends EditModal<CommandParameter> implements IEditModal<CommandParameter>  {
  
  constructor(private commandParameterService: CommandParameterService) {
    super(commandParameterService); 
    this.currentInstance = new CommandParameter();
  }

  //#region Foreign Entities
	
	//#region -- ExceptionLog --

  exceptionLogComponent : ForeignComponent<ExceptionLog> = new ForeignComponent<ExceptionLog>(this.commandParameterService.ExceptionLogService);

  @Input()
  public set ExceptionLog(value: ExceptionLog) {
    this.currentInstance.exceptionLog = this.exceptionLogComponent.instance = value;
  }  


  //#endregion -- ExceptionLog --
	//#endregion

  @ViewChild('commandParameterEditUI')
  private commandParameterEditUI: NgForm;

  Init(commandParameter: CommandParameter = new CommandParameter()) {
    if (commandParameter.isNew)
      this.commandParameterEditUI.reset();
    this.InitCommandParameter(commandParameter);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitCommandParameter(commandParameter: CommandParameter) {
    this.currentInstance = this.service.CreateInstance();
    if (!commandParameter.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.exceptionLogComponent.instance = commandParameter.exceptionLog;
    } else {
      commandParameter.exceptionLog = this.exceptionLogComponent.instance;
    }
    this.currentInstance = commandParameter;
  }

  async onSave(commandParameter: CommandParameter, editUI: NgForm, isContinue: boolean = false) {
   
    //// Pre Save Action Comes here...
   
    super.onSave(commandParameter, editUI, isContinue);
  }

  ResetForm() {
    this.ExceptionLog = new ExceptionLog();
  }
}
