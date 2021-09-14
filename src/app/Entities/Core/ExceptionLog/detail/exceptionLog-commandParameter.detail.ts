import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { ExceptionLog } from '../exceptionLog';
import { ExceptionLogService } from '../exceptionLog.service';

import { CommandParameter } from '../../CommandParameter/commandParameter';
import { CommandParameterMasterUI } from '../../CommandParameter/master/commandParameter.master';
import { CommandParameterEditUI } from '../../CommandParameter/edit/commandParameter.edit';
import { CommandParameterDeleteUI } from '../../CommandParameter/delete/commandParameter.delete';



@Component({
  selector: 'exceptionLog-commandParameter-detail',
  templateUrl: './exceptionLog-commandParameter.detail.html',
  styleUrls: ['./exceptionLog-commandParameter.detail.css'],
  providers: [ExceptionLogService]
}) 

@Injectable()
export class ExceptionLog_CommandParameter_DetailUI extends DetailView<ExceptionLog> {

  constructor(private exceptionLogService: ExceptionLogService) {
    super(exceptionLogService);
  }

  public CommandParameterList : CommandParameter[] = [];
  
  public currentCommandParameter : CommandParameter = new CommandParameter();

  private exceptionLog: ExceptionLog = new ExceptionLog();

  @Input()
  public set ExceptionLog(value: ExceptionLog) {
    this.exceptionLog = value;
    this.onReload();
  }

  public get ExceptionLog(): ExceptionLog { return this.exceptionLog }

  public onReload(){
    if (ExceptionLog.NotConfirm(this.exceptionLog))
      return;
    this.exceptionLogService
      .ServiceCollection
      .CollectionOfCommandParameter(this.exceptionLog)
      .then(commandParameterList => {
        this.CommandParameterList = commandParameterList;
        this.currentCommandParameter = new CommandParameter();
      });
  }

  public onSelect(i: number) {
    this.currentCommandParameter = this.CommandParameterList[i];
    if (CommandParameter.NotConfirm(this.currentCommandParameter))
      this.currentCommandParameter = new CommandParameter();
  }

  public onDblClicked(masterUI: CommandParameterMasterUI) {
    if (CommandParameter.NotConfirm(this.currentCommandParameter))
      return;
    masterUI.ShowDialog(this.currentCommandParameter);
  }

  public onAdd(editUI: CommandParameterEditUI) {
    editUI.ExceptionLog = this.exceptionLog;
    editUI.ShowDialog(new CommandParameter());
  }

  public onEdit(editUI: CommandParameterEditUI) {
    if (CommandParameter.NotConfirm(this.currentCommandParameter))
      return;
    editUI.ShowDialog(this.currentCommandParameter);
  }

  public onDelete(deleteUI: CommandParameterDeleteUI) {
    if (CommandParameter.NotConfirm(this.currentCommandParameter))
      return;
    deleteUI.ShowDialog(this.currentCommandParameter);
  }

  public onEditModal_Closed(commandParameter: CommandParameter) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
