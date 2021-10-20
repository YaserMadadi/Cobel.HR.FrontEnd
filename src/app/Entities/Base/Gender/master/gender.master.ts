import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Gender } from '../gender';
import { GenderService } from '../gender.service';
import { GenderDeleteUI } from '../delete/gender.delete';
import { GenderEditUI } from '../edit/gender.edit';
import { PersonService } from '../../../HR/Person/person.service';
import { CoachService } from '../../../LAD/Coach/coach.service';
import { AssessorService } from '../../../LAD/Assessor/assessor.service';



@Component({
  selector: 'base-gender-master',
  templateUrl: './gender.master.html',
  styleUrls: ['./gender.master.css'],
})
export class GenderMasterUI extends MasterModal<Gender> {

  constructor(private genderService: GenderService) {
    super(genderService);
  }
}