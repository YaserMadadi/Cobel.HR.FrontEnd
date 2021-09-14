

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { MenuItemType } from '../menuItemType';
import { MenuItemTypeService } from '../menuItemType.service';
import { MenuItemTypeMasterUI } from '../master/menuItemType.master';
import { MenuItemTypeEditUI } from '../edit/menuItemType.edit';
import { MenuItemTypeDeleteUI } from '../delete/menuItemType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { MenuItemEditUI } from '../../MenuItem/edit/menuItem.edit';
import { MenuItem } from '../../MenuItem/menuItem';



@Component({
  selector: 'core-menuItemType-index',
  templateUrl: './menuItemType.index.html',
  styleUrls: ['./menuItemType.index.css']
})
export class MenuItemTypeIndexUI extends IndexView<MenuItemType> implements AfterViewInit, IIndexView<MenuItemType> {

  constructor(private menuItemTypeService: MenuItemTypeService) {
    super(menuItemTypeService);
    this.filterInstance = MenuItemType.SeekInstance();
    this.currentInstance = new MenuItemType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region MenuItem

  public menuItem_Clicked(menuItemEditUI: MenuItemEditUI) {
    menuItemEditUI.MenuItemType = this.currentInstance;
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

  public onAdd(menuItemTypeEditUI: MenuItemTypeEditUI){
    menuItemTypeEditUI.ShowDialog(new MenuItemType());
  }

  resetFilter() {
    this.filterInstance = MenuItemType.SeekInstance();
    super.resetFilter();
    
    
  }

  public onEditModalClosed(menuItemType: MenuItemType) {
    this.onRefresh();
    this.currentInstance = new MenuItemType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
