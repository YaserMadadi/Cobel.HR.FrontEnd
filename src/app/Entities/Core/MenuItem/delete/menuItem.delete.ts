

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { MenuItem } from '../menuItem';
import { MenuItemService } from '../menuItem.service';


@Component({
  selector: 'core-menuItem-delete',
  templateUrl: './menuItem.delete.html',
  styleUrls: ['./menuItem.delete.css'],
  providers: [MenuItemService]
})
export class MenuItemDeleteUI extends DeleteModal<MenuItem> {

    constructor(private menuItemService: MenuItemService){
        super(menuItemService);
    }

}
