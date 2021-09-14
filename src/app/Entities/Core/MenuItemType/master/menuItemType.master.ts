import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { MenuItemType } from '../menuItemType';
import { MenuItemTypeService } from '../menuItemType.service';
import { MenuItemTypeDeleteUI } from '../delete/menuItemType.delete';
import { MenuItemTypeEditUI } from '../edit/menuItemType.edit';
import { MenuItemService } from '../../MenuItem/menuItem.service';



@Component({
  selector: 'core-menuItemType-master',
  templateUrl: './menuItemType.master.html',
  styleUrls: ['./menuItemType.master.css'],
  providers: [
    MenuItemTypeService,
    MenuItemService,
  ]
})
export class MenuItemTypeMasterUI extends MasterModal<MenuItemType> {

  constructor(private menuItemTypeService: MenuItemTypeService) {
    super(menuItemTypeService);
  }
}
