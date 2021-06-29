import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { MaritalStatus } from '../maritalStatus';
import { MaritalStatusService } from '../maritalStatus.service';
import { MaritalStatusDeleteUI } from '../delete/maritalStatus.delete';
import { MaritalStatusEditUI } from '../edit/maritalStatus.edit';
import { PersonService } from '../../../HR/Person/person.service';



@Component({
  selector: 'base-hr-maritalStatus-master',
  templateUrl: './maritalStatus.master.html',
  styleUrls: ['./maritalStatus.master.css'],
  providers: [
    MaritalStatusService,
    PersonService,
  ]
})
export class MaritalStatusMasterUI extends MasterModal<MaritalStatus> {

  constructor(private maritalStatusService: MaritalStatusService) {
    super(maritalStatusService);
  }
}