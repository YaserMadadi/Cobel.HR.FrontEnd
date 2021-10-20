import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { ConnectionType } from '../connectionType';
import { ConnectionTypeService } from '../connectionType.service';
import { ConnectionTypeDeleteUI } from '../delete/connectionType.delete';
import { ConnectionTypeEditUI } from '../edit/connectionType.edit';
import { CoachConnectionLineService } from '../../../LAD/CoachConnectionLine/coachConnectionLine.service';
import { AssessorConnectionLineService } from '../../../LAD/AssessorConnectionLine/assessorConnectionLine.service';
import { PersonConnectionService } from '../../../HR/PersonConnection/personConnection.service';



@Component({
  selector: 'base-connectionType-master',
  templateUrl: './connectionType.master.html',
  styleUrls: ['./connectionType.master.css']
})
export class ConnectionTypeMasterUI extends MasterModal<ConnectionType> {

  constructor(private connectionTypeService: ConnectionTypeService) {
    super(connectionTypeService);
  }
}