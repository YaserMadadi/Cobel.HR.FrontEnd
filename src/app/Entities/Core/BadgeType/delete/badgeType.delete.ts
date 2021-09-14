

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { BadgeType } from '../badgeType';
import { BadgeTypeService } from '../badgeType.service';


@Component({
  selector: 'core-badgeType-delete',
  templateUrl: './badgeType.delete.html',
  styleUrls: ['./badgeType.delete.css'],
  providers: [BadgeTypeService]
})
export class BadgeTypeDeleteUI extends DeleteModal<BadgeType> {

    constructor(private badgeTypeService: BadgeTypeService){
        super(badgeTypeService);
    }

}
