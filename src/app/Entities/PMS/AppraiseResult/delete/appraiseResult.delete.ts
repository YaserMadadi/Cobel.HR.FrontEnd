import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { AppraiseResult } from '../appraiseResult';
import { AppraiseResultService } from '../appraiseResult.service';


@Component({
  selector: 'pms-appraiseResult-delete',
  templateUrl: './appraiseResult.delete.html',
  styleUrls: ['./appraiseResult.delete.css'],
  providers: [AppraiseResultService]
})
export class AppraiseResultDeleteUI extends DeleteModal<AppraiseResult> {

    constructor(private appraiseResultService: AppraiseResultService){
        super(appraiseResultService);
    }

}