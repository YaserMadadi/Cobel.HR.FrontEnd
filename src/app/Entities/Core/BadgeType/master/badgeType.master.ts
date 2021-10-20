import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { BadgeType } from '../badgeType';
import { BadgeTypeService } from '../badgeType.service';
import { BadgeTypeDeleteUI } from '../delete/badgeType.delete';
import { BadgeTypeEditUI } from '../edit/badgeType.edit';
import { BadgeService } from '../../Badge/badge.service';



@Component({
  selector: 'core-badgeType-master',
  templateUrl: './badgeType.master.html',
  styleUrls: ['./badgeType.master.css'],
  providers: [
    BadgeTypeService,
    BadgeService,
  ]
})
export class BadgeTypeMasterUI extends MasterModal<BadgeType> {

  constructor(private badgeTypeService: BadgeTypeService) {
    super(badgeTypeService);
  }
}
