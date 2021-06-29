import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Log } from '../log';
import { LogService } from '../log.service';
import { LogMasterUI } from '../master/log.master';
import { LogEditUI } from '../edit/log.edit';
import { LogDeleteUI } from '../delete/log.delete';

import { Person } from '../../../HR/Person/person';
import { PersonEditUI } from '../../../HR/Person/edit/person.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'core-log-index',
  templateUrl: './log.index.html',
  styleUrls: ['./log.index.css']
})
export class LogIndexUI extends IndexView<Log> implements AfterViewInit, IIndexView<Log> {

  constructor(private logService: LogService) {
    super(logService);
    this.filterInstance = Log.SeekInstance();
    this.currentInstance = new Log();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(logEditUI: LogEditUI){
    logEditUI.ShowDialog(new Log());
  }

  resetFilter() {
    this.filterInstance = Log.SeekInstance();
    
    
  }

  public onEditModalClosed(log: Log) {
    this.onRefresh();
    this.currentInstance = new Log();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}