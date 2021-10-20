import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { DevelopmentGoal } from '../developmentGoal';
import { DevelopmentGoalService } from '../developmentGoal.service';


@Component({
  selector: 'lad-developmentGoal-delete',
  templateUrl: './developmentGoal.delete.html',
  styleUrls: ['./developmentGoal.delete.css'],
  
})
export class DevelopmentGoalDeleteUI extends DeleteModal<DevelopmentGoal> {

    constructor(private developmentGoalService: DevelopmentGoalService){
        super(developmentGoalService);
    }

}