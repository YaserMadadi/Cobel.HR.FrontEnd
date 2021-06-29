import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { EducationSystem } from '../educationSystem';
import { EducationSystemService } from '../educationSystem.service';
import { EducationSystemDeleteUI } from '../delete/educationSystem.delete';
import { EducationSystemEditUI } from '../edit/educationSystem.edit';
import { UniversityHistoryService } from '../../../HR/UniversityHistory/universityHistory.service';



@Component({
  selector: 'base-educationSystem-master',
  templateUrl: './educationSystem.master.html',
  styleUrls: ['./educationSystem.master.css'],
  providers: [
    EducationSystemService,
    UniversityHistoryService,
  ]
})
export class EducationSystemMasterUI extends MasterModal<EducationSystem> {

  constructor(private educationSystemService: EducationSystemService) {
    super(educationSystemService);
  }
}