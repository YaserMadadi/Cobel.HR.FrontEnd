import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { OperationalAppraise } from '../operationalAppraise';
import { OperationalAppraiseService } from '../operationalAppraise.service';


@Component({
  selector: 'pms-operationalAppraise-delete',
  templateUrl: './operationalAppraise.delete.html',
  styleUrls: ['./operationalAppraise.delete.css'],
  
})
export class OperationalAppraiseDeleteUI extends DeleteModal<OperationalAppraise> {

    constructor(private operationalAppraiseService: OperationalAppraiseService){
        super(operationalAppraiseService);
    }

}