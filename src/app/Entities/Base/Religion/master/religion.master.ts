import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Religion } from '../religion';
import { ReligionService } from '../religion.service';
import { ReligionDeleteUI } from '../delete/religion.delete';
import { ReligionEditUI } from '../edit/religion.edit';
import { PersonService } from '../../../HR/Person/person.service';



@Component({
  selector: 'base-religion-master',
  templateUrl: './religion.master.html',
  styleUrls: ['./religion.master.css'],
  providers: [
    ReligionService,
    PersonService,
  ]
})
export class ReligionMasterUI extends MasterModal<Religion> {

  constructor(private religionService: ReligionService) {
    super(religionService);
  }
}