import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { University } from '../university';
import { UniversityService } from '../university.service';
import { UniversityDeleteUI } from '../delete/university.delete';
import { UniversityEditUI } from '../edit/university.edit';
import { UniversityHistoryService } from '../../../HR/UniversityHistory/universityHistory.service';



@Component({
  selector: 'base-university-master',
  templateUrl: './university.master.html',
  styleUrls: ['./university.master.css'],
  providers: [
    UniversityService,
    UniversityHistoryService,
  ]
})
export class UniversityMasterUI extends MasterModal<University> {

  constructor(private universityService: UniversityService) {
    super(universityService);
  }
}