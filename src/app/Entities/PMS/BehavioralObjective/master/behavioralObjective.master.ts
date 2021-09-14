import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { BehavioralObjective } from '../behavioralObjective';
import { BehavioralObjectiveService } from '../behavioralObjective.service';
import { BehavioralObjectiveDeleteUI } from '../delete/behavioralObjective.delete';
import { BehavioralObjectiveEditUI } from '../edit/behavioralObjective.edit';
import { BehavioralKPIService } from '../../BehavioralKPI/behavioralKPI.service';



@Component({
  selector: 'pms-behavioralObjective-master',
  templateUrl: './behavioralObjective.master.html',
  styleUrls: ['./behavioralObjective.master.css'],
  
})
export class BehavioralObjectiveMasterUI extends MasterModal<BehavioralObjective> {

  constructor(private behavioralObjectiveService: BehavioralObjectiveService) {
    super(behavioralObjectiveService);
  }
}