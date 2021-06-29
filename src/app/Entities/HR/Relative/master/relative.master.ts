import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Relative } from '../relative';
import { RelativeService } from '../relative.service';
import { RelativeDeleteUI } from '../delete/relative.delete';
import { RelativeEditUI } from '../edit/relative.edit';



@Component({
  selector: 'hr-relative-master',
  templateUrl: './relative.master.html',
  styleUrls: ['./relative.master.css'],
  providers: [
    RelativeService,
    
  ]
})
export class RelativeMasterUI extends MasterModal<Relative> {

  constructor(private relativeService: RelativeService) {
    super(relativeService);
  }
}