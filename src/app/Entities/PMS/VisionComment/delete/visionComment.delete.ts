import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { VisionComment } from '../visionComment';
import { VisionCommentService } from '../visionComment.service';


@Component({
  selector: 'pms-visionComment-delete',
  templateUrl: './visionComment.delete.html',
  styleUrls: ['./visionComment.delete.css'],
  
})
export class VisionCommentDeleteUI extends DeleteModal<VisionComment> {

    constructor(private visionCommentService: VisionCommentService){
        super(visionCommentService);
    }

}