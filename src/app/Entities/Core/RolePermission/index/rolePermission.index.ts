import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { RolePermission } from '../rolePermission';
import { RolePermissionService } from '../rolePermission.service';
import { RolePermissionMasterUI } from '../master/rolePermission.master';
import { RolePermissionEditUI } from '../edit/rolePermission.edit';
import { RolePermissionDeleteUI } from '../delete/rolePermission.delete';

import { Role } from '../../Role/role';
import { Entity } from '../../Entity/entity';
import { EntityEditUI } from '../../Entity/edit/entity.edit';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'core-rolePermission-index',
  templateUrl: './rolePermission.index.html',
  styleUrls: ['./rolePermission.index.css']
})
export class RolePermissionIndexUI extends IndexView<RolePermission> implements AfterViewInit, IIndexView<RolePermission> {

  constructor(private rolePermissionService: RolePermissionService) {
    super(rolePermissionService);
    this.filterInstance = RolePermission.SeekInstance();
    this.currentInstance = new RolePermission();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(rolePermissionEditUI: RolePermissionEditUI){
    rolePermissionEditUI.ShowDialog(new RolePermission());
  }

  resetFilter() {
    this.filterInstance = RolePermission.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(rolePermission: RolePermission) {
    this.onRefresh();
    this.currentInstance = new RolePermission();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}