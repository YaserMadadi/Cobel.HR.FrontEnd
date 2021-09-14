import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { VisionComment } from '../visionComment';
import { VisionCommentService } from '../visionComment.service';
import { VisionCommentDeleteUI } from '../delete/visionComment.delete';
import { VisionCommentEditUI } from '../edit/visionComment.edit';



@Component({
  selector: 'pms-visionComment-master',
  templateUrl: './visionComment.master.html',
  styleUrls: ['./visionComment.master.css']
})
export class VisionCommentMasterUI extends MasterModal<VisionComment> {

  constructor(private visionCommentService: VisionCommentService) {
    super(visionCommentService);
  }
}