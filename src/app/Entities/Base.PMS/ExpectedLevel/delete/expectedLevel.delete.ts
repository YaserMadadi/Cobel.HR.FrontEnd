import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { ExpectedLevel } from '../expectedLevel';
import { ExpectedLevelService } from '../expectedLevel.service';


@Component({
  selector: 'base-pms-expectedLevel-delete',
  templateUrl: './expectedLevel.delete.html',
  styleUrls: ['./expectedLevel.delete.css'],
  providers: [ExpectedLevelService]
})
export class ExpectedLevelDeleteUI extends DeleteModal<ExpectedLevel> {

    constructor(private expectedLevelService: ExpectedLevelService){
        super(expectedLevelService);
    }

}