import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { FunctionalKPIComment } from '../functionalKPIComment';
import { FunctionalKPICommentService } from '../functionalKPIComment.service';


@Component({
  selector: 'pms-functionalKPIComment-delete',
  templateUrl: './functionalKPIComment.delete.html',
  styleUrls: ['./functionalKPIComment.delete.css'],
  providers: [FunctionalKPICommentService]
})
export class FunctionalKPICommentDeleteUI extends DeleteModal<FunctionalKPIComment> {

    constructor(private functionalKPICommentService: FunctionalKPICommentService){
        super(functionalKPICommentService);
    }

}