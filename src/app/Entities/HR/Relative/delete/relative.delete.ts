import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Relative } from '../relative';
import { RelativeService } from '../relative.service';


@Component({
  selector: 'hr-relative-delete',
  templateUrl: './relative.delete.html',
  styleUrls: ['./relative.delete.css'],
  
})
export class RelativeDeleteUI extends DeleteModal<Relative> {

    constructor(private relativeService: RelativeService){
        super(relativeService);
    }

}