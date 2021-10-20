

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { MenuItem } from '../menuItem';
import { MenuItemService } from '../menuItem.service';
import { MenuItemMasterUI } from '../master/menuItem.master';
import { MenuItemEditUI } from '../edit/menuItem.edit';
import { MenuItemDeleteUI } from '../delete/menuItem.delete';

import { Menu } from '../../Menu/menu';
import { MenuEditUI } from '../../Menu/edit/menu.edit';
import { MenuItemType } from '../../MenuItemType/menuItemType';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { RoleMenuItemEditUI } from '../../RoleMenuItem/edit/roleMenuItem.edit';
import { RoleMenuItem } from '../../RoleMenuItem/roleMenuItem';
import { BadgeEditUI } from '../../Badge/edit/badge.edit';
import { Badge } from '../../Badge/badge';



@Component({
  selector: 'core-menuItem-index',
  templateUrl: './menuItem.index.html',
  styleUrls: ['./menuItem.index.css']
})
export class MenuItemIndexUI extends IndexView<MenuItem> implements AfterViewInit, IIndexView<MenuItem> {

  constructor(private menuItemService: MenuItemService) {
    super(menuItemService);
    this.filterInstance = MenuItem.SeekInstance();
    this.currentInstance = new MenuItem();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region RoleMenuItem

  public roleMenuItem_Clicked(roleMenuItemEditUI: RoleMenuItemEditUI) {
    roleMenuItemEditUI.MenuItem = this.currentInstance;
    roleMenuItemEditUI.ShowDialog(new RoleMenuItem());
  }
                    
  public roleMenuItemEditUI_Closed(roleMenuItem: RoleMenuItem) {
    if (!roleMenuItem)
      return;
    this.onRefresh();
  }
  
  //#endregion RoleMenuItem

  //#region Badge

  public badge_Clicked(badgeEditUI: BadgeEditUI) {
    badgeEditUI.MenuItem = this.currentInstance;
    badgeEditUI.ShowDialog(new Badge());
  }
                    
  public badgeEditUI_Closed(badge: Badge) {
    if (!badge)
      return;
    this.onRefresh();
  }
  
  //#endregion Badge


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(menuItemEditUI: MenuItemEditUI){
    menuItemEditUI.ShowDialog(new MenuItem());
  }

  resetFilter() {
    this.filterInstance = MenuItem.SeekInstance();
    super.resetFilter();
    
    
  }

  public onEditModalClosed(menuItem: MenuItem) {
    this.onRefresh();
    this.currentInstance = new MenuItem();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
