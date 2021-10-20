import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Coach } from '../coach';
import { CoachService } from '../coach.service';


@Component({
  selector: 'lad-coach-delete',
  templateUrl: './coach.delete.html',
  styleUrls: ['./coach.delete.css'],
  
})
export class CoachDeleteUI extends DeleteModal<Coach> {

    constructor(private coachService: CoachService){
        super(coachService);
    }

}