import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { CoachConnectionLine } from '../coachConnectionLine';
import { CoachConnectionLineService } from '../coachConnectionLine.service';


@Component({
  selector: 'lad-coachConnectionLine-delete',
  templateUrl: './coachConnectionLine.delete.html',
  styleUrls: ['./coachConnectionLine.delete.css'],
  
})
export class CoachConnectionLineDeleteUI extends DeleteModal<CoachConnectionLine> {

    constructor(private coachConnectionLineService: CoachConnectionLineService){
        super(coachConnectionLineService);
    }

}