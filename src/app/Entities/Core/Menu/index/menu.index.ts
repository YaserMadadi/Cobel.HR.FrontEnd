

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { MenuMasterUI } from '../master/menu.master';
import { MenuEditUI } from '../edit/menu.edit';
import { MenuDeleteUI } from '../delete/menu.delete';

import { SubSystem } from '../../SubSystem/subSystem';
import { SubSystemEditUI } from '../../SubSystem/edit/subSystem.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { MenuItemEditUI } from '../../MenuItem/edit/menuItem.edit';
import { MenuItem } from '../../MenuItem/menuItem';



@Component({
  selector: 'core-menu-index',
  templateUrl: './menu.index.html',
  styleUrls: ['./menu.index.css']
})
export class MenuIndexUI extends IndexView<Menu> implements AfterViewInit, IIndexView<Menu> {

  constructor(private menuService: MenuService) {
    super(menuService);
    this.filterInstance = Menu.SeekInstance();
    this.currentInstance = new Menu();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region MenuItem

  public menuItem_Clicked(menuItemEditUI: MenuItemEditUI) {
    menuItemEditUI.Menu = this.currentInstance;
    menuItemEditUI.ShowDialog(new MenuItem());
  }
                    
  public menuItemEditUI_Closed(menuItem: MenuItem) {
    if (!menuItem)
      return;
    this.onRefresh();
  }
  
  //#endregion MenuItem


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(menuEditUI: MenuEditUI){
    menuEditUI.ShowDialog(new Menu());
  }

  resetFilter() {
    this.filterInstance = Menu.SeekInstance();
    super.resetFilter();
    
    
  }

  public onEditModalClosed(menu: Menu) {
    this.onRefresh();
    this.currentInstance = new Menu();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
