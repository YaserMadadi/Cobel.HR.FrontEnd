import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Impersonate } from '../impersonate';
import { ImpersonateService } from '../impersonate.service';
import { ImpersonateMasterUI } from '../master/impersonate.master';
import { ImpersonateEditUI } from '../edit/impersonate.edit';
import { ImpersonateDeleteUI } from '../delete/impersonate.delete';

import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'core-impersonate-index',
  templateUrl: './impersonate.index.html',
  styleUrls: ['./impersonate.index.css']
})
export class ImpersonateIndexUI extends IndexView<Impersonate> implements AfterViewInit, IIndexView<Impersonate> {

  constructor(private impersonateService: ImpersonateService) {
    super(impersonateService);
    this.filterInstance = Impersonate.SeekInstance();
    this.currentInstance = new Impersonate();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(impersonateEditUI: ImpersonateEditUI){
    impersonateEditUI.ShowDialog(new Impersonate());
  }

  resetFilter() {
    this.filterInstance = Impersonate.SeekInstance();
    
    
  }

  public onEditModalClosed(impersonate: Impersonate) {
    this.onRefresh();
    this.currentInstance = new Impersonate();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}