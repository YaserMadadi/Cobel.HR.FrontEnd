import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { FunctionalObjectiveComment } from '../functionalObjectiveComment';
import { FunctionalObjectiveCommentService } from '../functionalObjectiveComment.service';


@Component({
  selector: 'pms-functionalObjectiveComment-delete',
  templateUrl: './functionalObjectiveComment.delete.html',
  styleUrls: ['./functionalObjectiveComment.delete.css'],
  providers: [FunctionalObjectiveCommentService]
})
export class FunctionalObjectiveCommentDeleteUI extends DeleteModal<FunctionalObjectiveComment> {

    constructor(private functionalObjectiveCommentService: FunctionalObjectiveCommentService){
        super(functionalObjectiveCommentService);
    }

}