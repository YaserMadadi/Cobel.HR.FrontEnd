import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { UniversityTerminate } from '../universityTerminate';
import { UniversityTerminateService } from '../universityTerminate.service';
import { UniversityTerminateDeleteUI } from '../delete/universityTerminate.delete';
import { UniversityTerminateEditUI } from '../edit/universityTerminate.edit';



@Component({
  selector: 'hr-universityTerminate-master',
  templateUrl: './universityTerminate.master.html',
  styleUrls: ['./universityTerminate.master.css'],
  providers: [
    UniversityTerminateService,
    
  ]
})
export class UniversityTerminateMasterUI extends MasterModal<UniversityTerminate> {

  constructor(private universityTerminateService: UniversityTerminateService) {
    super(universityTerminateService);
  }
}