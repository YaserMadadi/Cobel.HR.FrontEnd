

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { RoleMenuItem } from '../roleMenuItem';
import { RoleMenuItemService } from '../roleMenuItem.service';
import { RoleMenuItemMasterUI } from '../master/roleMenuItem.master';
import { RoleMenuItemEditUI } from '../edit/roleMenuItem.edit';
import { RoleMenuItemDeleteUI } from '../delete/roleMenuItem.delete';

import { Role } from '../../Role/role';
import { MenuItem } from '../../MenuItem/menuItem';
import { MenuItemEditUI } from '../../MenuItem/edit/menuItem.edit';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'core-roleMenuItem-index',
  templateUrl: './roleMenuItem.index.html',
  styleUrls: ['./roleMenuItem.index.css']
})
export class RoleMenuItemIndexUI extends IndexView<RoleMenuItem> implements AfterViewInit, IIndexView<RoleMenuItem> {

  constructor(private roleMenuItemService: RoleMenuItemService) {
    super(roleMenuItemService);
    this.filterInstance = RoleMenuItem.SeekInstance();
    this.currentInstance = new RoleMenuItem();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(roleMenuItemEditUI: RoleMenuItemEditUI){
    roleMenuItemEditUI.ShowDialog(new RoleMenuItem());
  }

  resetFilter() {
    this.filterInstance = RoleMenuItem.SeekInstance();
    super.resetFilter();
    
    
  }

  public onEditModalClosed(roleMenuItem: RoleMenuItem) {
    this.onRefresh();
    this.currentInstance = new RoleMenuItem();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
