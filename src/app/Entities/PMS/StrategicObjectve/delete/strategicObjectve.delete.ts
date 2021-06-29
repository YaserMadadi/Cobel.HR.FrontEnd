import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { StrategicObjectve } from '../strategicObjectve';
import { StrategicObjectveService } from '../strategicObjectve.service';


@Component({
  selector: 'pms-strategicObjectve-delete',
  templateUrl: './strategicObjectve.delete.html',
  styleUrls: ['./strategicObjectve.delete.css'],
  providers: [StrategicObjectveService]
})
export class StrategicObjectveDeleteUI extends DeleteModal<StrategicObjectve> {

    constructor(private strategicObjectveService: StrategicObjectveService){
        super(strategicObjectveService);
    }

}