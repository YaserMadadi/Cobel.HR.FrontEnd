import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { MilitaryServiceExcemption } from '../militaryServiceExcemption';
import { MilitaryServiceExcemptionService } from '../militaryServiceExcemption.service';


@Component({
  selector: 'hr-militaryServiceExcemption-delete',
  templateUrl: './militaryServiceExcemption.delete.html',
  styleUrls: ['./militaryServiceExcemption.delete.css'],
  providers: [MilitaryServiceExcemptionService]
})
export class MilitaryServiceExcemptionDeleteUI extends DeleteModal<MilitaryServiceExcemption> {

    constructor(private militaryServiceExcemptionService: MilitaryServiceExcemptionService){
        super(militaryServiceExcemptionService);
    }

}