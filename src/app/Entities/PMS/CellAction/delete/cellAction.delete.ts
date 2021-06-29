import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { CellAction } from '../cellAction';
import { CellActionService } from '../cellAction.service';


@Component({
  selector: 'pms-cellAction-delete',
  templateUrl: './cellAction.delete.html',
  styleUrls: ['./cellAction.delete.css'],
  providers: [CellActionService]
})
export class CellActionDeleteUI extends DeleteModal<CellAction> {

    constructor(private cellActionService: CellActionService){
        super(cellActionService);
    }

}