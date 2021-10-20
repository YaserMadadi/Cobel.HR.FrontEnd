import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { SchoolLevel } from '../schoolLevel';
import { SchoolLevelService } from '../schoolLevel.service';


@Component({
  selector: 'base-schoolLevel-delete',
  templateUrl: './schoolLevel.delete.html',
  styleUrls: ['./schoolLevel.delete.css'],
  
})
export class SchoolLevelDeleteUI extends DeleteModal<SchoolLevel> {

    constructor(private schoolLevelService: SchoolLevelService){
        super(schoolLevelService);
    }

}