

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Menu } from '../menu';
import { MenuService } from '../menu.service';


@Component({
  selector: 'core-menu-delete',
  templateUrl: './menu.delete.html',
  styleUrls: ['./menu.delete.css'],
  providers: [MenuService]
})
export class MenuDeleteUI extends DeleteModal<Menu> {

    constructor(private menuService: MenuService){
        super(menuService);
    }

}
