

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { MenuItemType } from '../menuItemType';
import { MenuItemTypeService } from '../menuItemType.service';


@Component({
  selector: 'core-menuItemType-delete',
  templateUrl: './menuItemType.delete.html',
  styleUrls: ['./menuItemType.delete.css'],
  providers: [MenuItemTypeService]
})
export class MenuItemTypeDeleteUI extends DeleteModal<MenuItemType> {

    constructor(private menuItemTypeService: MenuItemTypeService){
        super(menuItemTypeService);
    }

}
