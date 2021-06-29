import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { SchoolHistory } from '../schoolHistory';
import { SchoolHistoryService } from '../schoolHistory.service';
import { SchoolHistoryDeleteUI } from '../delete/schoolHistory.delete';
import { SchoolHistoryEditUI } from '../edit/schoolHistory.edit';



@Component({
  selector: 'hr-schoolHistory-master',
  templateUrl: './schoolHistory.master.html',
  styleUrls: ['./schoolHistory.master.css'],
  providers: [
    SchoolHistoryService,
    
  ]
})
export class SchoolHistoryMasterUI extends MasterModal<SchoolHistory> {

  constructor(private schoolHistoryService: SchoolHistoryService) {
    super(schoolHistoryService);
  }
}