import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { FunctionalAppraise } from '../functionalAppraise';
import { FunctionalAppraiseService } from '../functionalAppraise.service';


@Component({
  selector: 'pms-functionalAppraise-delete',
  templateUrl: './functionalAppraise.delete.html',
  styleUrls: ['./functionalAppraise.delete.css'],
  
})
export class FunctionalAppraiseDeleteUI extends DeleteModal<FunctionalAppraise> {

    constructor(private functionalAppraiseService: FunctionalAppraiseService){
        super(functionalAppraiseService);
    }

}