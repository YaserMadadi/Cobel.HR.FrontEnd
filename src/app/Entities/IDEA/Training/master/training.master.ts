import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Training } from '../training';
import { TrainingService } from '../training.service';
import { TrainingDeleteUI } from '../delete/training.delete';
import { TrainingEditUI } from '../edit/training.edit';



@Component({
  selector: 'idea-training-master',
  templateUrl: './training.master.html',
  styleUrls: ['./training.master.css'],
  providers: [
    TrainingService,
    
  ]
})
export class TrainingMasterUI extends MasterModal<Training> {

  constructor(private trainingService: TrainingService) {
    super(trainingService);
  }
}