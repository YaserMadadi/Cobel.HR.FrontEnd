import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { MilitaryServiceStatus } from '../militaryServiceStatus';
import { MilitaryServiceStatusService } from '../militaryServiceStatus.service';
import { MilitaryServiceStatusDeleteUI } from '../delete/militaryServiceStatus.delete';
import { MilitaryServiceStatusEditUI } from '../edit/militaryServiceStatus.edit';
import { MilitaryServiceService } from '../../../HR/MilitaryService/militaryService.service';



@Component({
  selector: 'base-militaryServiceStatus-master',
  templateUrl: './militaryServiceStatus.master.html',
  styleUrls: ['./militaryServiceStatus.master.css'],
  
})
export class MilitaryServiceStatusMasterUI extends MasterModal<MilitaryServiceStatus> {

  constructor(private militaryServiceStatusService: MilitaryServiceStatusService) {
    super(militaryServiceStatusService);
  }
}