import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { AppraiseType } from '../appraiseType';
import { AppraiseTypeService } from '../appraiseType.service';


@Component({
  selector: 'base-pms-appraiseType-delete',
  templateUrl: './appraiseType.delete.html',
  styleUrls: ['./appraiseType.delete.css'],
  
})
export class AppraiseTypeDeleteUI extends DeleteModal<AppraiseType> {

    constructor(private appraiseTypeService: AppraiseTypeService){
        super(appraiseTypeService);
    }

}