import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { AssessorConnectionLine } from '../assessorConnectionLine';
import { AssessorConnectionLineService } from '../assessorConnectionLine.service';


@Component({
  selector: 'lad-assessorConnectionLine-delete',
  templateUrl: './assessorConnectionLine.delete.html',
  styleUrls: ['./assessorConnectionLine.delete.css'],
  providers: [AssessorConnectionLineService]
})
export class AssessorConnectionLineDeleteUI extends DeleteModal<AssessorConnectionLine> {

    constructor(private assessorConnectionLineService: AssessorConnectionLineService){
        super(assessorConnectionLineService);
    }

}