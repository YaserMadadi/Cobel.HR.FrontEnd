import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { BehavioralKPI } from '../behavioralKPI';
import { BehavioralKPIService } from '../behavioralKPI.service';
import { BehavioralKPIDeleteUI } from '../delete/behavioralKPI.delete';
import { BehavioralKPIEditUI } from '../edit/behavioralKPI.edit';
import { BehavioralAppraiseService } from '../../BehavioralAppraise/behavioralAppraise.service';



@Component({
  selector: 'pms-behavioralKPI-master',
  templateUrl: './behavioralKPI.master.html',
  styleUrls: ['./behavioralKPI.master.css'],
  providers: [
    BehavioralKPIService,
    BehavioralAppraiseService,
  ]
})
export class BehavioralKPIMasterUI extends MasterModal<BehavioralKPI> {

  constructor(private behavioralKPIService: BehavioralKPIService) {
    super(behavioralKPIService);
  }
}