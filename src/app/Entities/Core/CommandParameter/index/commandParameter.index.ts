

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { CommandParameter } from '../commandParameter';
import { CommandParameterService } from '../commandParameter.service';
import { CommandParameterMasterUI } from '../master/commandParameter.master';
import { CommandParameterEditUI } from '../edit/commandParameter.edit';
import { CommandParameterDeleteUI } from '../delete/commandParameter.delete';

import { ExceptionLog } from '../../ExceptionLog/exceptionLog';
import { ExceptionLogEditUI } from '../../ExceptionLog/edit/exceptionLog.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'core-commandParameter-index',
  templateUrl: './commandParameter.index.html',
  styleUrls: ['./commandParameter.index.css']
})
export class CommandParameterIndexUI extends IndexView<CommandParameter> implements AfterViewInit, IIndexView<CommandParameter> {

  constructor(private commandParameterService: CommandParameterService) {
    super(commandParameterService);
    this.filterInstance = CommandParameter.SeekInstance();
    this.currentInstance = new CommandParameter();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(commandParameterEditUI: CommandParameterEditUI){
    commandParameterEditUI.ShowDialog(new CommandParameter());
  }

  resetFilter() {
    this.filterInstance = CommandParameter.SeekInstance();
    super.resetFilter();
    
    
  }

  public onEditModalClosed(commandParameter: CommandParameter) {
    this.onRefresh();
    this.currentInstance = new CommandParameter();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
