import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { RoleMenuItem } from '../roleMenuItem';
import { RoleMenuItemService } from '../roleMenuItem.service';
import { RoleMenuItemDeleteUI } from '../delete/roleMenuItem.delete';
import { RoleMenuItemEditUI } from '../edit/roleMenuItem.edit';



@Component({
  selector: 'core-roleMenuItem-master',
  templateUrl: './roleMenuItem.master.html',
  styleUrls: ['./roleMenuItem.master.css'],
  providers: [
    RoleMenuItemService,
    
  ]
})
export class RoleMenuItemMasterUI extends MasterModal<RoleMenuItem> {

  constructor(private roleMenuItemService: RoleMenuItemService) {
    super(roleMenuItemService);
  }
}
