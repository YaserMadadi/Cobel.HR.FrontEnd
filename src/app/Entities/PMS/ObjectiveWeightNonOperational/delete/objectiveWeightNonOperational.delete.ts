import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { ObjectiveWeightNonOperational } from '../objectiveWeightNonOperational';
import { ObjectiveWeightNonOperationalService } from '../objectiveWeightNonOperational.service';


@Component({
  selector: 'pms-objectiveWeightNonOperational-delete',
  templateUrl: './objectiveWeightNonOperational.delete.html',
  styleUrls: ['./objectiveWeightNonOperational.delete.css'],
  providers: [ObjectiveWeightNonOperationalService]
})
export class ObjectiveWeightNonOperationalDeleteUI extends DeleteModal<ObjectiveWeightNonOperational> {

    constructor(private objectiveWeightNonOperationalService: ObjectiveWeightNonOperationalService){
        super(objectiveWeightNonOperationalService);
    }

}