import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { FieldOfStudy } from '../fieldOfStudy';
import { FieldOfStudyService } from '../fieldOfStudy.service';
import { FieldOfStudyDeleteUI } from '../delete/fieldOfStudy.delete';
import { FieldOfStudyEditUI } from '../edit/fieldOfStudy.edit';
import { UniversityHistoryService } from '../../../HR/UniversityHistory/universityHistory.service';



@Component({
  selector: 'base-fieldOfStudy-master',
  templateUrl: './fieldOfStudy.master.html',
  styleUrls: ['./fieldOfStudy.master.css'],
  providers: [
    FieldOfStudyService,
    UniversityHistoryService,
  ]
})
export class FieldOfStudyMasterUI extends MasterModal<FieldOfStudy> {

  constructor(private fieldOfStudyService: FieldOfStudyService) {
    super(fieldOfStudyService);
  }
}