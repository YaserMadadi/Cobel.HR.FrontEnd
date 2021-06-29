import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { MilitaryServiceInclusive } from '../militaryServiceInclusive';
import { MilitaryServiceInclusiveService } from '../militaryServiceInclusive.service';


@Component({
  selector: 'hr-militaryServiceInclusive-delete',
  templateUrl: './militaryServiceInclusive.delete.html',
  styleUrls: ['./militaryServiceInclusive.delete.css'],
  providers: [MilitaryServiceInclusiveService]
})
export class MilitaryServiceInclusiveDeleteUI extends DeleteModal<MilitaryServiceInclusive> {

    constructor(private militaryServiceInclusiveService: MilitaryServiceInclusiveService){
        super(militaryServiceInclusiveService);
    }

}