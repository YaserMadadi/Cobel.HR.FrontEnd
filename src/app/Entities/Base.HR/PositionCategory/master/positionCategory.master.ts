import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { PositionCategory } from '../positionCategory';
import { PositionCategoryService } from '../positionCategory.service';



@Component({
  selector: 'base-hr-positionCategory-master',
  templateUrl: './positionCategory.master.html',
  styleUrls: ['./positionCategory.master.css']
})
export class PositionCategoryMasterUI extends MasterModal<PositionCategory> {

  constructor(private positionCategoryService: PositionCategoryService) {
    super(positionCategoryService);
  }
}
