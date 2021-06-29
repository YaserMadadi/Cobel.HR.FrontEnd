import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { UniversityHistory } from '../universityHistory';
import { UniversityHistoryService } from '../universityHistory.service';
import { UniversityHistoryDeleteUI } from '../delete/universityHistory.delete';
import { UniversityHistoryEditUI } from '../edit/universityHistory.edit';
import { UniversityTerminateService } from '../../UniversityTerminate/universityTerminate.service';



@Component({
  selector: 'hr-universityHistory-master',
  templateUrl: './universityHistory.master.html',
  styleUrls: ['./universityHistory.master.css'],
  providers: [
    UniversityHistoryService,
    UniversityTerminateService,
  ]
})
export class UniversityHistoryMasterUI extends MasterModal<UniversityHistory> {

  constructor(private universityHistoryService: UniversityHistoryService) {
    super(universityHistoryService);
  }
}