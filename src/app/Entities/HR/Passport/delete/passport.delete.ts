import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Passport } from '../passport';
import { PassportService } from '../passport.service';


@Component({
  selector: 'hr-passport-delete',
  templateUrl: './passport.delete.html',
  styleUrls: ['./passport.delete.css'],
  
})
export class PassportDeleteUI extends DeleteModal<Passport> {

    constructor(private passportService: PassportService){
        super(passportService);
    }

}