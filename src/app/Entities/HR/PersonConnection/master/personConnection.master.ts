import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { PersonConnection } from '../personConnection';
import { PersonConnectionService } from '../personConnection.service';
import { PersonConnectionDeleteUI } from '../delete/personConnection.delete';
import { PersonConnectionEditUI } from '../edit/personConnection.edit';



@Component({
  selector: 'hr-personConnection-master',
  templateUrl: './personConnection.master.html',
  styleUrls: ['./personConnection.master.css'],
  providers: [
    PersonConnectionService,
    
  ]
})
export class PersonConnectionMasterUI extends MasterModal<PersonConnection> {

  constructor(private personConnectionService: PersonConnectionService) {
    super(personConnectionService);
  }
}