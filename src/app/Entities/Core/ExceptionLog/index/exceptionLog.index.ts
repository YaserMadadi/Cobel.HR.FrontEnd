

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { ExceptionLog } from '../exceptionLog';
import { ExceptionLogService } from '../exceptionLog.service';
import { ExceptionLogMasterUI } from '../master/exceptionLog.master';
import { ExceptionLogEditUI } from '../edit/exceptionLog.edit';
import { ExceptionLogDeleteUI } from '../delete/exceptionLog.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { CommandParameterEditUI } from '../../CommandParameter/edit/commandParameter.edit';
import { CommandParameter } from '../../CommandParameter/commandParameter';



@Component({
  selector: 'core-exceptionLog-index',
  templateUrl: './exceptionLog.index.html',
  styleUrls: ['./exceptionLog.index.css']
})
export class ExceptionLogIndexUI extends IndexView<ExceptionLog> implements AfterViewInit, IIndexView<ExceptionLog> {

  constructor(private exceptionLogService: ExceptionLogService) {
    super(exceptionLogService);
    this.filterInstance = ExceptionLog.SeekInstance();
    this.currentInstance = new ExceptionLog();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region CommandParameter

  public commandParameter_Clicked(commandParameterEditUI: CommandParameterEditUI) {
    commandParameterEditUI.ExceptionLog = this.currentInstance;
    commandParameterEditUI.ShowDialog(new CommandParameter());
  }
                    
  public commandParameterEditUI_Closed(commandParameter: CommandParameter) {
    if (!commandParameter)
      return;
    this.onRefresh();
  }
  
  //#endregion CommandParameter


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(exceptionLogEditUI: ExceptionLogEditUI){
    exceptionLogEditUI.ShowDialog(new ExceptionLog());
  }

  resetFilter() {
    this.filterInstance = ExceptionLog.SeekInstance();
    super.resetFilter();
    
    
  }

  public onEditModalClosed(exceptionLog: ExceptionLog) {
    this.onRefresh();
    this.currentInstance = new ExceptionLog();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
