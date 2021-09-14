import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Badge } from '../badge';
import { BadgeService } from '../badge.service';
import { BadgeDeleteUI } from '../delete/badge.delete';
import { BadgeEditUI } from '../edit/badge.edit';



@Component({
  selector: 'core-badge-master',
  templateUrl: './badge.master.html',
  styleUrls: ['./badge.master.css'],
  providers: [
    BadgeService,
    
  ]
})
export class BadgeMasterUI extends MasterModal<Badge> {

  constructor(private badgeService: BadgeService) {
    super(badgeService);
  }
}
