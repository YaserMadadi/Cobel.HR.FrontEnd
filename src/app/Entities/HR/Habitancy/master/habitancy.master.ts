import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Habitancy } from '../habitancy';
import { HabitancyService } from '../habitancy.service';
import { HabitancyDeleteUI } from '../delete/habitancy.delete';
import { HabitancyEditUI } from '../edit/habitancy.edit';



@Component({
  selector: 'hr-habitancy-master',
  templateUrl: './habitancy.master.html',
  styleUrls: ['./habitancy.master.css']
})
export class HabitancyMasterUI extends MasterModal<Habitancy> {

  constructor(private habitancyService: HabitancyService) {
    super(habitancyService);
  }
}