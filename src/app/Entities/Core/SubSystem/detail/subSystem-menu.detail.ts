import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { SubSystem } from '../subSystem';
import { SubSystemService } from '../subSystem.service';

import { Menu } from '../../Menu/menu';
import { MenuMasterUI } from '../../Menu/master/menu.master';
import { MenuEditUI } from '../../Menu/edit/menu.edit';
import { MenuDeleteUI } from '../../Menu/delete/menu.delete';



@Component({
  selector: 'subSystem-menu-detail',
  templateUrl: './subSystem-menu.detail.html',
  styleUrls: ['./subSystem-menu.detail.css'],
  providers: [SubSystemService]
}) 

@Injectable()
export class SubSystem_Menu_DetailUI extends DetailView<SubSystem> {

  constructor(private subSystemService: SubSystemService) {
    super(subSystemService);
  }

  public MenuList : Menu[] = [];
  
  public currentMenu : Menu = new Menu();

  private subSystem: SubSystem = new SubSystem();

  @Input()
  public set SubSystem(value: SubSystem) {
    this.subSystem = value;
    this.onReload();
  }

  public get SubSystem(): SubSystem { return this.subSystem }

  public onReload(){
    if (SubSystem.NotConfirm(this.subSystem))
      return;
    this.subSystemService
      .ServiceCollection
      .CollectionOfMenu(this.subSystem)
      .then(menuList => {
        this.MenuList = menuList;
        this.currentMenu = new Menu();
      });
  }

  public onSelect(i: number) {
    this.currentMenu = this.MenuList[i];
    if (Menu.NotConfirm(this.currentMenu))
      this.currentMenu = new Menu();
  }

  public onDblClicked(masterUI: MenuMasterUI) {
    if (Menu.NotConfirm(this.currentMenu))
      return;
    masterUI.ShowDialog(this.currentMenu);
  }

  public onAdd(editUI: MenuEditUI) {
    editUI.SubSystem = this.subSystem;
    editUI.ShowDialog(new Menu());
  }

  public onEdit(editUI: MenuEditUI) {
    if (Menu.NotConfirm(this.currentMenu))
      return;
    editUI.ShowDialog(this.currentMenu);
  }

  public onDelete(deleteUI: MenuDeleteUI) {
    if (Menu.NotConfirm(this.currentMenu))
      return;
    deleteUI.ShowDialog(this.currentMenu);
  }

  public onEditModal_Closed(menu: Menu) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
