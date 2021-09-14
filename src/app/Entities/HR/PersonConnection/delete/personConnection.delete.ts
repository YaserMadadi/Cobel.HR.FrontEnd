import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { PersonConnection } from '../personConnection';
import { PersonConnectionService } from '../personConnection.service';


@Component({
  selector: 'hr-personConnection-delete',
  templateUrl: './personConnection.delete.html',
  styleUrls: ['./personConnection.delete.css'],
  
})
export class PersonConnectionDeleteUI extends DeleteModal<PersonConnection> {

    constructor(private personConnectionService: PersonConnectionService){
        super(personConnectionService);
    }

}