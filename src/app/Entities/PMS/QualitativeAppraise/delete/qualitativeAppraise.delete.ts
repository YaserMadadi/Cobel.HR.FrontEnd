import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { QualitativeAppraise } from '../qualitativeAppraise';
import { QualitativeAppraiseService } from '../qualitativeAppraise.service';


@Component({
  selector: 'pms-qualitativeAppraise-delete',
  templateUrl: './qualitativeAppraise.delete.html',
  styleUrls: ['./qualitativeAppraise.delete.css'],
  providers: [QualitativeAppraiseService]
})
export class QualitativeAppraiseDeleteUI extends DeleteModal<QualitativeAppraise> {

    constructor(private qualitativeAppraiseService: QualitativeAppraiseService){
        super(qualitativeAppraiseService);
    }

}