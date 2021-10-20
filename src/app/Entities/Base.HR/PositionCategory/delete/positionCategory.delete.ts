

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { PositionCategory } from '../positionCategory';
import { PositionCategoryService } from '../positionCategory.service';


@Component({
  selector: 'base-hr-positionCategory-delete',
  templateUrl: './positionCategory.delete.html',
  styleUrls: ['./positionCategory.delete.css'],
  
})
export class PositionCategoryDeleteUI extends DeleteModal<PositionCategory> {

    constructor(private positionCategoryService: PositionCategoryService){
        super(positionCategoryService);
    }

}
