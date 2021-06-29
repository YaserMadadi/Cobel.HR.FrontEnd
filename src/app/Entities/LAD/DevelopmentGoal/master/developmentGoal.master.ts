import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { DevelopmentGoal } from '../developmentGoal';
import { DevelopmentGoalService } from '../developmentGoal.service';
import { DevelopmentGoalDeleteUI } from '../delete/developmentGoal.delete';
import { DevelopmentGoalEditUI } from '../edit/developmentGoal.edit';



@Component({
  selector: 'lad-developmentGoal-master',
  templateUrl: './developmentGoal.master.html',
  styleUrls: ['./developmentGoal.master.css'],
  providers: [
    DevelopmentGoalService,
    
  ]
})
export class DevelopmentGoalMasterUI extends MasterModal<DevelopmentGoal> {

  constructor(private developmentGoalService: DevelopmentGoalService) {
    super(developmentGoalService);
  }
}