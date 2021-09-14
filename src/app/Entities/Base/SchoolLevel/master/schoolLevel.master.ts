import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { SchoolLevel } from '../schoolLevel';
import { SchoolLevelService } from '../schoolLevel.service';
import { SchoolLevelDeleteUI } from '../delete/schoolLevel.delete';
import { SchoolLevelEditUI } from '../edit/schoolLevel.edit';
import { SchoolHistoryService } from '../../../HR/SchoolHistory/schoolHistory.service';



@Component({
  selector: 'base-schoolLevel-master',
  templateUrl: './schoolLevel.master.html',
  styleUrls: ['./schoolLevel.master.css'],
  
})
export class SchoolLevelMasterUI extends MasterModal<SchoolLevel> {

  constructor(private schoolLevelService: SchoolLevelService) {
    super(schoolLevelService);
  }
}