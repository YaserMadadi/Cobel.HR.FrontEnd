import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { FinalAppraise } from '../finalAppraise';
import { FinalAppraiseService } from '../finalAppraise.service';


@Component({
  selector: 'pms-finalAppraise-delete',
  templateUrl: './finalAppraise.delete.html',
  styleUrls: ['./finalAppraise.delete.css'],
  providers: [FinalAppraiseService]
})
export class FinalAppraiseDeleteUI extends DeleteModal<FinalAppraise> {

    constructor(private finalAppraiseService: FinalAppraiseService){
        super(finalAppraiseService);
    }

}