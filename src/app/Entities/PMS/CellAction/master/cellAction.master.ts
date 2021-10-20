import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { CellAction } from '../cellAction';
import { CellActionService } from '../cellAction.service';
import { CellActionDeleteUI } from '../delete/cellAction.delete';
import { CellActionEditUI } from '../edit/cellAction.edit';



@Component({
  selector: 'pms-cellAction-master',
  templateUrl: './cellAction.master.html',
  styleUrls: ['./cellAction.master.css']
})
export class CellActionMasterUI extends MasterModal<CellAction> {

  constructor(private cellActionService: CellActionService) {
    super(cellActionService);
  }
}