import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { MenuItem } from '../menuItem';
import { MenuItemService } from '../menuItem.service';
import { MenuItemDeleteUI } from '../delete/menuItem.delete';
import { MenuItemEditUI } from '../edit/menuItem.edit';
import { RoleMenuItemService } from '../../RoleMenuItem/roleMenuItem.service';
import { BadgeService } from '../../Badge/badge.service';



@Component({
  selector: 'core-menuItem-master',
  templateUrl: './menuItem.master.html',
  styleUrls: ['./menuItem.master.css'],
  providers: [
    MenuItemService,
    RoleMenuItemService,
		BadgeService,
  ]
})
export class MenuItemMasterUI extends MasterModal<MenuItem> {

  constructor(private menuItemService: MenuItemService) {
    super(menuItemService);
  }
}
