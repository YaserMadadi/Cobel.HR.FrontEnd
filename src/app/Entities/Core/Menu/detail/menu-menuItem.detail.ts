import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Menu } from '../menu';
import { MenuService } from '../menu.service';

import { MenuItem } from '../../MenuItem/menuItem';
import { MenuItemMasterUI } from '../../MenuItem/master/menuItem.master';
import { MenuItemEditUI } from '../../MenuItem/edit/menuItem.edit';
import { MenuItemDeleteUI } from '../../MenuItem/delete/menuItem.delete';



@Component({
  selector: 'menu-menuItem-detail',
  templateUrl: './menu-menuItem.detail.html',
  styleUrls: ['./menu-menuItem.detail.css'],
  providers: [MenuService]
}) 

@Injectable()
export class Menu_MenuItem_DetailUI extends DetailView<Menu> {

  constructor(private menuService: MenuService) {
    super(menuService);
  }

  public MenuItemList : MenuItem[] = [];
  
  public currentMenuItem : MenuItem = new MenuItem();

  private menu: Menu = new Menu();

  @Input()
  public set Menu(value: Menu) {
    this.menu = value;
    this.onReload();
  }

  public get Menu(): Menu { return this.menu }

  public onReload(){
    if (Menu.NotConfirm(this.menu))
      return;
    this.menuService
      .ServiceCollection
      .CollectionOfMenuItem(this.menu)
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
    editUI.Menu = this.menu;
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
