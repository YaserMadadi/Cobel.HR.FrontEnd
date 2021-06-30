import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { ObjectiveWeightNonOperational } from '../objectiveWeightNonOperational';
import { ObjectiveWeightNonOperationalService } from '../objectiveWeightNonOperational.service';
import { ObjectiveWeightNonOperationalDeleteUI } from '../delete/objectiveWeightNonOperational.delete';
import { ObjectiveWeightNonOperationalEditUI } from '../edit/objectiveWeightNonOperational.edit';



@Component({
  selector: 'pms-objectiveWeightNonOperational-master',
  templateUrl: './objectiveWeightNonOperational.master.html',
  styleUrls: ['./objectiveWeightNonOperational.master.css'],
  providers: [
    ObjectiveWeightNonOperationalService,
    
  ]
})
export class ObjectiveWeightNonOperationalMasterUI extends MasterModal<ObjectiveWeightNonOperational> {

  constructor(private objectiveWeightNonOperationalService: ObjectiveWeightNonOperationalService) {
    super(objectiveWeightNonOperationalService);
  }
}