import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { MenuItem } from '../menuItem';
import { MenuItemService } from '../menuItem.service';

import { RoleMenuItem } from '../../RoleMenuItem/roleMenuItem';
import { RoleMenuItemMasterUI } from '../../RoleMenuItem/master/roleMenuItem.master';
import { RoleMenuItemEditUI } from '../../RoleMenuItem/edit/roleMenuItem.edit';
import { RoleMenuItemDeleteUI } from '../../RoleMenuItem/delete/roleMenuItem.delete';



@Component({
  selector: 'menuItem-roleMenuItem-detail',
  templateUrl: './menuItem-roleMenuItem.detail.html',
  styleUrls: ['./menuItem-roleMenuItem.detail.css'],
  providers: [MenuItemService]
}) 

@Injectable()
export class MenuItem_RoleMenuItem_DetailUI extends DetailView<MenuItem> {

  constructor(private menuItemService: MenuItemService) {
    super(menuItemService);
  }

  public RoleMenuItemList : RoleMenuItem[] = [];
  
  public currentRoleMenuItem : RoleMenuItem = new RoleMenuItem();

  private menuItem: MenuItem = new MenuItem();

  @Input()
  public set MenuItem(value: MenuItem) {
    this.menuItem = value;
    this.onReload();
  }

  public get MenuItem(): MenuItem { return this.menuItem }

  public onReload(){
    if (MenuItem.NotConfirm(this.menuItem))
      return;
    this.menuItemService
      .ServiceCollection
      .CollectionOfRoleMenuItem(this.menuItem)
      .then(roleMenuItemList => {
        this.RoleMenuItemList = roleMenuItemList;
        this.currentRoleMenuItem = new RoleMenuItem();
      });
  }

  public onSelect(i: number) {
    this.currentRoleMenuItem = this.RoleMenuItemList[i];
    if (RoleMenuItem.NotConfirm(this.currentRoleMenuItem))
      this.currentRoleMenuItem = new RoleMenuItem();
  }

  public onDblClicked(masterUI: RoleMenuItemMasterUI) {
    if (RoleMenuItem.NotConfirm(this.currentRoleMenuItem))
      return;
    masterUI.ShowDialog(this.currentRoleMenuItem);
  }

  public onAdd(editUI: RoleMenuItemEditUI) {
    editUI.MenuItem = this.menuItem;
    editUI.ShowDialog(new RoleMenuItem());
  }

  public onEdit(editUI: RoleMenuItemEditUI) {
    if (RoleMenuItem.NotConfirm(this.currentRoleMenuItem))
      return;
    editUI.ShowDialog(this.currentRoleMenuItem);
  }

  public onDelete(deleteUI: RoleMenuItemDeleteUI) {
    if (RoleMenuItem.NotConfirm(this.currentRoleMenuItem))
      return;
    deleteUI.ShowDialog(this.currentRoleMenuItem);
  }

  public onEditModal_Closed(roleMenuItem: RoleMenuItem) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
