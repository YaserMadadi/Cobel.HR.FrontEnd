import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { CoachConnectionLine } from '../coachConnectionLine';
import { CoachConnectionLineService } from '../coachConnectionLine.service';
import { CoachConnectionLineDeleteUI } from '../delete/coachConnectionLine.delete';
import { CoachConnectionLineEditUI } from '../edit/coachConnectionLine.edit';



@Component({
  selector: 'lad-coachConnectionLine-master',
  templateUrl: './coachConnectionLine.master.html',
  styleUrls: ['./coachConnectionLine.master.css']
})
export class CoachConnectionLineMasterUI extends MasterModal<CoachConnectionLine> {

  constructor(private coachConnectionLineService: CoachConnectionLineService) {
    super(coachConnectionLineService);
  }
}