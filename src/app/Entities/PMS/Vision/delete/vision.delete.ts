import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Vision } from '../vision';
import { VisionService } from '../vision.service';


@Component({
  selector: 'pms-vision-delete',
  templateUrl: './vision.delete.html',
  styleUrls: ['./vision.delete.css'],
  providers: [VisionService]
})
export class VisionDeleteUI extends DeleteModal<Vision> {

    constructor(private visionService: VisionService){
        super(visionService);
    }

}