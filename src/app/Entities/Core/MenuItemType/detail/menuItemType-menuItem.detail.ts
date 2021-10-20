import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { MenuItemType } from '../menuItemType';
import { MenuItemTypeService } from '../menuItemType.service';

import { MenuItem } from '../../MenuItem/menuItem';
import { MenuItemMasterUI } from '../../MenuItem/master/menuItem.master';
import { MenuItemEditUI } from '../../MenuItem/edit/menuItem.edit';
import { MenuItemDeleteUI } from '../../MenuItem/delete/menuItem.delete';



@Component({
  selector: 'menuItemType-menuItem-detail',
  templateUrl: './menuItemType-menuItem.detail.html',
  styleUrls: ['./menuItemType-menuItem.detail.css'],
  providers: [MenuItemTypeService]
}) 

@Injectable()
export class MenuItemType_MenuItem_DetailUI extends DetailView<MenuItemType> {

  constructor(private menuItemTypeService: MenuItemTypeService) {
    super(menuItemTypeService);
  }

  public MenuItemList : MenuItem[] = [];
  
  public currentMenuItem : MenuItem = new MenuItem();

  private menuItemType: MenuItemType = new MenuItemType();

  @Input()
  public set MenuItemType(value: MenuItemType) {
    this.menuItemType = value;
    this.onReload();
  }

  public get MenuItemType(): MenuItemType { return this.menuItemType }

  public onReload(){
    if (MenuItemType.NotConfirm(this.menuItemType))
      return;
    this.menuItemTypeService
      .ServiceCollection
      .CollectionOfMenuItem(this.menuItemType)
      .then(menuItemList => {
        this.MenuItemList = menuItemList;
        this.currentMenuItem = new MenuItem();
      });
  }

  public onSelect(i: number) {
    this.currentMenuItem = this.MenuItemList[i];
    if (MenuItem.NotConfirm(this.currentMenuItem))
      this.currentMenuItem = new MenuItem();
  }

  public onDblClicked(masterUI: MenuItemMasterUI) {
    if (MenuItem.NotConfirm(this.currentMenuItem))
      return;
    masterUI.ShowDialog(this.currentMenuItem);
  }

  public onAdd(editUI: MenuItemEditUI) {
    editUI.MenuItemType = this.menuItemType;
    editUI.ShowDialog(new MenuItem());
  }

  public onEdit(editUI: MenuItemEditUI) {
    if (MenuItem.NotConfirm(this.currentMenuItem))
      return;
    editUI.ShowDialog(this.currentMenuItem);
  }

  public onDelete(deleteUI: MenuItemDeleteUI) {
    if (MenuItem.NotConfirm(this.currentMenuItem))
      return;
    deleteUI.ShowDialog(this.currentMenuItem);
  }

  public onEditModal_Closed(menuItem: MenuItem) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
