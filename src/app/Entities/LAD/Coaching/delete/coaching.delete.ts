import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Coaching } from '../coaching';
import { CoachingService } from '../coaching.service';


@Component({
  selector: 'lad-coaching-delete',
  templateUrl: './coaching.delete.html',
  styleUrls: ['./coaching.delete.css'],
  providers: [CoachingService]
})
export class CoachingDeleteUI extends DeleteModal<Coaching> {

    constructor(private coachingService: CoachingService){
        super(coachingService);
    }

}