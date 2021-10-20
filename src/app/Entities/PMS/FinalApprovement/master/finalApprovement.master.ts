import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { FinalApprovement } from '../finalApprovement';
import { FinalApprovementService } from '../finalApprovement.service';
import { FinalApprovementDeleteUI } from '../delete/finalApprovement.delete';
import { FinalApprovementEditUI } from '../edit/finalApprovement.edit';



@Component({
  selector: 'pms-finalApprovement-master',
  templateUrl: './finalApprovement.master.html',
  styleUrls: ['./finalApprovement.master.css']
})
export class FinalApprovementMasterUI extends MasterModal<FinalApprovement> {

  constructor(private finalApprovementService: FinalApprovementService) {
    super(finalApprovementService);
  }
}