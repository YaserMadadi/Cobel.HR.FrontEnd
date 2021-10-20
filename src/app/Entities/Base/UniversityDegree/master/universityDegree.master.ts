import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { UniversityDegree } from '../universityDegree';
import { UniversityDegreeService } from '../universityDegree.service';
import { UniversityDegreeDeleteUI } from '../delete/universityDegree.delete';
import { UniversityDegreeEditUI } from '../edit/universityDegree.edit';
import { UniversityHistoryService } from '../../../HR/UniversityHistory/universityHistory.service';



@Component({
  selector: 'base-universityDegree-master',
  templateUrl: './universityDegree.master.html',
  styleUrls: ['./universityDegree.master.css'],
  
})
export class UniversityDegreeMasterUI extends MasterModal<UniversityDegree> {

  constructor(private universityDegreeService: UniversityDegreeService) {
    super(universityDegreeService);
  }
}