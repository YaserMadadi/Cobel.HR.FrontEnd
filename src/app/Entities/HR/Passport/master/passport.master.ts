import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Passport } from '../passport';
import { PassportService } from '../passport.service';
import { PassportDeleteUI } from '../delete/passport.delete';
import { PassportEditUI } from '../edit/passport.edit';



@Component({
  selector: 'hr-passport-master',
  templateUrl: './passport.master.html',
  styleUrls: ['./passport.master.css']
})
export class PassportMasterUI extends MasterModal<Passport> {

  constructor(private passportService: PassportService) {
    super(passportService);
  }
}