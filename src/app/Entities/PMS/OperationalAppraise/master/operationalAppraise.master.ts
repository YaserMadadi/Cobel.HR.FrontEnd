import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { OperationalAppraise } from '../operationalAppraise';
import { OperationalAppraiseService } from '../operationalAppraise.service';
import { OperationalAppraiseDeleteUI } from '../delete/operationalAppraise.delete';
import { OperationalAppraiseEditUI } from '../edit/operationalAppraise.edit';



@Component({
  selector: 'pms-operationalAppraise-master',
  templateUrl: './operationalAppraise.master.html',
  styleUrls: ['./operationalAppraise.master.css']
})
export class OperationalAppraiseMasterUI extends MasterModal<OperationalAppraise> {

  constructor(private operationalAppraiseService: OperationalAppraiseService) {
    super(operationalAppraiseService);
  }
}