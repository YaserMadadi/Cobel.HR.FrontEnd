import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { AppraiseResult } from '../appraiseResult';
import { AppraiseResultService } from '../appraiseResult.service';
import { AppraiseResultDeleteUI } from '../delete/appraiseResult.delete';
import { AppraiseResultEditUI } from '../edit/appraiseResult.edit';



@Component({
  selector: 'pms-appraiseResult-master',
  templateUrl: './appraiseResult.master.html',
  styleUrls: ['./appraiseResult.master.css'],
  providers: [
    AppraiseResultService,
    
  ]
})
export class AppraiseResultMasterUI extends MasterModal<AppraiseResult> {

  constructor(private appraiseResultService: AppraiseResultService) {
    super(appraiseResultService);
  }
}