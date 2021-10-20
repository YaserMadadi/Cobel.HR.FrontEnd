import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { MilitaryServiceInclusive } from '../militaryServiceInclusive';
import { MilitaryServiceInclusiveService } from '../militaryServiceInclusive.service';
import { MilitaryServiceInclusiveDeleteUI } from '../delete/militaryServiceInclusive.delete';
import { MilitaryServiceInclusiveEditUI } from '../edit/militaryServiceInclusive.edit';



@Component({
  selector: 'hr-militaryServiceInclusive-master',
  templateUrl: './militaryServiceInclusive.master.html',
  styleUrls: ['./militaryServiceInclusive.master.css']
})
export class MilitaryServiceInclusiveMasterUI extends MasterModal<MilitaryServiceInclusive> {

  constructor(private militaryServiceInclusiveService: MilitaryServiceInclusiveService) {
    super(militaryServiceInclusiveService);
  }
}