import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { NonOperationalAppraise } from '../nonOperationalAppraise';
import { NonOperationalAppraiseService } from '../nonOperationalAppraise.service';


@Component({
  selector: 'pms-nonOperationalAppraise-delete',
  templateUrl: './nonOperationalAppraise.delete.html',
  styleUrls: ['./nonOperationalAppraise.delete.css'],
  providers: [NonOperationalAppraiseService]
})
export class NonOperationalAppraiseDeleteUI extends DeleteModal<NonOperationalAppraise> {

    constructor(private nonOperationalAppraiseService: NonOperationalAppraiseService){
        super(nonOperationalAppraiseService);
    }

}