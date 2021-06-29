import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { BehavioralAppraise } from '../behavioralAppraise';
import { BehavioralAppraiseService } from '../behavioralAppraise.service';


@Component({
  selector: 'pms-behavioralAppraise-delete',
  templateUrl: './behavioralAppraise.delete.html',
  styleUrls: ['./behavioralAppraise.delete.css'],
  providers: [BehavioralAppraiseService]
})
export class BehavioralAppraiseDeleteUI extends DeleteModal<BehavioralAppraise> {

    constructor(private behavioralAppraiseService: BehavioralAppraiseService){
        super(behavioralAppraiseService);
    }

}