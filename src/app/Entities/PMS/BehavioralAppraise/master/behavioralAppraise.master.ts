import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { BehavioralAppraise } from '../behavioralAppraise';
import { BehavioralAppraiseService } from '../behavioralAppraise.service';
import { BehavioralAppraiseDeleteUI } from '../delete/behavioralAppraise.delete';
import { BehavioralAppraiseEditUI } from '../edit/behavioralAppraise.edit';



@Component({
  selector: 'pms-behavioralAppraise-master',
  templateUrl: './behavioralAppraise.master.html',
  styleUrls: ['./behavioralAppraise.master.css'],
  providers: [
    BehavioralAppraiseService,
    
  ]
})
export class BehavioralAppraiseMasterUI extends MasterModal<BehavioralAppraise> {

  constructor(private behavioralAppraiseService: BehavioralAppraiseService) {
    super(behavioralAppraiseService);
  }
}