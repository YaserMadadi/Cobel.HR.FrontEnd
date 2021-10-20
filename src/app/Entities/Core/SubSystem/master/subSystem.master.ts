import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { SubSystem } from '../subSystem';
import { SubSystemService } from '../subSystem.service';
import { SubSystemDeleteUI } from '../delete/subSystem.delete';
import { SubSystemEditUI } from '../edit/subSystem.edit';
import { MenuService } from '../../Menu/menu.service';



@Component({
  selector: 'core-subSystem-master',
  templateUrl: './subSystem.master.html',
  styleUrls: ['./subSystem.master.css'],
  providers: [
    SubSystemService,
    MenuService,
  ]
})
export class SubSystemMasterUI extends MasterModal<SubSystem> {

  constructor(private subSystemService: SubSystemService) {
    super(subSystemService);
  }
}
