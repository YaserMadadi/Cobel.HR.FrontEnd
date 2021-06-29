import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { ExcemptionType } from '../excemptionType';
import { ExcemptionTypeService } from '../excemptionType.service';


@Component({
  selector: 'base-excemptionType-delete',
  templateUrl: './excemptionType.delete.html',
  styleUrls: ['./excemptionType.delete.css'],
  providers: [ExcemptionTypeService]
})
export class ExcemptionTypeDeleteUI extends DeleteModal<ExcemptionType> {

    constructor(private excemptionTypeService: ExcemptionTypeService){
        super(excemptionTypeService);
    }

}