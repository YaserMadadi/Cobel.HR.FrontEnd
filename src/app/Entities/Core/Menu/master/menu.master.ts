import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { MenuDeleteUI } from '../delete/menu.delete';
import { MenuEditUI } from '../edit/menu.edit';
import { MenuItemService } from '../../MenuItem/menuItem.service';



@Component({
  selector: 'core-menu-master',
  templateUrl: './menu.master.html',
  styleUrls: ['./menu.master.css'],
  providers: [
    MenuService,
    MenuItemService,
  ]
})
export class MenuMasterUI extends MasterModal<Menu> {

  constructor(private menuService: MenuService) {
    super(menuService);
  }
}
