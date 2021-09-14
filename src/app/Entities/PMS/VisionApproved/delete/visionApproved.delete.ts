import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { VisionApproved } from '../visionApproved';
import { VisionApprovedService } from '../visionApproved.service';


@Component({
  selector: 'pms-visionApproved-delete',
  templateUrl: './visionApproved.delete.html',
  styleUrls: ['./visionApproved.delete.css'],
})
export class VisionApprovedDeleteUI extends DeleteModal<VisionApproved> {

    constructor(private visionApprovedService: VisionApprovedService){
        super(visionApprovedService);
    }

}