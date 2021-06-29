import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { FinalApprovement } from '../finalApprovement';
import { FinalApprovementService } from '../finalApprovement.service';


@Component({
  selector: 'pms-finalApprovement-delete',
  templateUrl: './finalApprovement.delete.html',
  styleUrls: ['./finalApprovement.delete.css'],
  providers: [FinalApprovementService]
})
export class FinalApprovementDeleteUI extends DeleteModal<FinalApprovement> {

    constructor(private finalApprovementService: FinalApprovementService){
        super(finalApprovementService);
    }

}