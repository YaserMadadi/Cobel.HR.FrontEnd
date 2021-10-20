

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { Badge } from '../badge';
import { BadgeService } from '../badge.service';


@Component({
  selector: 'core-badge-delete',
  templateUrl: './badge.delete.html',
  styleUrls: ['./badge.delete.css'],
  providers: [BadgeService]
})
export class BadgeDeleteUI extends DeleteModal<Badge> {

    constructor(private badgeService: BadgeService){
        super(badgeService);
    }

}
