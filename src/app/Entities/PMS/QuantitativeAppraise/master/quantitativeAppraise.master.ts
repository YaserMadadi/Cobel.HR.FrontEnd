import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { QuantitativeAppraise } from '../quantitativeAppraise';
import { QuantitativeAppraiseService } from '../quantitativeAppraise.service';
import { QuantitativeAppraiseDeleteUI } from '../delete/quantitativeAppraise.delete';
import { QuantitativeAppraiseEditUI } from '../edit/quantitativeAppraise.edit';



@Component({
  selector: 'pms-quantitativeAppraise-master',
  templateUrl: './quantitativeAppraise.master.html',
  styleUrls: ['./quantitativeAppraise.master.css']
})
export class QuantitativeAppraiseMasterUI extends MasterModal<QuantitativeAppraise> {

  constructor(private quantitativeAppraiseService: QuantitativeAppraiseService) {
    super(quantitativeAppraiseService);
  }
}