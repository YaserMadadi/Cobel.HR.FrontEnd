import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { HabitancyType } from '../habitancyType';
import { HabitancyTypeService } from '../habitancyType.service';
import { HabitancyTypeDeleteUI } from '../delete/habitancyType.delete';
import { HabitancyTypeEditUI } from '../edit/habitancyType.edit';
import { HabitancyService } from '../../../HR/Habitancy/habitancy.service';



@Component({
  selector: 'base-habitancyType-master',
  templateUrl: './habitancyType.master.html',
  styleUrls: ['./habitancyType.master.css'],
  
})
export class HabitancyTypeMasterUI extends MasterModal<HabitancyType> {

  constructor(private habitancyTypeService: HabitancyTypeService) {
    super(habitancyTypeService);
  }
}