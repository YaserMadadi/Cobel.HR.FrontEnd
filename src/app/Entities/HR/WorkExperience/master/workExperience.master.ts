import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { WorkExperience } from '../workExperience';
import { WorkExperienceService } from '../workExperience.service';
import { WorkExperienceDeleteUI } from '../delete/workExperience.delete';
import { WorkExperienceEditUI } from '../edit/workExperience.edit';



@Component({
  selector: 'hr-workExperience-master',
  templateUrl: './workExperience.master.html',
  styleUrls: ['./workExperience.master.css'],
})
export class WorkExperienceMasterUI extends MasterModal<WorkExperience> {

  constructor(private workExperienceService: WorkExperienceService) {
    super(workExperienceService);
  }
}