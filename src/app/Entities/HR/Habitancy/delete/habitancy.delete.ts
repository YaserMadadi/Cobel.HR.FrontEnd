import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Habitancy } from '../habitancy';
import { HabitancyService } from '../habitancy.service';


@Component({
  selector: 'hr-habitancy-delete',
  templateUrl: './habitancy.delete.html',
  styleUrls: ['./habitancy.delete.css'],
  providers: [HabitancyService]
})
export class HabitancyDeleteUI extends DeleteModal<Habitancy> {

    constructor(private habitancyService: HabitancyService){
        super(habitancyService);
    }

}