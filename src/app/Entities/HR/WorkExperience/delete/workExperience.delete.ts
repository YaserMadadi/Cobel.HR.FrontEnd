import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { WorkExperience } from '../workExperience';
import { WorkExperienceService } from '../workExperience.service';


@Component({
  selector: 'hr-workExperience-delete',
  templateUrl: './workExperience.delete.html',
  styleUrls: ['./workExperience.delete.css'],
  
})
export class WorkExperienceDeleteUI extends DeleteModal<WorkExperience> {

    constructor(private workExperienceService: WorkExperienceService){
        super(workExperienceService);
    }

}