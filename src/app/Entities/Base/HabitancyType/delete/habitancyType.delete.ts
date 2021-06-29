import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { HabitancyType } from '../habitancyType';
import { HabitancyTypeService } from '../habitancyType.service';


@Component({
  selector: 'base-habitancyType-delete',
  templateUrl: './habitancyType.delete.html',
  styleUrls: ['./habitancyType.delete.css'],
  providers: [HabitancyTypeService]
})
export class HabitancyTypeDeleteUI extends DeleteModal<HabitancyType> {

    constructor(private habitancyTypeService: HabitancyTypeService){
        super(habitancyTypeService);
    }

}