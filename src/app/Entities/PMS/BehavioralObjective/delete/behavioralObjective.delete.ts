import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { BehavioralObjective } from '../behavioralObjective';
import { BehavioralObjectiveService } from '../behavioralObjective.service';


@Component({
  selector: 'pms-behavioralObjective-delete',
  templateUrl: './behavioralObjective.delete.html',
  styleUrls: ['./behavioralObjective.delete.css'],
  
})
export class BehavioralObjectiveDeleteUI extends DeleteModal<BehavioralObjective> {

    constructor(private behavioralObjectiveService: BehavioralObjectiveService){
        super(behavioralObjectiveService);
    }

}