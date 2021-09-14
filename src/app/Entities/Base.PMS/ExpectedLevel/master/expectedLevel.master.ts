import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { ExpectedLevel } from '../expectedLevel';
import { ExpectedLevelService } from '../expectedLevel.service';
import { ExpectedLevelDeleteUI } from '../delete/expectedLevel.delete';
import { ExpectedLevelEditUI } from '../edit/expectedLevel.edit';
import { BehavioralObjectiveService } from '../../../PMS/BehavioralObjective/behavioralObjective.service';



@Component({
  selector: 'base-pms-expectedLevel-master',
  templateUrl: './expectedLevel.master.html',
  styleUrls: ['./expectedLevel.master.css'],
  
})
export class ExpectedLevelMasterUI extends MasterModal<ExpectedLevel> {

  constructor(private expectedLevelService: ExpectedLevelService) {
    super(expectedLevelService);
  }
}