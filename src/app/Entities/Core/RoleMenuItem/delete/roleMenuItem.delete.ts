

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { RoleMenuItem } from '../roleMenuItem';
import { RoleMenuItemService } from '../roleMenuItem.service';


@Component({
  selector: 'core-roleMenuItem-delete',
  templateUrl: './roleMenuItem.delete.html',
  styleUrls: ['./roleMenuItem.delete.css'],
  providers: [RoleMenuItemService]
})
export class RoleMenuItemDeleteUI extends DeleteModal<RoleMenuItem> {

    constructor(private roleMenuItemService: RoleMenuItemService){
        super(roleMenuItemService);
    }

}
