import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { EducationSystem } from '../educationSystem';
import { EducationSystemService } from '../educationSystem.service';


@Component({
  selector: 'base-educationSystem-delete',
  templateUrl: './educationSystem.delete.html',
  styleUrls: ['./educationSystem.delete.css'],
  providers: [EducationSystemService]
})
export class EducationSystemDeleteUI extends DeleteModal<EducationSystem> {

    constructor(private educationSystemService: EducationSystemService){
        super(educationSystemService);
    }

}