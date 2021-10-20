import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { MenuItem } from '../menuItem';
import { MenuItemService } from '../menuItem.service';

import { Badge } from '../../Badge/badge';
import { BadgeMasterUI } from '../../Badge/master/badge.master';
import { BadgeEditUI } from '../../Badge/edit/badge.edit';
import { BadgeDeleteUI } from '../../Badge/delete/badge.delete';



@Component({
  selector: 'menuItem-badge-detail',
  templateUrl: './menuItem-badge.detail.html',
  styleUrls: ['./menuItem-badge.detail.css'],
  providers: [MenuItemService]
}) 

@Injectable()
export class MenuItem_Badge_DetailUI extends DetailView<MenuItem> {

  constructor(private menuItemService: MenuItemService) {
    super(menuItemService);
  }

  public BadgeList : Badge[] = [];
  
  public currentBadge : Badge = new Badge();

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
      .CollectionOfBadge(this.menuItem)
      .then(badgeList => {
        this.BadgeList = badgeList;
        this.currentBadge = new Badge();
      });
  }

  public onSelect(i: number) {
    this.currentBadge = this.BadgeList[i];
    if (Badge.NotConfirm(this.currentBadge))
      this.currentBadge = new Badge();
  }

  public onDblClicked(masterUI: BadgeMasterUI) {
    if (Badge.NotConfirm(this.currentBadge))
      return;
    masterUI.ShowDialog(this.currentBadge);
  }

  public onAdd(editUI: BadgeEditUI) {
    editUI.MenuItem = this.menuItem;
    editUI.ShowDialog(new Badge());
  }

  public onEdit(editUI: BadgeEditUI) {
    if (Badge.NotConfirm(this.currentBadge))
      return;
    editUI.ShowDialog(this.currentBadge);
  }

  public onDelete(deleteUI: BadgeDeleteUI) {
    if (Badge.NotConfirm(this.currentBadge))
      return;
    deleteUI.ShowDialog(this.currentBadge);
  }

  public onEditModal_Closed(badge: Badge) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
