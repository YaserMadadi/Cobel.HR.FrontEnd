

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { MaritalStatus } from '../maritalStatus';
import { MaritalStatusService } from '../maritalStatus.service';


@Component({
  selector: 'base-hr-maritalStatus-delete',
  templateUrl: './maritalStatus.delete.html',
  styleUrls: ['./maritalStatus.delete.css'],
  
})
export class MaritalStatusDeleteUI extends DeleteModal<MaritalStatus> {

    constructor(private maritalStatusService: MaritalStatusService){
        super(maritalStatusService);
    }

}
