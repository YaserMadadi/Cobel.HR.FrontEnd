import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Training } from '../training';
import { TrainingService } from '../training.service';


@Component({
  selector: 'idea-training-delete',
  templateUrl: './training.delete.html',
  styleUrls: ['./training.delete.css'],
  
})
export class TrainingDeleteUI extends DeleteModal<Training> {

    constructor(private trainingService: TrainingService){
        super(trainingService);
    }

}