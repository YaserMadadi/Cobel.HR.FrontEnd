import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { MilitaryServiceStatus } from '../militaryServiceStatus';
import { MilitaryServiceStatusService } from '../militaryServiceStatus.service';


@Component({
  selector: 'base-militaryServiceStatus-delete',
  templateUrl: './militaryServiceStatus.delete.html',
  styleUrls: ['./militaryServiceStatus.delete.css'],
  
})
export class MilitaryServiceStatusDeleteUI extends DeleteModal<MilitaryServiceStatus> {

    constructor(private militaryServiceStatusService: MilitaryServiceStatusService){
        super(militaryServiceStatusService);
    }

}