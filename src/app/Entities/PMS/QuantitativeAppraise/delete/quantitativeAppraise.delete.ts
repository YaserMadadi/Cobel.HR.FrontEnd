import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { QuantitativeAppraise } from '../quantitativeAppraise';
import { QuantitativeAppraiseService } from '../quantitativeAppraise.service';


@Component({
  selector: 'pms-quantitativeAppraise-delete',
  templateUrl: './quantitativeAppraise.delete.html',
  styleUrls: ['./quantitativeAppraise.delete.css'],
  
})
export class QuantitativeAppraiseDeleteUI extends DeleteModal<QuantitativeAppraise> {

    constructor(private quantitativeAppraiseService: QuantitativeAppraiseService){
        super(quantitativeAppraiseService);
    }

}